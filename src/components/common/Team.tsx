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
            Growth marketer who helps businesses connect with their ideal
            customers.
          </MemberBio>
        </TeamMember>
      </TeamGrid>
    </TeamContainer>
  );
}

export default Team;

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
