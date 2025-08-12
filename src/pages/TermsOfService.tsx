import styled from "styled-components";
import { useState } from "react";

const TermsContainer = styled.section`
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
    title: "1. Services and Account",
    content: `<strong>1.1 Scope of Services</strong><br />FlexSaaS builds and hosts portfolio websites and booking platforms tailored for local tradespeople, beauty salons and other small businesses. Our packaged Services include features such as project galleries, contact forms and SEO optimisation for construction portfolios flexsaas.co.uk; online scheduling, calendar integration and payment processing for booking systems flexsaas.co.uk; and fully customised solutions with tailored development and API integrations flexsaas.co.uk. We also offer limited free trials (currently 30 days) before you must select a subscription plan.<br /><br /><strong>1.3 Eligibility</strong><br />You must be at least 18 years old and capable of forming a binding contract to use our Services. By agreeing to these Terms, you represent that you meet these eligibility requirements and, if you are accepting these Terms on behalf of a company or other legal entity, that you have authority to bind that entity.`
  },
  {
    title: "2. Free Trial and Subscription Plans",
    content: `<strong>2.1 Free Trial</strong><br />New customers may be offered a free trial period, during which we will build and host a website or booking system without charge. Free trials are intended for evaluation and may be subject to limitations (such as reduced functionality) and may be modified or discontinued at any time. At the end of the trial period (usually 30 days) you must select a paid plan or your account may be suspended.<br /><br /><strong>2.2 Subscription Plans</strong><br />We offer different subscription plans for portfolio websites and booking systems with varying features and pricing. For example, our Standard Portfolio plan (£15/month) includes a contact form, standard SEO, a gallery system and mobile responsiveness. Our Premium Portfolio plan (£29/month) includes additional features such as a custom domain, review system, unlimited projects, priority support, client testimonials and advanced analytics. For booking systems, the Standard Booking plan (£29/month) offers online scheduling, calendar integration and email notifications for up to five staff members, whereas the Premium Booking plan (£39/month) adds payment processing, SMS reminders, client management and custom booking forms.<br /><br /><strong>2.3 Billing and Renewal</strong><br />Subscription fees are billed in advance on a monthly basis (unless stated otherwise). By selecting a paid plan, you authorise us to charge your chosen payment method on a recurring basis for the applicable fees. Unless you cancel your subscription before the end of the current billing cycle, your plan will renew automatically at the prevailing rates. All fees are non‑refundable unless required by law.<br /><br /><strong>2.4 Late or Failed Payments</strong><br />If your payment method fails or your account becomes past due, we may suspend or terminate your access to the Services until payment is received. You may also be responsible for any costs associated with our efforts to collect overdue amounts.`
  },
  {
    title: "3. User Responsibilities",
    content: `<strong>3.1 Acceptable Use</strong><br />You agree to use the Services in compliance with all applicable laws and regulations. You must not: use the Services for any unlawful or fraudulent purposes; upload or transmit viruses or malicious code; infringe the intellectual property or privacy rights of others; or interfere with the proper functioning of the Services.<br /><br /><strong>3.2 Content</strong><br />You retain all ownership rights to the content, images and data you supply to us or upload to your website. You grant FlexSaaS a non‑exclusive, worldwide licence to host, display and process your content solely for the purpose of providing the Services. You are responsible for ensuring that any content you provide does not violate any third‑party rights or laws.<br /><br /><strong>3.3 Third‑Party Services</strong><br />Our Services may integrate with third‑party services (e.g., payment processors, calendar providers). Your use of those third‑party services is subject to the third party’s own terms and policies. FlexSaaS does not control and is not responsible for third‑party services.`
  },
  {
    title: "4. Intellectual Property",
    content: `FlexSaaS retains all rights, title and interest in and to the Services, including all software, design templates, and underlying technology. Except for the limited rights granted to you under these Terms, no licence or right is granted to you by implication, estoppel or otherwise. You must not copy, modify, distribute, sell or reverse engineer any part of the Services.`
  },
  {
    title: "5. Privacy and Data Protection",
    content: `Your privacy is important to us. Our collection and use of personal data is governed by our <a href="/privacy-policy" target="_blank" rel="noopener noreferrer">Privacy Policy</a>. By using the Services, you consent to the collection, processing and sharing of your personal data as described in that policy.`
  },
  {
    title: "6. Termination",
    content: `<strong>6.1 Termination by You</strong><br />You may cancel your subscription at any time through your account settings. Cancellation will take effect at the end of the current billing cycle, and you will not receive a refund for any fees already paid.<br /><br /><strong>6.2 Termination by Us</strong><br />We may suspend or terminate your access to the Services if: (a) you breach these Terms or any other policy incorporated herein; (b) your payment is overdue; or (c) we are required to do so by law. We will make reasonable efforts to notify you prior to suspension or termination, but we reserve the right to suspend immediately if necessary to protect our Services or users.<br /><br /><strong>6.3 Effect of Termination</strong><br />Upon termination, your right to use the Services will cease immediately, and we may delete or disable your hosted website and content after a reasonable period. Sections of these Terms that by their nature should survive termination (e.g., intellectual property, limitations of liability and indemnification) will remain in effect.`
  },
  {
    title: "7. Disclaimer of Warranties",
    content: `Our Services are provided on an “as is” and “as available” basis. FlexSaaS does not warrant that the Services will be uninterrupted, error‑free or secure; nor do we make any warranty as to the results that may be obtained from use of the Services. To the fullest extent permitted by law, we expressly disclaim all warranties, whether express, implied or statutory, including merchantability, fitness for a particular purpose and non‑infringement.`
  },
  {
    title: "8. Limitation of Liability",
    content: `To the extent permitted by law, FlexSaaS and its officers, directors, employees and agents will not be liable for any indirect, incidental, consequential, special or exemplary damages arising from or relating to the use of the Services, even if advised of the possibility of such damages. Our total liability to you for any claim arising out of or relating to these Terms or the Services will not exceed the amount you paid to FlexSaaS in the twelve (12) months preceding the event giving rise to the claim.`
  },
  {
    title: "9. Indemnification",
    content: `You agree to indemnify and hold harmless FlexSaaS and its affiliates, officers and employees from and against any claims, liabilities, damages, losses and expenses (including reasonable legal fees) arising out of or related to your content, your use of the Services or your violation of these Terms.`
  },
  {
    title: "10. Changes to Terms",
    content: `FlexSaaS may modify these Terms at any time. We will provide notice of material changes (for example, by posting a notice on our website or sending an email). Your continued use of the Services after the effective date of any modifications constitutes your acceptance of the modified Terms.`
  },
  {
    title: "11. Governing Law and Dispute Resolution",
    content: `These Terms are governed by the laws of England and Wales without regard to conflict‑of‑law principles. Any dispute arising out of or relating to these Terms or the Services will be subject to the exclusive jurisdiction of the courts of England and Wales. You and FlexSaaS agree to submit to the personal jurisdiction of those courts.`
  },
  {
    title: "12. General Provisions",
    content: `<strong>Entire Agreement.</strong> These Terms constitute the entire agreement between you and FlexSaaS regarding the Services and supersede all prior or contemporaneous agreements.<br /><br /><strong>Severability.</strong> If any provision of these Terms is found to be unenforceable, the remaining provisions will remain in full force and effect.<br /><br /><strong>Assignment.</strong> You may not assign or transfer your rights or obligations under these Terms without our prior written consent. We may assign our rights and obligations without restriction.<br /><br /><strong>No Waiver.</strong> Our failure to enforce any right or provision of these Terms will not be deemed a waiver of such right or provision.<br /><br />For questions about these Terms or the Services, please contact FlexSaaS through the contact form on our website.<br /><br /><em>Disclaimer: This document provides a general template for Terms and Conditions based on publicly available information about FlexSaaS’s services and pricing flexsaas.co.uk. It does not constitute legal advice. For legally binding terms tailored to your specific business and compliance requirements, you should consult a qualified solicitor.</em>`
  }
];

function TermsOfService() {
  const [openSection, setOpenSection] = useState<number | null>(0);

  return (
    <TermsContainer id="terms">
      <Title>FlexSaaS — Terms and Conditions (Terms of Service)</Title>
      <div>Last updated: 11 August 2025</div>
    {sections.map((section, idx) => (
        <div key={section.title}>
          <SectionTitle onClick={() => setOpenSection(openSection === idx ? null : idx)} aria-expanded={openSection === idx} aria-controls={`section-content-${idx}`}>
            {section.title}
          </SectionTitle>
          {openSection === idx && (
            <SectionContent id={`section-content-${idx}`} dangerouslySetInnerHTML={{ __html: section.content }} />
          )}
        </div>
      ))}
    </TermsContainer>
  );
}

export default TermsOfService;