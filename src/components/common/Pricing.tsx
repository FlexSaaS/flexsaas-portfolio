import styled from "styled-components";
import { useState } from "react";

function Pricing() {
  const [activeTab, setActiveTab] = useState("portfolio");

  // Portfolio pricing plans
  const portfolioPlans = [
    {
      id: 1,
      title: "Basic Portfolio",
      price: "£21",
      badge: "Tier 1 - Basic",
      features: [
        "5 Project Showcases",
        "Contact Form",
        "Basic SEO",
        "Mobile Responsive",
        "Email Support",
        "1 Year Hosting",
        "Monthly Backups",
        "Basic Analytics",
      ],
      cta: "Get Started",
    },
    {
      id: 2,
      title: "Professional",
      price: "£49",
      badge: "Tier 2 - Most Popular",
      features: [
        "Unlimited Projects",
        "Client Testimonials",
        "Advanced SEO",
        "Gallery System",
        "Priority Support",
        "2 Years Hosting",
        "Weekly Backups",
        "Advanced Analytics",
        "Social Media Integration",
      ],
      cta: "Get Started",
      highlighted: true,
    },
    {
      id: 3,
      title: "Enterprise",
      price: "£89",
      badge: "Tier 3 - Professional Features",
      features: [
        "All Professional Features",
        "Review System",
        "Client Portal",
        "Custom Domain",
        "24/7 Support",
        "3 Years Hosting",
        "Daily Backups",
        "Premium Analytics",
        "Custom Integrations",
        "Dedicated Account Manager",
      ],
      cta: "Get Started",
    },
  ];

  // Booking system pricing plans
  const bookingPlans = [
    {
      id: 1,
      title: "Essentials",
      price: "£59",
      badge: "Tier 1 - Basic",
      features: [
        "Online Scheduling",
        "Calendar Management",
        "Email Reminders",
        "Basic Reporting",
        "Email Support",
        "Up to 5 Staff Members",
        "Basic Client Management",
      ],
      cta: "Get Started",
    },
    {
      id: 2,
      title: "Professional",
      price: "£79",
      badge: "Tier 2 - Most Popular",
      features: [
        "All Essentials Features",
        "Payment Processing",
        "SMS Reminders",
        "Client Management",
        "Priority Support",
        "Up to 15 Staff Members",
        "Advanced Reporting",
        "Custom Booking Forms",
      ],
      cta: "Get Started",
      highlighted: true,
    },
    {
      id: 3,
      title: "Enterprise",
      price: "£129",
      badge: "Tier 3 - Professional Features",
      features: [
        "All Professional Features",
        "Multi-staff Scheduling",
        "Inventory Management",
        "Custom Branding",
        "API Access",
        "Unlimited Staff Members",
        "White-label Options",
        "Custom Development",
        "Dedicated Support",
      ],
      cta: "Get Started",
    },
  ];

  const activePlans = activeTab === "portfolio" ? portfolioPlans : bookingPlans;

  return (
    <PricingSection>
      <SectionTitle>Simple, Transparent Pricing</SectionTitle>
      <SectionSubtitle>Choose the perfect plan for your business needs</SectionSubtitle>

      <ServiceTabs>
        <ServiceTab active={activeTab === "portfolio"} onClick={() => setActiveTab("portfolio")}>
          Portfolio Websites
        </ServiceTab>
        <ServiceTab active={activeTab === "booking"} onClick={() => setActiveTab("booking")}>
          Booking Systems
        </ServiceTab>
      </ServiceTabs>

      <PricingGrid>
        {activePlans.map((plan) => (
          <PricingCard key={plan.id} highlighted={plan.highlighted}>
            <ServiceBadge>{plan.badge}</ServiceBadge>
            <PlanTitle>{plan.title}</PlanTitle>
            <PlanPrice>
              {plan.price}
              <span>/mo</span>
            </PlanPrice>
            <FeatureList>
              {plan.features.map((feature, index) => (
                <FeatureItem key={index}>{feature}</FeatureItem>
              ))}
            </FeatureList>
            <PrimaryButton>{plan.cta}</PrimaryButton>
          </PricingCard>
        ))}
      </PricingGrid>
    </PricingSection>
  );
}

export default Pricing;

// Styled Components
const PricingSection = styled.section`
  padding: 6rem 5%;
  background: #f5f7fa;
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
`;

const SectionTitle = styled.h2`
  text-align: center;
  font-size: 2.2rem;
  margin-bottom: 1rem;
  color: #333;
`;

const SectionSubtitle = styled.p`
  text-align: center;
  color: #666;
  margin-bottom: 3rem;
  font-size: 1.1rem;
`;

const ServiceTabs = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 2rem;
  gap: 1rem;
`;

const ServiceTab = styled.button<{ active?: boolean }>`
  padding: 0.8rem 1.5rem;
  background: ${({ active }) => (active ? "#5b21b6" : "transparent")};
  color: ${({ active }) => (active ? "white" : "#555")};
  border: ${({ active }) => (active ? "none" : "1px solid #ddd")};
  border-radius: 8px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-bottom: 25px;

  &:hover {
    background: ${({ active }) => (active ? "#472196" : "#f0f0f0")};
  }
`;

const PricingGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const PricingCard = styled.div<{ highlighted?: boolean }>`
  background: white;
  border-radius: 10px;
  padding: 2rem;
  text-align: center;
  border: 1px solid #e0e0e0;
  transition: all 0.3s ease;
  position: relative;
  display: flex;
  flex-direction: column;
  height: 100%;

  &:hover {
    transform: translateY(-6px);
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
  }

  ${({ highlighted }) =>
    highlighted &&
    `
    border: 2px solid #5b21b6;
    transform: scale(1.02);
    
    &::before {
      content: 'Most Popular';
      position: absolute;
      top: -12px;
      right: 20px;
      background: #5b21b6;
      color: white;
      padding: 0.3rem 0.8rem;
      border-radius: 999px;
      font-size: 0.75rem;
      font-weight: 600;
    }
  `}
`;

const ServiceBadge = styled.div`
  position: absolute;
  top: -12px;
  left: 20px;
  background: #f0f0f0;
  color: #555;
  padding: 0.3rem 0.8rem;
  border-radius: 999px;
  font-size: 0.75rem;
  font-weight: 600;
`;

const PlanTitle = styled.h3`
  font-size: 1.5rem;
  margin: 1.5rem 0 0.5rem;
  color: #333;
`;

const PlanPrice = styled.div`
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  color: #333;

  span {
    font-size: 0.9rem;
    font-weight: 400;
    color: #777;
  }
`;

const FeatureList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0 0 1.5rem 0;
  overflow-y: auto;
  max-height: 250px;
  flex-grow: 1;
  scrollbar-width: thin;
  scrollbar-color: #ddd transparent;

  &::-webkit-scrollbar {
    width: 6px;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #ddd;
    border-radius: 6px;
  }
`;

const FeatureItem = styled.li`
  padding: 0.7rem 0;
  border-bottom: 1px solid #eee;
  color: #555;
  text-align: left;
  margin: 0 0.5rem;
`;

const PrimaryButton = styled.button`
  width: 100%;
  padding: 0.8rem;
  background-color: #5b21b6;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-top: auto;

  &:hover {
    background-color: #472196;
    transform: translateY(-2px);
  }
`;
