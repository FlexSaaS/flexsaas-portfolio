import styled from "styled-components";
import { Link } from "react-router-dom";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const scrollToSection = (sectionId: string, category?: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      // For sections that need URL parameters (like projects)
      if (category) {
        window.history.pushState({}, "", `/#${sectionId}?category=${category}`);
        // Force a state update for projects component
        window.dispatchEvent(new Event("hashchange"));
      }
      // For simple hash navigation (home, team, pricing)
      else {
        // Use smooth scroll without modifying URL if we're already on the page
        if (window.location.pathname === "/") {
          section.scrollIntoView({ behavior: "smooth" });
        } else {
          // If coming from another page, let the router handle it
          window.location.hash = sectionId;
        }
      }

      section.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  return (
    <NavContainer>
      <NavLogo to="/" onClick={() => scrollToSection("home")}>
        FlexSaaS
      </NavLogo>

      <Hamburger onClick={toggleMenu}>{isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}</Hamburger>

      <NavLinks isOpen={isOpen}>
        <NavButton onClick={() => scrollToSection("home")}>Home</NavButton>
        <NavButton onClick={() => scrollToSection("projects", "portfolios")}>Building Services</NavButton>
        <NavButton onClick={() => scrollToSection("projects", "bookings")}>Booking System</NavButton>
        <NavButton onClick={() => scrollToSection("team")}>Meet the Team</NavButton>
        <CTAButton onClick={() => scrollToSection("pricing")}>Get Started</CTAButton>
      </NavLinks>
    </NavContainer>
  );
}

export default Navbar;

// Styled Components
const NavContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 5%;
  background: rgb(255, 255, 255);
  position: fixed;
  width: 100%;
  z-index: 100;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  height: 60px;

  @media (max-width: 768px) {
    height: 50px;
  }
`;

const NavLogo = styled(Link)`
  font-size: 1.8rem;
  font-weight: 700;
  color: #333;
  text-decoration: none;
  cursor: pointer;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const NavLinks = styled.div<{ isOpen: boolean }>`
  display: flex;
  gap: 2rem;
  align-items: center;

  @media (max-width: 768px) {
    position: fixed;
    top: 60px;
    left: 0;
    width: 100%;
    background: white;
    flex-direction: column;
    gap: 1.5rem;
    padding: 2rem 0;
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease;
    transform: ${({ isOpen }) => (isOpen ? "translateY(0)" : "translateY(-150%)")};
    opacity: ${({ isOpen }) => (isOpen ? "1" : "0")};
    z-index: 99;
  }
`;

const NavButton = styled.button`
  background: none;
  border: none;
  color: #555;
  cursor: pointer;
  font-weight: 500;
  transition: color 0.3s;
  font-family: inherit;
  font-size: 1rem;
  padding: 0;
  margin: 0;

  &:hover {
    color: #0066ff;
  }

  @media (max-width: 768px) {
    padding: 0.5rem 0;
    font-size: 1.2rem;
  }
`;

const CTAButton = styled.button`
  background: #0066ff;
  color: white;
  padding: 0.8rem 1.5rem;
  border-radius: 4px;
  font-weight: 600;
  border: none;
  cursor: pointer;
  transition: all 0.3s;

  &:hover {
    background: #0052cc;
    transform: translateY(-2px);
  }

  @media (max-width: 768px) {
    padding: 1rem 2rem;
    font-size: 1.1rem;
  }
`;

const Hamburger = styled.div`
  display: none;
  cursor: pointer;
  color: #333;

  @media (max-width: 768px) {
    display: block;
  }
`;
