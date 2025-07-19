import styled from "styled-components";
import PurchaseButton from "./PurchaseButton";

function Pricing() {
  // Portfolio pricing plans (now only 2 tiers)
  const portfolioPlans = [
    {
      id: 1,
      title: "Standard Portfolio",
      price: "£19",
      badge: "Tier 1 - Standard",
      priceId: "price_1RdDvH2a7jzpskfovW9dn9A9",
      features: [
        "5 Project Showcases",
        "Contact Form",
        "Standard SEO",
        "Client Testimonials",
        "Mobile Responsive",
        "Monthly Backups",
        "Standard Analytics",
      ],
      cta: "Get Started",
    },
    {
      id: 2,
      title: "Premium Portfolio",
      price: "£49",
      badge: "Tier 2 - Premium",
      priceId: "price_1Rf5gW2a7jzpskfo1al9rslA",
      features: [
        "Custom Domain✅",
        "Review System✅",
        "Unlimited Projects✅",
        "Contact Form✅",
        "Advanced SEO✅",
        "Gallery System✅",
        "Priority Support✅",
        "Client Testimonials✅",
        "Mobile Responsive✅",
        "Advanced Analytics✅",
      ],
      cta: "Get Started",
      highlighted: true,
    },
  ];

  // Booking system pricing plans (now only 2 tiers)
  const bookingPlans = [
    {
      id: 1,
      title: "Standard Booking",
      price: "£59",
      badge: "Tier 1 - Standard",
      priceId: "price_1Rf5hR2a7jzpskfou1EYRpQ3",
      features: [
        "Online Scheduling",
        "Calendar Management",
        "Email Reminders",
        "Standard Reporting",
        "Email Support",
        "Up to 5 Staff Members",
        "Standard Client Management",
      ],
      cta: "Get Started",
    },
    {
      id: 2,
      title: "Premium Booking",
      price: "£79",
      badge: "Tier 2 - Premium",
      priceId: "price_1Rf5hg2a7jzpskfoWNV8qmDQ",
      features: [
        "All Standard Features",
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
  ];

  return (
    <div id="pricing">
      <PricingSection>
        <SectionTitle>Simple, Transparent Pricing</SectionTitle>
        <SectionSubtitle>Choose the perfect plan for your business needs</SectionSubtitle>

        <ServiceSection>
          <ServiceHeader>Portfolio Websites</ServiceHeader>
          <PricingGrid>
            {portfolioPlans.map((plan) => (
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
                <PurchaseButton priceId={plan.priceId} />
              </PricingCard>
            ))}
          </PricingGrid>
        </ServiceSection>

        <ServiceSection>
          <ServiceHeader>Booking Systems</ServiceHeader>
          <PricingGrid>
            {bookingPlans.map((plan) => (
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
                <PurchaseButton priceId={plan.priceId} />
              </PricingCard>
            ))}
          </PricingGrid>
        </ServiceSection>
      </PricingSection>
    </div>
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

const ServiceSection = styled.div`
  margin-bottom: 4rem;

  &:last-child {
    margin-bottom: 0;
  }
`;

const ServiceHeader = styled.h3`
  text-align: center;
  font-size: 1.8rem;
  margin-bottom: 4rem;
  color: #0066ff;
  position: relative;
  display: inline-block;
  left: 50%;
  transform: translateX(-50%);
  padding: 0 1rem;

  &::after {
    content: "";
    position: absolute;
    bottom: -10px;
    left: 0;
    width: 100%;
    height: 1px;
    background: linear-gradient(90deg, #0066ff, rgb(21, 75, 155));
    border-radius: 1px;
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
    border: 2px solid  #0066ff;
    transform: scale(1.02);
    
    &::before {
      content: 'Recommended Plan';
      position: absolute;
      top: -12px;
      right: 20px;
      background: #0066ff;
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
