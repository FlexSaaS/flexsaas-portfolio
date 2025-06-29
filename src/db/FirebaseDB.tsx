import { addDoc, collection, onSnapshot } from "firebase/firestore";
import { httpsCallable } from "firebase/functions";
import { auth, db, functions } from "../firebase";
import type { IDatabase } from "./IDatabase";

export class FirebaseDB implements IDatabase {
  async getCheckoutUrl(priceId: string, userId: string): Promise<string> {
    const checkoutSessionRef = collection(
      db,
      "customers",
      userId,
      "checkout_sessions"
    );

    const docRef = await addDoc(checkoutSessionRef, {
      price: priceId,
      success_url: window.location.origin,
      cancel_url: window.location.origin,
    });

    return new Promise<string>((resolve, reject) => {
      const unsubscribe = onSnapshot(docRef, (snap) => {
        const data = snap.data();
        if (data?.url) {
          unsubscribe();
          resolve(data.url);
        } else if (data?.error) {
          unsubscribe();
          reject(new Error(data.error.message));
        }
      });
    });
  }

  async getPortalUrl(): Promise<string> {
    const user = auth.currentUser;
    if (!user) throw new Error("User must be logged in");

    const functionRef = httpsCallable(
      functions,
      "ext-firestore-stripe-payments-createPortalLink"
    );
    const { data } = await functionRef({
      customerId: user.uid,
      returnUrl: window.location.origin,
    });

    const url = (data as { url: string }).url;
    if (!url) throw new Error("No portal URL returned");
    return url;
  }
}
