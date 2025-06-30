import React, { useRef, useState } from "react";
import styled from "styled-components"; // adjust path as needed
import { sendEmailForm } from "../../services/emailServices";

function EmailForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    sendEmailForm(formRef.current)
      .then((text) => {
        console.log(text);
        setStatus("✅ Message sent successfully!");
        formRef.current?.reset();
      })
      .catch((err) => {
        console.error(err);
        setStatus("❌ Failed to send message. Try again later.");
      });
  };

  return (
    <FormContainer>
      <SectionTitle>Contact Us</SectionTitle>
      <Form ref={formRef} onSubmit={handleSubmit}>
        <Input type="text" name="user_name" placeholder="Your Name" required />
        <Input type="email" name="email" placeholder="Your Email" required />
        <Textarea name="message" placeholder="Your Message" required />
        <Button type="submit">Send</Button>
        {status && <StatusMessage>{status}</StatusMessage>}
      </Form>
    </FormContainer>
  );
}

export default EmailForm;

const FormContainer = styled.div`
  width: 100%;
  background: #f7f9fb;
  padding: 4rem 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  color: #333;
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const sharedInputStyles = `
  padding: 0.9rem 1rem;
  border: 1px solid #d1d5db;
  border-radius: 5px;
  font-size: 1rem;
  font-family: inherit;
  transition: border 0.2s, box-shadow 0.2s;

  &::placeholder {
    color: #9ca3af;  /* subtle gray placeholder */
    font-style: italic;
    opacity: 1; /* fix Firefox default */
  }

  &:focus {
    border-color: #2563eb;
    box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.15);
    outline: none;
  }
`;

const Form = styled.form`
  width: 100%;
  max-width: 600px;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  font-family: inherit;
`;

const Input = styled.input`
  ${sharedInputStyles}
`;

const Textarea = styled.textarea`
  ${sharedInputStyles}
  resize: vertical;
  min-height: 120px;
`;

const Button = styled.button`
  padding: 0.9rem;
  background: #2563eb;
  color: white;
  font-size: 1rem;
  font-weight: 500;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-family: inherit;
  transition: background 0.3s ease;

  &:hover {
    background: #1e40af;
  }

  &:disabled {
    background: #93c5fd;
    cursor: not-allowed;
  }
`;

const StatusMessage = styled.p`
  margin-top: 1rem;
  text-align: center;
  font-size: 0.95rem;
  color: #4b5563;
  font-family: inherit;
`;
