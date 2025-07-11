import styled from "styled-components";

function Team() {
  return (
    <TeamContainer id="team">
      <SectionTitle>Meet the Team</SectionTitle>
      <TeamGrid>
        <TeamMember>
          <MemberImage>
            <img src="/Ebenezer.png" alt="Ebenezer Boakye" />
          </MemberImage>
          <MemberName>Ebenezer Boakye</MemberName>
          <MemberRole>Co-Founder & Developer</MemberRole>
          <MemberBio>
            Full-stack developer with a passion for creating intuitive user
            experiences.
          </MemberBio>
        </TeamMember>

        <TeamMember>
          <MemberImage>
            <img src="/Pierre.jpeg" alt="Pierre Guichard" />
          </MemberImage>
          <MemberName>Pierre Guichard</MemberName>
          <MemberRole>Co-Founder & Developer</MemberRole>
          <MemberBio>
            Full-stack developer with a strong eye for UI/UX, building
            easy-to-use, attractive apps.
          </MemberBio>
        </TeamMember>

        <TeamMember>
          <MemberImage>
            <img src="/Safo.jpg" alt="Samson Safo" />
          </MemberImage>
          <MemberName>Samson Safo</MemberName>
          <MemberRole>Co-Founder & Marketer</MemberRole>
          <MemberBio>
            Co-founder and software architect. Driving product vision and engineering strategy to build scalable solutions.
          </MemberBio>
        </TeamMember>
      </TeamGrid>
      
      <AboutUsContainer>
        <AboutUsTitle>About Us</AboutUsTitle>
        <AboutUsText>
          FlexSaaS was founded to empower local small businesses by helping them gain a strong online presence. 
          We offer modern, user-friendly web solutions tailored to your needs and remove the stress from creating, managing and maintaining your website. 
          This allows you to focus on what you do best - running your business, giving you more time to focus on your customers and growth while we handle the technical details.

          Our mission is to make digital transformation accessible and effective for every small business.
          To achieve this, we provide comprehensive web development services and booking systems that are both affordable and high-quality.
          We believe every business deserves a professional online presence to connect with customers and grow. 
          With our expertise, we help you navigate the digital landscape and achieve your business goals.
          Your success is our priority, and we are committed to delivering exceptional service and results.
          Work with us to elevate your business in the digital age.

          <AboutUsTheme>
          Your Online Presence Starts Here!
        </AboutUsTheme>
        </AboutUsText>
      </AboutUsContainer>
    </TeamContainer>
  );
}

export default Team;

const AboutUsContainer = styled.div`
  margin-top: 5rem;
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  padding: 2rem;

  @media (max-width: 768px) {
    margin-top: 3rem;
    padding: 1rem;
    max-width: 100%;
  }
`;

const AboutUsTitle = styled.h2`
  font-size: 2rem;
  color: #333;
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    font-size: 1.5rem;
    margin-bottom: 0.75rem;
  }
`;

const AboutUsText = styled.p`
  color: #555;
  font-size: 1.1rem;
  line-height: 1.8;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    font-size: 1rem;
    line-height: 1.6;
    margin-bottom: 1.5rem;
  }
`;

const AboutUsTheme = styled.div`
  color: #007bff; // Replace with your theme color if different
  font-size: 2rem;
  font-weight: bold;
  margin-top: 1.5rem;
  letter-spacing: 1px;

  @media (max-width: 768px) {
    font-size: 1.3rem;
    margin-top: 1rem;
  }
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  color: #333;
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const TeamContainer = styled.section`
  padding: 8rem 10%;
  background: white;
  text-align: center;
`;

const TeamGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 3rem;
  margin-top: 4rem;
`;

const TeamMember = styled.div``;

const MemberImage = styled.div`
  width: 180px;
  height: 180px;
  border-radius: 50%;
  margin: 0 auto 1.5rem;
  overflow: hidden;
  border: 3px solid #f0f0f0;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const MemberName = styled.h3`
  margin: 0 0 0.5rem 0;
  color: #333;
`;

const MemberRole = styled.p`
  color: #777;
  margin: 0 0 1rem 0;
`;

const MemberBio = styled.p`
  color: #555;
  line-height: 1.6;
`;
