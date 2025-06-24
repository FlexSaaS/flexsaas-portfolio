import { Link } from 'react-router-dom';
import styled from 'styled-components';

function Hero() {
  const scrollToServices = () => {
    const servicesSection = document.getElementById("services");
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <HeroContainer>
      <HeroContent>
        <HeroTitle>Beautiful Digital Presence for Service Professionals</HeroTitle>
        <HeroSubtitle>
          We create stunning portfolio websites for construction professionals and powerful booking systems for hair & beauty experts.
        </HeroSubtitle>
        <ButtonGroup>
          <PrimaryButton to="/contact">Get Started</PrimaryButton>
          <SecondaryButton onClick={scrollToServices}>Learn More</SecondaryButton>
        </ButtonGroup>
      </HeroContent>
    </HeroContainer>
  );
}

export default Hero;

const HeroContainer = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  padding: 0 5%;
  background: linear-gradient(135deg, #f5f7fa 0%, #e4e8eb 100%);

  @media (max-width: 768px) {
    padding-top: 80px; /* Account for fixed navbar */
    text-align: center;
  }
`;

const HeroContent = styled.div`
  max-width: 600px;

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
  color: #333;
  line-height: 1.2;
  font-weight: 700;

  @media (max-width: 768px) {
    margin-bottom: 1rem;
    line-height: 1.3;
  }
`;

const HeroSubtitle = styled.p`
  font-size: clamp(1rem, 2vw, 1.2rem);
  color: #666;
  margin-bottom: 2rem;
  line-height: 1.6;

  @media (max-width: 768px) {
    margin-bottom: 1.5rem;
    padding: 0 1rem;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 1rem;

  @media (max-width: 480px) {
    flex-direction: column;
    width: 100%;
    max-width: 300px;
  }
`;

const PrimaryButton = styled(Link)`
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