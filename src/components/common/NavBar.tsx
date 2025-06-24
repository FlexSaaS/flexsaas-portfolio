import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const scrollToTeam = () => {
    const teamSection = document.getElementById("team");
    if (teamSection) {
      teamSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <NavContainer>
      <NavLogo to="/">FlexSaaS</NavLogo>

      <Hamburger onClick={toggleMenu}>{isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}</Hamburger>

      <NavLinks isOpen={isOpen}>
        <NavLink to="/projects?category=portfolios">Building Services</NavLink>
        <NavLink to="/projects?category=bookings">Hair & Beauty Booking</NavLink>
        <NavButton onClick={scrollToTeam}>Meet the Team</NavButton>
        <CTAButton to="/contact">Get Started</CTAButton>
      </NavLinks>
    </NavContainer>
  );
}

export default Navbar;

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
  height: 60px; // Fixed height

  @media (max-width: 768px) {
    height: 50px;
  }
`;

const NavLogo = styled(Link)`
  font-size: 1.8rem;
  font-weight: 700;
  color: #333;
  text-decoration: none;

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
    top: 60px; // Matches NavBar height
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

const NavLink = styled(Link)`
  color: #555;
  text-decoration: none;
  font-weight: 500;
  transition: color 0.3s;

  &:hover {
    color: #0066ff;
  }

  @media (max-width: 768px) {
    padding: 0.5rem 0;
    font-size: 1.2rem;
  }
`;

const NavButton = styled.button`
  background: none;
  border: none;
  color: #555;
  text-decoration: none; // Added to match NavLink
  cursor: pointer;
  font-weight: 500;
  transition: color 0.3s;
  font-family: inherit;
  font-size: 1rem; // Explicitly set to match NavLink
  padding: 0;
  margin: 0; // Reset margin

  &:hover {
    color: #0066ff;
  }

  @media (max-width: 768px) {
    padding: 0.5rem 0;
    font-size: 1.2rem;
  }
`;

const CTAButton = styled(Link)`
  background: #0066ff;
  color: white;
  padding: 0.8rem 1.5rem;
  border-radius: 4px;
  font-weight: 600;
  text-decoration: none;
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