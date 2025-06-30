import EmailForm from "../components/common/ContactUs";
import Hero from "../components/common/Hero";
import Pricing from "../components/common/Pricing";
import Projects from "../components/common/Projects";
import Team from "../components/common/Team";
import Testimonials from "../components/common/Testimonials";
import InfiniteImageScroll from "../components/common/WebsiteGallery";

function Home() {
  return (
    <>
      <Hero />
      <Projects />
      <Testimonials />
      <Pricing />
      <Team />
      <EmailForm />
    </>
  );
}

export default Home;
