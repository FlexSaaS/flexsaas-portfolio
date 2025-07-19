import styled from "styled-components";
import EmailForm from "../components/common/ContactUs";
import Hero from "../components/common/Hero";
import Pricing from "../components/common/Pricing";
import Projects from "../components/common/Projects";
import Team from "../components/common/Team";
import Testimonials from "../components/common/Testimonials";
import Services from "../components/common/Services";

function Home() {
  return (
    <PageContainer>
      <Hero />
      <Services />
      <Projects />
      <Testimonials />
      <Pricing />
      <Team />
      <EmailForm />
    </PageContainer>
  );
}

export default Home;

const PageContainer = styled.div`
  margin-left: 70px;
  transition: margin-left 0.3s ease;

  @media (max-width: 768px) {
    margin-left: 0;
  }
`;