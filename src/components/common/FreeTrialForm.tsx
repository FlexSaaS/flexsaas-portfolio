import React, { useRef, useState } from "react";
import styled, { keyframes } from "styled-components";
import { sendEmailForm } from "../../services/emailServices";

interface FreeTrialModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function FreeTrialModal({
  isOpen,
  onClose,
}: FreeTrialModalProps) {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current || isSubmitting) return;

    setIsSubmitting(true);
    setStatus(null);

    try {
      await sendEmailForm(formRef.current);
      setStatus("✅ Thank you! We’ll contact you shortly.");
      formRef.current.reset();
      setTimeout(onClose, 3000);
    } catch (err: any) {
      setStatus(err.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Overlay>
      <ModalContainer>
        <CloseButton onClick={onClose}>×</CloseButton>
        <h2>Start Your Free Trial</h2>
        <Form ref={formRef} onSubmit={handleSubmit}>
          <Input
            type="text"
            name="user_name"
            placeholder="Your Name"
            required
          />
          <Input type="text" name="businessName" placeholder="Business Name" />
          <Input type="email" name="email" placeholder="Your Email" required />
          <Input type="tel" name="phone" placeholder="Phone Number" />
          <Textarea name="message" placeholder="Message" rows={4} />
          <Button type="submit" disabled={isSubmitting}>
            {isSubmitting ? "Sending..." : "Start Free Trial"}
          </Button>
          {status && (
            <StatusMessage status={status.includes("✅") ? "success" : "error"}>
              {status}
            </StatusMessage>
          )}
        </Form>
      </ModalContainer>
    </Overlay>
  );
}

// --- Styled Components ---
const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(-10px); }
  to { opacity: 1; transform: translateY(0); }
`;

const pulse = keyframes`
  0% { box-shadow: 0 0 0 0 rgba(37, 99, 235, 0.4); }
  70% { box-shadow: 0 0 0 10px rgba(37, 99, 235, 0); }
  100% { box-shadow: 0 0 0 0 rgba(37, 99, 235, 0); }
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 999;
`;

const ModalContainer = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 12px;
  width: 90%;
  max-width: 500px;
  animation: ${fadeIn} 0.3s ease-out;
  position: relative;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 0.5rem;
  right: 1rem;
  background: transparent;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 1rem;
`;

const Input = styled.input`
  padding: 0.9rem 1.25rem;
  border-radius: 8px;
  border: 1px solid #e5e7eb;
  font-size: 1rem;
  width: 100%;
  &:focus {
    outline: none;
    border-color: #3b82f6;
    box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.15);
  }
`;

const Textarea = styled.textarea`
  padding: 0.9rem 1.25rem;
  border-radius: 8px;
  border: 1px solid #e5e7eb;
  font-size: 1rem;
  width: 100%;
  resize: vertical;
  min-height: 100px;
  &:focus {
    outline: none;
    border-color: #3b82f6;
    box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.15);
  }
`;

const Button = styled.button`
  padding: 1rem 1.5rem;
  border-radius: 8px;
  border: none;
  font-weight: 600;
  background: #3b82f6;
  color: white;
  cursor: pointer;
  font-size: 1rem;
  &:hover {
    background: #2563eb;
    transform: translateY(-1px);
  }
  &:disabled {
    background: #93c5fd;
    cursor: not-allowed;
  }
  &:not(:disabled) {
    animation: ${pulse} 2s infinite;
  }
`;

const StatusMessage = styled.div<{ status: "success" | "error" }>`
  padding: 0.8rem 1rem;
  border-radius: 8px;
  font-size: 0.95rem;
  text-align: center;
  margin-top: 0.5rem;
  background: ${({ status }) => (status === "success" ? "#f0fdf4" : "#fef2f2")};
  color: ${({ status }) => (status === "success" ? "#166534" : "#991b1b")};
  border: 1px solid
    ${({ status }) => (status === "success" ? "#bbf7d0" : "#fecaca")};
`;
