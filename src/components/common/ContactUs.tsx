import React, { useRef, useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";
import { sendEmailForm } from "../../services/emailServices";

function EmailForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (status) {
      const timer = setTimeout(() => {
        setStatus(null);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [status]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current || isSubmitting) return;

    setIsSubmitting(true);
    setStatus(null);

    sendEmailForm(formRef.current)
      .then((text) => {
        console.log(text);
        setStatus("✅ Message sent successfully!");
        formRef.current?.reset();
      })
      .catch((err) => {
        console.error(err);
        setStatus("❌ Failed to send message. Please try again later.");
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  return (
    <FormContainer id="contact">
      <SectionTitle>Get In Touch</SectionTitle>
      <SectionSubtitle>We'd love to hear from you</SectionSubtitle>
      <Form ref={formRef} onSubmit={handleSubmit}>
        <InputGroup>
          <Input type="text" name="user_name" placeholder="Your Name" required />
        </InputGroup>
        <InputGroup>
          <Input type="email" name="email" placeholder="Your Email" required />
        </InputGroup>
        <InputGroup>
          <Textarea name="message" placeholder="Your Message" required rows={5} />
        </InputGroup>
        <Button type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Sending..." : "Send Message"}
        </Button>
        {status && <StatusMessage status={status.includes("✅") ? "success" : "error"}>{status}</StatusMessage>}
      </Form>
    </FormContainer>
  );
}

export default EmailForm;

// Animations
const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
`;

const pulse = keyframes`
  0% { box-shadow: 0 0 0 0 rgba(37, 99, 235, 0.4); }
  70% { box-shadow: 0 0 0 10px rgba(37, 99, 235, 0); }
  100% { box-shadow: 0 0 0 0 rgba(37, 99, 235, 0); }
`;

// Styled Components
const FormContainer = styled.div`
  width: 100%;
  background: #f5f7fa;
  padding: 5rem 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  color: #111827;
  margin-bottom: 0.5rem;
  font-weight: 700;
  text-align: center;
  letter-spacing: -0.025em;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const SectionSubtitle = styled.p`
  font-size: 1.125rem;
  color: #6b7280;
  margin-bottom: 3rem;
  text-align: center;
  max-width: 600px;
  line-height: 1.6;
`;

const Form = styled.form`
  width: 100%;
  max-width: 600px;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const sharedInputStyles = `
  padding: 1rem 1.25rem;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  font-size: 1rem;
  font-family: inherit;
  transition: all 0.3s ease;
  background: #f9fafb;
  width: 100%;
  color: #111827;

  &::placeholder {
    color: #9ca3af;
    opacity: 1;
  }

  &:focus {
    border-color: #3b82f6;
    box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.15);
    outline: none;
    background: #ffffff;
  }

  &:hover {
    border-color: #d1d5db;
  }
`;

const Input = styled.input`
  ${sharedInputStyles}
  height: 48px;
`;

const Textarea = styled.textarea`
  ${sharedInputStyles}
  resize: vertical;
  min-height: 150px;
  line-height: 1.5;
`;

const Button = styled.button`
  padding: 1rem 1.5rem;
  background: #3b82f6;
  color: white;
  font-size: 1rem;
  font-weight: 600;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-top: 0.5rem;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  height: 52px;

  &:hover {
    background: #2563eb;
    transform: translateY(-1px);
  }

  &:active {
    transform: translateY(0);
  }

  &:disabled {
    background: #93c5fd;
    cursor: not-allowed;
    transform: none;
  }

  &:not(:disabled) {
    animation: ${pulse} 2s infinite;
  }
`;

const StatusMessage = styled.div<{ status: "success" | "error" }>`
  margin-top: 1rem;
  padding: 1rem;
  border-radius: 8px;
  font-size: 0.95rem;
  text-align: center;
  animation: ${fadeIn} 0.3s ease-out;
  background: ${({ status }) => (status === "success" ? "#f0fdf4" : "#fef2f2")};
  color: ${({ status }) => (status === "success" ? "#166534" : "#991b1b")};
  border: 1px solid ${({ status }) => (status === "success" ? "#bbf7d0" : "#fecaca")};
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
`;
