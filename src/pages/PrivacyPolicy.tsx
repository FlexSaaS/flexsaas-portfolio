import styled from "styled-components";
import { useState } from "react";

const PolicyContainer = styled.section`
  max-width: 900px;
  margin: 4rem auto;
  padding: 2rem;
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 12px rgba(0,0,0,0.07);
  color: #222;
  font-size: 1.05rem;
  line-height: 1.7;
`;

const Title = styled.h1`
  font-size: 2.2rem;
  margin-bottom: 1.2rem;
  color: #0066ff;
`;

const SectionTitle = styled.button`
  display: block;
  width: 100%;
  text-align: left;
  background: none;
  border: none;
  font-size: 1.2rem;
  color: #0052cc;
  margin-top: 2rem;
  margin-bottom: 0.7rem;
  cursor: pointer;
  padding: 0;
  outline: none;
`;

const SectionContent = styled.div`
  margin-bottom: 1.2rem;
`;

const sections = [
  {
    title: "1. Introduction",
    content: `FlexSaaS (“we”, “us”, “our”) respects your privacy and is committed to protecting your personal data. This Privacy Policy explains how we collect, use, store, and share your information when you use our services, in compliance with the UK General Data Protection Regulation (UK GDPR) and the Data Protection Act 2018.\nBy using our website or services, you agree to the practices described in this policy.`
  },
  {
    title: "2. Information We Collect",
    content: `We may collect and process the following types of information:\n\na) Information you provide directly:\n- Name, email address, phone number, business name\n- Project details, design preferences, or service requirements\n- Payment details (processed securely via third-party payment providers)\n\nb) Information we collect automatically:\n- IP address and browser type\n- Usage data such as pages visited and time spent\n- Device information (e.g., operating system)\n\nc) Client’s customer data (for booking systems/websites we manage):\n- Booking information (e.g., customer names, appointment times)\n- Contact details as entered by customers on your site\nThis data is processed solely on your behalf as a data processor.`
  },
  {
    title: "3. How We Use Your Information",
    content: `We use personal data to:\n- Provide and manage our services\n- Communicate with you about projects and updates\n- Process payments and send invoices\n- Improve and personalise our services\n- Maintain security and prevent fraud\n- Comply with legal obligations`
  },
  {
    title: "4. Legal Basis for Processing",
    content: `We process your personal data under the following lawful bases:\n- Performance of a contract (to deliver the services you’ve requested)\n- Legitimate interests (to improve our services, protect our business)\n- Legal obligations (for tax, accounting, and compliance)\n- Consent (for optional marketing communications)`
  },
  {
    title: "5. Sharing Your Data",
    content: `We do not sell your personal data. We may share it with:\n- Service providers (e.g., hosting companies, payment processors, analytics providers)\n- Legal authorities when required by law\n- Third parties with your explicit consent`
  },
  {
    title: "6. International Data Transfers",
    content: `If we transfer your data outside the UK, we ensure appropriate safeguards are in place (e.g., UK-approved standard contractual clauses).`
  },
  {
    title: "7. Data Retention",
    content: `We keep personal data only for as long as necessary to fulfil the purposes we collected it for, including legal, accounting, or reporting requirements. Client website/booking data is retained according to the agreement and deleted upon request.`
  },
  {
    title: "8. Your Rights (UK GDPR)",
    content: `You have the right to:\n- Access your personal data\n- Request correction of inaccurate data\n- Request deletion of your data\n- Object to processing\n- Restrict processing\n- Data portability\n- Withdraw consent (for marketing)\nTo exercise these rights, email us at support@flexsaas.co.uk.`
  },
  {
    title: "9. Security Measures",
    content: `We use industry-standard security measures to protect your data, including encrypted connections (SSL/TLS), secure hosting, and access controls.`
  },
  {
    title: "10. Cookies",
    content: `We use cookies to enhance your experience and analyse traffic. You can manage or disable cookies via your browser settings. For more details, see our Cookie Policy.`
  },
  {
    title: "11. Changes to This Policy",
    content: `We may update this Privacy Policy from time to time. Any changes will be posted on our website, and the “Last Updated” date will be revised.`
  },
  {
    title: "12. Contact Us",
    content: `If you have any questions about this Privacy Policy or how we handle your data, contact us at:\n\nFlexSaaS\nEmail: support@flexsaas.co.uk\nWebsite: https://flexsaas.co.uk\nUnited Kingdom`
  }
];

function PrivacyPolicy() {
  const [openSection, setOpenSection] = useState<number | null>(0);

  return (
    <PolicyContainer id="privacy">
      <Title>FlexSaaS Privacy Policy</Title>
      <div>Last Updated: 11 August 2025</div>
      {sections.map((section, idx) => (
        <div key={section.title}>
          <SectionTitle onClick={() => setOpenSection(openSection === idx ? null : idx)} aria-expanded={openSection === idx} aria-controls={`section-content-${idx}`}>
            {section.title}
          </SectionTitle>
          {openSection === idx && (
            <SectionContent id={`section-content-${idx}`}>{section.content.split('\n').map((line, i) => <div key={i}>{line}</div>)}</SectionContent>
          )}
        </div>
      ))}
    </PolicyContainer>
  );
}

export default PrivacyPolicy;
