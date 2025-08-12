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

      {/* Hash target: /#services */}
      <section id="services" aria-label="Our services">
        <Services />
      </section>

      <Projects />
      <Testimonials />
      <Pricing />

      {/* Hash target: /#team */}
      <section id="team" aria-label="Our team">
        <Team />
      </section>

      {/* Hash target: /#contact */}
      <section id="contact" aria-label="Contact us">
        <EmailForm />
      </section>
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