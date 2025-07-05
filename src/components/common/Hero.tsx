import styled from "styled-components";
import InfiniteImageScroll from "./WebsiteGallery";

function Hero() {
  const scrollToServices = () => {
    const servicesSection = document.getElementById("services");
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  function scrollToPricing(
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ): void {
    event.preventDefault();
    const pricingSection = document.getElementById("pricing");
    if (pricingSection) {
      pricingSection.scrollIntoView({ behavior: "smooth" });
    }
  }

  function scrollToContact(
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ): void {
    event.preventDefault();
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  }

  return (
    <HeroContainer id="home">
      <BackgroundWrapper>
        <InfiniteImageScroll />
      </BackgroundWrapper>
      <HeroContent>
        <HeroTitle>
          Beautiful Digital Presence for Service Professionals
        </HeroTitle>
        <HeroSubtitle>
          We create stunning portfolio websites for construction professionals
          and powerful booking systems for hair & beauty experts.
        </HeroSubtitle>
        <ButtonGroup>
          <PrimaryButton onClick={scrollToPricing}>Get Started</PrimaryButton>
          <SecondaryButton onClick={scrollToServices}>
            Learn More
          </SecondaryButton>
          <PrimaryButton onClick={scrollToContact}>Contact Us</PrimaryButton>
        </ButtonGroup>
      </HeroContent>
    </HeroContainer>
  );
}

export default Hero;
const BackgroundWrapper = styled.div`
  position: absolute;
  inset: 0;
  z-index: 1;
  pointer-events: none;

  /* Add dark overlay */
  &::after {
    content: "";
    position: absolute;
    inset: 0;
    background: rgba(0, 0, 0, 0.55);
    z-index: 2;
  }
`;
const HeroContainer = styled.section`
  min-height: 70vh;
  position: relative;
  display: flex;
  align-items: center;
  padding: 10% 15%;
  overflow: hidden;

  @media (max-width: 768px) {
    padding-top: 80px;
    text-align: center;
  }
`;

const HeroContent = styled.div`
  position: relative;
  z-index: 2;
  height: 100%;
  max-width: 600px;
  padding: 4rem;

  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.4);

  @media (max-width: 768px) {
    max-width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

const HeroTitle = styled.h1`
  font-size: clamp(2rem, 5vw, 3.5rem);
  margin-bottom: 1.5rem;
  color: #404040; /* white text for contrast */
  line-height: 1.2;
  font-weight: 700;
`;

const HeroSubtitle = styled.p`
  font-size: clamp(1rem, 2vw, 1.2rem);
  color: #1e1e1e; /* soft white text */
  margin-bottom: 2rem;
  line-height: 1.6;
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 0.5rem;

  @media (max-width: 480px) {
    flex-direction: column;
    width: 100%;
    max-width: 300px;
  }
`;

const PrimaryButton = styled.button`
  background: #0066ff;
  color: white;
  border: none;
  padding: 1rem 2rem;
  border-radius: 4px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s;
  font-size: 1rem;

  &:hover {
    background: #0052cc;
    transform: translateY(-2px);
  }

  @media (max-width: 480px) {
    width: 100%;
  }
`;
const SecondaryButton = styled.button`
  background: transparent;
  color: #0066ff;
  border: 2px solid #0066ff;
  padding: 1rem 2rem;
  border-radius: 4px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s;
  font-size: 1rem;

  &:hover {
    background: rgba(0, 102, 255, 0.1);
    transform: translateY(-2px);
  }

  @media (max-width: 480px) {
    width: 100%;
  }
`;
