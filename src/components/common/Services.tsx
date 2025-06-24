import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBuilding, faScissors, faRocket, faPalette } from "@fortawesome/free-solid-svg-icons";

function Services() {
  const services = [
    {
      icon: faBuilding,
      title: "Construction Portfolios",
      description: "Beautiful, mobile-friendly websites to showcase your work, highlight testimonials, and make it easy for clients to contact you.",
      features: ["Project galleries", "Client testimonials", "Contact forms", "SEO optimized"],
    },
    {
      icon: faScissors,
      title: "Beauty Booking Systems",
      description:
        "Powerful scheduling tools that let clients book appointments 24/7, manage your calendar, and reduce no-shows with automated reminders.",
      features: ["Online scheduling", "Calendar sync", "Automated reminders", "Payment processing"],
    },
    {
      icon: faRocket,
      title: "Custom Solutions",
      description: "Need something special? We build custom digital solutions tailored to your specific business needs and workflow.",
      features: ["Tailored development", "API integrations", "Custom design", "Ongoing support"],
    },
  ];

  return (
    <ServicesContainer id="services">
      <SectionHeader>
        <SectionSubtitle>What We Offer</SectionSubtitle>
        <SectionTitle>Our Solutions</SectionTitle>
      </SectionHeader>

      <ServicesGrid>
        {services.map((service, index) => (
          <ServiceCard key={index}>
            <ServiceIcon>
              <FontAwesomeIcon icon={service.icon} />
              <IconBackground />
            </ServiceIcon>
            <ServiceTitle>{service.title}</ServiceTitle>
            <ServiceDescription>{service.description}</ServiceDescription>
            <FeatureList>
              {service.features.map((feature, i) => (
                <FeatureItem key={i}>
                  <FontAwesomeIcon icon={faPalette} size="xs" />
                  {feature}
                </FeatureItem>
              ))}
            </FeatureList>
          </ServiceCard>
        ))}
      </ServicesGrid>
    </ServicesContainer>
  );
}

export default Services;

const ServicesContainer = styled.section`
  padding: 8rem 10%;
  background: white;
  position: relative;
`;

const SectionHeader = styled.div`
  text-align: center;
  max-width: 800px;
  margin: 0 auto 6rem;
`;

const SectionSubtitle = styled.p`
  font-size: 1.1rem;
  color: #0066ff;
  text-transform: uppercase;
  letter-spacing: 2px;
  margin-bottom: 1rem;
  font-weight: 600;
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 1.5rem;
  color: #222;
  position: relative;
  display: inline-block;

  &::after {
    content: "";
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 80px;
    height: 3px;
    background: #0066ff;
    border-radius: 3px;
  }
`;

const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 3rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const ServiceIcon = styled.div`
  font-size: 2.5rem;
  color: #0066ff;
  margin-bottom: 2rem;
  transition: transform 0.3s;
  position: relative;
  width: 80px;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    position: relative;
    z-index: 2;
  }
`;

const ServiceCard = styled.div`
  background: white;
  border-radius: 12px;
  padding: 3rem 2.5rem;
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  border: 1px solid rgba(0, 102, 255, 0.1);
  position: relative;
  overflow: hidden;
  z-index: 1;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 20px 40px rgba(0, 102, 255, 0.1);
    border-color: rgba(0, 102, 255, 0.2);

    ${ServiceIcon} {
      transform: scale(1.1);
    }
  }

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(135deg, rgba(0, 102, 255, 0.03) 0%, rgba(0, 102, 255, 0.01) 100%);
    z-index: -1;
  }
`;

const IconBackground = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background: rgba(0, 102, 255, 0.1);
  border-radius: 50%;
  z-index: 1;
`;

const ServiceTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 1.5rem;
  color: #222;
  font-weight: 700;
`;

const ServiceDescription = styled.p`
  color: #666;
  line-height: 1.8;
  margin-bottom: 2rem;
`;

const FeatureList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const FeatureItem = styled.li`
  padding: 0.7rem 0;
  color: #555;
  display: flex;
  align-items: center;
  gap: 0.8rem;
  font-size: 0.95rem;

  svg {
    color: #0066ff;
    opacity: 0.7;
  }

  &:not(:last-child) {
    border-bottom: 1px solid rgba(0, 0, 0, 0.05);
  }
`;
