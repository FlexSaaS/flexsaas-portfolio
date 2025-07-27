import styled from "styled-components";
import PurchaseButton from "./PurchaseButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle, faCrown, faGem, faGift, faLayerGroup } from "@fortawesome/free-solid-svg-icons";
import type { IconDefinition } from "@fortawesome/fontawesome-svg-core";

interface PlanFeature {
  text: string;
  premium: boolean;
}

interface PricingPlan {
  id: number;
  title: string;
  price: string;
  badge: string;
  priceId: string;
  features: (string | PlanFeature)[];
  cta: string;
  highlighted?: boolean;
}

function Pricing() {
  // Portfolio pricing plans
  const portfolioPlans: PricingPlan[] = [
    {
      id: 1,
      title: "Standard Portfolio",
      price: "£19",
      badge: "Standard",
      priceId: "price_1RpVGuF2nWji5VZQItyhpYzY",
      features: ["5 Project Showcases", "Contact Form", "Standard SEO", "Gallery System", "Mobile Responsive"],
      cta: "Get Started",
    },
    {
      id: 2,
      title: "Premium Portfolio",
      price: "£29",
      badge: "Premium",
      priceId: "price_1RgSMbF2nWji5VZQMrdB1lyl",
      features: [
        { text: "Custom Domain", premium: true },
        { text: "Review System", premium: true },
        { text: "Unlimited Projects", premium: true },
        { text: "Contact Form", premium: true },
        { text: "Advanced SEO", premium: true },
        { text: "Gallery System", premium: true },
        { text: "Priority Support", premium: true },
        { text: "Client Testimonials", premium: true },
        { text: "Mobile Responsive", premium: true },
        { text: "Advanced Analytics", premium: true },
      ],
      cta: "Get Started",
      highlighted: true,
    },
  ];

  // Booking system pricing plans
  const bookingPlans: PricingPlan[] = [
    {
      id: 1,
      title: "Standard Booking",
      price: "£29",
      badge: "Standard",
      priceId: "price_1RgSMtF2nWji5VZQ0OCmLe0A",
      features: [
        "Online Scheduling",
        "Calendar Integration",
        "Email Notifications",
        "Up to 5 Staff Members",
        "Standard Reporting",
        "Mobile Responsive",
      ],
      cta: "Get Started",
    },
    {
      id: 2,
      title: "Premium Booking",
      price: "£39",
      badge: "Premium",
      priceId: "price_1RgSN5F2nWji5VZQPmSKHuIH",
      features: [
        { text: "All Standard Features", premium: true },
        { text: "Payment Processing", premium: true },
        { text: "SMS Reminders", premium: true },
        { text: "Client Management", premium: true },
        { text: "Priority Support", premium: true },
        { text: "Up to 15 Staff Members", premium: true },
        { text: "Advanced Reporting", premium: true },
        { text: "Custom Booking Forms", premium: true },
      ],
      cta: "Get Started",
      highlighted: true,
    },
  ];

  const renderFeatureItem = (feature: string | PlanFeature, index: number) => {
    if (typeof feature === "string") {
      return <FeatureItem key={index}>{feature}</FeatureItem>;
    }
    return (
      <FeatureItem key={index}>
        {feature.text} <PremiumFeatureIcon icon={faCheckCircle} />
      </FeatureItem>
    );
  };

  const getBadgeIcon = (badge: string): IconDefinition => {
    return badge === "Premium" ? faGem : faLayerGroup;
  };

  return (
    <div id="pricing">
      <FreeTrialBanner>
        <FontAwesomeIcon icon={faGift} /> We build the website completely for free for 30 days, after which you can choose a plan that suits you.
      </FreeTrialBanner>
      <PricingSection>
        <SectionTitle>Portfolio Packages</SectionTitle>
        <SectionDescription>
          Ideal for constructors, plumbers, electricians, and trades people to showcase their work. Choose the perfect pricing package to showcase
          your work
        </SectionDescription>
        <PricingGrid>
          {portfolioPlans.map((plan) => (
            <PricingCard key={plan.id} highlighted={plan.highlighted}>
              <ServiceBadge>
                <FontAwesomeIcon icon={getBadgeIcon(plan.badge)} /> {plan.badge}
              </ServiceBadge>
              {plan.highlighted && (
                <RecommendedBadge>
                  <FontAwesomeIcon icon={faCrown} /> Recommended
                </RecommendedBadge>
              )}
              <PlanTitle>{plan.title}</PlanTitle>
              <PlanPrice>
                {plan.price}
                <span>/mo</span>
              </PlanPrice>
              <FeatureList>{plan.features.map((feature, index) => renderFeatureItem(feature, index))}</FeatureList>
              <PurchaseButton priceId={plan.priceId} />
            </PricingCard>
          ))}
        </PricingGrid>
      </PricingSection>

      <PricingSection>
        <SectionTitle>Booking System Packages</SectionTitle>
        <SectionDescription>
          Ideal for barbers, hairdressers, nail techs and local businesses that require managing appointments and bookings online. Choose the perfect
          pricing package.
        </SectionDescription>
        <PricingGrid>
          {bookingPlans.map((plan) => (
            <PricingCard key={plan.id} highlighted={plan.highlighted}>
              <ServiceBadge>
                <FontAwesomeIcon icon={getBadgeIcon(plan.badge)} /> {plan.badge}
              </ServiceBadge>
              {plan.highlighted && (
                <RecommendedBadge>
                  <FontAwesomeIcon icon={faCrown} /> Recommended
                </RecommendedBadge>
              )}
              <PlanTitle>{plan.title}</PlanTitle>
              <PlanPrice>
                {plan.price}
                <span>/mo</span>
              </PlanPrice>
              <FeatureList>{plan.features.map((feature, index) => renderFeatureItem(feature, index))}</FeatureList>
              <PurchaseButton priceId={plan.priceId} />
            </PricingCard>
          ))}
        </PricingGrid>
      </PricingSection>
    </div>
  );
}

// Styled Components
const PricingSection = styled.section`
  background: #f5f7fa;
  padding: 4rem 0;
  // max-width: 1200px;
  margin: 0 auto;
`;

const FreeTrialBanner = styled.div`
  background: linear-gradient(135deg, #0066ff, #00ccff);
  color: white;
  text-align: center;
  padding: 1.5rem;
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  svg {
    font-size: 1.5em;
  }

  @media (max-width: 768px) {
    font-size: 1rem;
    padding: 1rem;
    flex-direction: column;
    gap: 0.5rem;
  }
`;
const SectionTitle = styled.h2`
  font-size: 2rem;
  text-align: center;
  margin-bottom: 1rem;
  color: #333;
`;

const SectionDescription = styled.p`
  text-align: center;
  color: #666;
  max-width: 600px;
  margin: 0 auto 2rem;
`;

const PricingGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  max-width: 1000px;
  margin: 0 auto;
`;

interface PricingCardProps {
  highlighted?: boolean;
}

const PricingCard = styled.div<PricingCardProps>`
  background: white;
  border-radius: 10px;
  padding: 2rem;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  position: relative;
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
  }

  ${({ highlighted }) =>
    highlighted &&
    `
      border: 2px solid #0066ff;
      transform: scale(1.02);
    `}
`;

const ServiceBadge = styled.div`
  background: #f0f0f0;
  color: #333;
  padding: 0.3rem 0.8rem;
  border-radius: 999px;
  font-size: 0.75rem;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 5px;
  margin-bottom: 1rem;
  align-self: flex-start;

  svg {
    font-size: 0.9em;
  }
`;

const RecommendedBadge = styled.div`
  position: absolute;
  top: -12px;
  right: 20px;
  background: #0066ff;
  color: white;
  padding: 0.3rem 0.8rem;
  border-radius: 999px;
  font-size: 0.75rem;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 5px;

  svg {
    font-size: 0.9em;
  }
`;

const PlanTitle = styled.h3`
  font-size: 1.5rem;
  margin: 0.5rem 0;
  color: #333;
`;

const PlanPrice = styled.div`
  font-size: 2.5rem;
  font-weight: 700;
  margin: 1rem 0;
  color: #0066ff;

  span {
    font-size: 1rem;
    font-weight: 400;
    color: #666;
  }
`;

const FeatureList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 1.5rem 0;
  flex-grow: 1;
`;

const FeatureItem = styled.li`
  padding: 0.5rem 0;
  color: #555;
  text-align: left;
  margin: 0 0.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const PremiumFeatureIcon = styled(FontAwesomeIcon)`
  color: rgb(6, 126, 26);
  margin-left: 5px;
  font-size: 1.2em;
  transition: transform 0.2s ease;

  &:hover {
    transform: scale(1.2);
  }
`;

export default Pricing;
