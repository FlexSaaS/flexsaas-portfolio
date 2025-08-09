import styled, { css } from "styled-components";
import InfiniteImageScroll from "./WebsiteGallery";
import React, { useState, useEffect } from "react";

const scrollToSection = (id: string, event?: React.MouseEvent) => {
  event?.preventDefault();
  const section = document.getElementById(id);
  section?.scrollIntoView({ behavior: "smooth" });
};

function useIsMobile() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 1000);

  useEffect(() => {
    function handleResize() {
      setIsMobile(window.innerWidth <= 1000);
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return isMobile;
}

function Hero() {
  const isMobile = useIsMobile();
  return (
    <Container>
      <HeroContainer
        id="home"
        aria-label="Hero section: Your Online Presence Starts Here"
      >
        <LeftSide>
          <HeroContent>
            <HeroTitle>Your Online Presence Starts Here.</HeroTitle>
            <HeroSubtitle>
              We create stunning portfolio websites and custom digital solution
              for small local businesses.
            </HeroSubtitle>
            <ButtonGroup>
              <PrimaryButton onClick={(e) => scrollToSection("pricing", e)}>
                Get Started
              </PrimaryButton>
              <SecondaryButton onClick={() => scrollToSection("services")}>
                Learn More
              </SecondaryButton>
              <PrimaryButton onClick={(e) => scrollToSection("contact", e)}>
                Contact Us
              </PrimaryButton>
            </ButtonGroup>
          </HeroContent>
        </LeftSide>
        <RightSide>
          {isMobile ? (
            <InfiniteImageScroll speed={200} direction="left" />
          ) : (
            <>
              <InfiniteImageScroll speed={200} direction="down" />
              <InfiniteImageScroll speed={200} direction="up" />
            </>
          )}
        </RightSide>
      </HeroContainer>
    </Container>
  );
}

export default Hero;

const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f5f5f5;
`;

const HeroContainer = styled.section`
  max-width: 2000px;
  display: flex;
  flex-direction: row;
  height: 80vh;
  width: 100%;

  @media (max-width: 1000px) {
    flex-direction: column;
    height: auto; /* Let height expand as needed on mobile */
  }
`;

const LeftSide = styled.div`
  flex: 0.8;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const RightSide = styled.div`
  flex: 1.2;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  @media (max-width: 1000px) {
    flex-direction: column;
    gap: 0rem;
    padding-bottom: 2rem;
  }
`;

const HeroContent = styled.div`
  padding: 4rem;
  width: 100%;
`;

const HeroTitle = styled.h1`
  font-size: clamp(2rem, 5vw, 3.5rem);
  margin-bottom: 1.5rem;
  color: #404040;
  line-height: 1.2;
  font-weight: 700;
`;

const HeroSubtitle = styled.p`
  font-size: clamp(1rem, 2vw, 1.2rem);
  color: #626262;
  margin-bottom: 2rem;
  line-height: 1.6;
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 0.5rem;

  @media (max-width: 480px) {
    flex-direction: column;
    width: 100%;
    max-width: 300px;
  }
`;

const buttonStyles = css`
  padding: 1rem 2rem;
  border-radius: 4px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s;
  font-size: 1rem;
  font-family: inherit;

  @media (max-width: 480px) {
    width: 100%;
  }
`;

const PrimaryButton = styled.button`
  ${buttonStyles}
  background: #0066ff;
  color: white;
  border: none;

  &:hover {
    background: #0052cc;
    transform: translateY(-2px);
  }
`;

const SecondaryButton = styled.button`
  ${buttonStyles}
  background: transparent;
  color: #0066ff;
  border: 2px solid #0066ff;

  &:hover {
    background: rgba(0, 102, 255, 0.1);
    transform: translateY(-2px);
  }
`;
