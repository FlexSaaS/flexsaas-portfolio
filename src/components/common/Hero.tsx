import styled from 'styled-components';


function Hero() {
  return (
    <HeroContainer>
      <HeroContent>
        <HeroTitle>Beautiful Digital Presence for Service Professionals</HeroTitle>
        <HeroSubtitle>
          We create stunning portfolio websites for construction professionals 
          and powerful booking systems for hair & beauty experts.
        </HeroSubtitle>
        <ButtonGroup>
          <PrimaryButton>Get Started</PrimaryButton>
          <SecondaryButton>Learn More</SecondaryButton>
        </ButtonGroup>
      </HeroContent>
    </HeroContainer>
  );
}

export default Hero;


const HeroContainer = styled.section`
  height: 100vh;
  display: flex;
  align-items: center;
  padding: 0 10%;
  background: linear-gradient(135deg, #f5f7fa 0%, #e4e8eb 100%);
`;

const HeroContent = styled.div`
  max-width: 600px;
`;

const HeroTitle = styled.h1`
  font-size: 3.5rem;
  margin-bottom: 1.5rem;
  color: #333;
  line-height: 1.2;
`;

const HeroSubtitle = styled.p`
  font-size: 1.2rem;
  color: #666;
  margin-bottom: 2rem;
  line-height: 1.6;
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 1rem;
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
  
  &:hover {
    background: #0052cc;
    transform: translateY(-2px);
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
  
  &:hover {
    background: rgba(0, 102, 255, 0.1);
    transform: translateY(-2px);
  }
`;