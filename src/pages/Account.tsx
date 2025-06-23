import { useEffect, useState } from "react";
import { getAuth, onAuthStateChanged, signOut, type User } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { initFirebase } from "../firebase";
import { getCheckoutUrl } from "../components/common/stripePayment";

const auth = getAuth(initFirebase());

function Account() {
  const app = initFirebase();
  const [user, setUser] = useState<User | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
      } else {
        navigate("/"); // Redirect to home/login if not signed in
      }
    });

    return () => unsubscribe();
  }, [navigate]);

  const handleLogout = async () => {
    await signOut(auth);
    navigate("/");
  };

  const handlePurchase = async () => {
    console.log("Purchase button clicked");

    const priceId = "price_1RdDvH2a7jzpskfovW9dn9A9";
    const checkoutUrl = await getCheckoutUrl(app, priceId);
    console.log("Checkout URL:", checkoutUrl);

    window.location.href = checkoutUrl;
  };

  if (!user) return null;

  return (
    <Container>
      <Card>
        <ProfilePic src={user.photoURL ?? ""} alt="Profile" />
        <h2>{user.displayName}</h2>
        <p>{user.email}</p>
        <PurchaseButton onClick={handlePurchase}>Purchase</PurchaseButton>
        <LogoutButton onClick={handleLogout}>Logout</LogoutButton>
      </Card>
    </Container>
  );
}

export default Account;

const PurchaseButton = styled.button`
  margin-top: 1rem;
  background: #007bff;
  color: white;
  padding: 0.7rem 1.5rem;
  border: none;
  border-radius: 6px;
  font-weight: bold;
  cursor: pointer;

  &:hover {
    background: #0056b3;
  }
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: #f9f9f9;
`;

const Card = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  text-align: center;
`;

const ProfilePic = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 1rem;
`;

const LogoutButton = styled.button`
  margin-top: 1.5rem;
  background: #ff4444;
  color: white;
  padding: 0.7rem 1.5rem;
  border: none;
  border-radius: 6px;
  font-weight: bold;
  cursor: pointer;

  &:hover {
    background: #cc0000;
  }
`;
