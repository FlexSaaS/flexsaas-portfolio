import { useState } from "react";
import { signInAnonymously } from "firebase/auth";
import { auth } from "../../firebase";
import { useDatabase } from "../../db/DatabaseContext";
import styled, { keyframes } from "styled-components";

function PurchaseButton({ priceId }: { priceId: string }) {
  const [loading, setLoading] = useState(false);
  const db = useDatabase();

  const handlePurchase = async () => {
    setLoading(true);
    try {
      const { user } = await signInAnonymously(auth);
      if (!user) throw new Error("Failed to sign in anonymously");

      const checkoutUrl = await db.getCheckoutUrl(priceId, user.uid);
      window.location.href = checkoutUrl;
    } catch (error) {
      console.error("Error during purchase flow:", error);
      setLoading(false);
    }
  };

  return (
    <Button onClick={handlePurchase} disabled={loading} loading={loading}>
      Get Started
      {loading && <Spinner />}
    </Button>
  );
}

export default PurchaseButton;

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const Button = styled.button.withConfig({
  shouldForwardProp: (prop) => prop !== "loading",
})<{ loading: boolean }>`
  position: relative;
  padding-right: ${(props) => (props.loading ? "2rem" : "1rem")};
  cursor: pointer;
  font-weight: bold;
  background-color: #0066ff;
  color: white;
  border: none;
  border-radius: 6px;
  padding: 0.7rem 1.5rem;
  font-family: inherit;

  &:disabled {
    cursor: not-allowed;
    opacity: 0.6;
    background-color: #004bbf;
  }
`;

const Spinner = styled.span`
  width: 16px;
  height: 16px;
  border: 2px solid white;
  border-top: 2px solid transparent;
  border-radius: 50%;
  animation: ${spin} 1s linear infinite;
  position: absolute;
  right: 0.5rem;
  top: 50%;
  transform: translateY(-50%);
`;
