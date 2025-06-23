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
            poster="/construction-fallback.png" // Fallback image while video loads
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
  padding: 8rem 10%;
  background: #f5f7fa;
`;

const FeatureGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 4rem;
  align-items: center;
`;

const FeatureVideo = styled.div`
  position: relative;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
  
  video {
    width: 100%;
    height: auto;
    display: block;
    border-radius: 8px;
  }

  /* Aspect ratio - adjust as needed */
  &::before {
    content: '';
    display: block;
    padding-bottom: 56.25%; /* 16:9 aspect ratio */
  }

  video {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const FeatureContent = styled.div``;

const FeatureList = styled.ul`
  list-style: none;
  padding: 0;
`;

const FeatureItem = styled.li`
  display: flex;
  align-items: flex-start;
  margin-bottom: 1.5rem;
`;

const FeatureIcon = styled.span`
  color: #0066ff;
  margin-right: 1rem;
  font-size: 1.5rem;
`;

const FeatureText = styled.div`
  h3 {
    margin: 0 0 0.5rem 0;
    color: #333;
  }
  
  p {
    color: #666;
    margin: 0;
    line-height: 1.6;
  }
`;