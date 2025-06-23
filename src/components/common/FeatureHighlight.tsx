import styled from 'styled-components';

function Features() {
  return (
    <FeaturesContainer>
      <FeatureGrid>
        <FeatureVideo>
          <video 
            autoPlay 
            loop 
            muted 
            playsInline
            poster="/construction-fallback.png"
          >
            <source src="/construction-demo.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </FeatureVideo>
        <FeatureContent>
          <FeatureList>
            <FeatureItem>
              <FeatureIcon>✔️</FeatureIcon>
              <FeatureText>
                <h3>Mobile-Optimized</h3>
                <p>Looks great on any device - most clients will find you on their phones</p>
              </FeatureText>
            </FeatureItem>
            <FeatureItem>
              <FeatureIcon>✔️</FeatureIcon>
              <FeatureText>
                <h3>Easy Content Updates</h3>
                <p>Add new projects with just a few clicks - no technical skills needed</p>
              </FeatureText>
            </FeatureItem>
            <FeatureItem>
              <FeatureIcon>✔️</FeatureIcon>
              <FeatureText>
                <h3>Lead Generation</h3>
                <p>Built-in contact forms and call-to-actions to convert visitors to clients</p>
              </FeatureText>
            </FeatureItem>
          </FeatureList>
        </FeatureContent>
      </FeatureGrid>
    </FeaturesContainer>
  );
}

export default Features;

const FeaturesContainer = styled.section`
  padding: 6rem 5%;
  background: #f5f7fa;

  @media (min-width: 768px) {
    padding: 8rem 5%;
  }
`;

const FeatureGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 3rem;
  max-width: 1200px;
  margin: 0 auto;

  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr;
    gap: 5rem;
    align-items: center;
  }
`;

const FeatureVideo = styled.div`
  position: relative;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 700px;
  margin: 0 auto;
  
  /* 16:9 aspect ratio container */
  &::before {
    content: '';
    display: block;
    padding-bottom: 56.25%;
  }

  video {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @media (min-width: 768px) {
    max-width: 100%;
    height: 75%;

  }
`;

const FeatureContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const FeatureList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const FeatureItem = styled.li`
  display: flex;
  align-items: flex-start;
  margin-bottom: 2rem;
  padding: 1.5rem;
  background: white;
  border-radius: 8px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
  }

  @media (min-width: 768px) {
    padding: 1.5rem 2rem;
  }
`;

const FeatureIcon = styled.span`
  color: #0066ff;
  margin-right: 1.5rem;
  font-size: 1.8rem;
  flex-shrink: 0;
`;

const FeatureText = styled.div`
  h3 {
    margin: 0 0 0.5rem 0;
    color: #333;
    font-size: 1.2rem;
  }
  
  p {
    color: #666;
    margin: 0;
    line-height: 1.6;
    font-size: 1rem;
  }

  @media (min-width: 768px) {
    h3 {
      font-size: 1.3rem;
    }
    
    p {
      font-size: 1.1rem;
    }
  }
`;