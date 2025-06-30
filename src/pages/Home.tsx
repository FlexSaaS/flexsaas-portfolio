// import Features from "../components/common/FeatureHighlight";
import EmailForm from "../components/common/ContactUs";
import Hero from "../components/common/Hero";
import Pricing from "../components/common/Pricing";
import Projects from "../components/common/Projects";
import Services from "../components/common/Services";
import Team from "../components/common/Team";
import Testimonials from "../components/common/Testimonials";

function Home() {
  return (
    <>
      <Hero />
      <Services />
      <Projects />
      {/* <Features /> */}
      <Testimonials />
      <Pricing />
      <Team />
      <EmailForm />
    </>
  );
}

export default Home;
