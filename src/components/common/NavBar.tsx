import styled from "styled-components";
import { useEffect, useState, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faBriefcase,
  faDollarSign,
  faUsers,
  faEnvelope,
  faBars,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";

const sections = [
  { id: "home", label: "Home", icon: faHome },
  { id: "projects", label: "Our Work", icon: faBriefcase },
  { id: "pricing", label: "Get Started", icon: faDollarSign },
  { id: "team", label: "About Us", icon: faUsers },
  { id: "contact", label: "Contact Us", icon: faEnvelope },
];

function Navbar() {
  const [active, setActive] = useState("home");
  const [expanded, setExpanded] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const sideNavRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        isMobile &&
        expanded &&
        sideNavRef.current &&
        !sideNavRef.current.contains(event.target as Node)
      ) {
        setExpanded(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMobile, expanded]);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const middleOfScreen = window.innerHeight / 2;
      for (const section of sections) {
        const el = document.getElementById(section.id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= middleOfScreen && rect.bottom >= middleOfScreen) {
            setActive(section.id);
            break;
          }
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      const rect = section.getBoundingClientRect();
      const absoluteElementTop = window.pageYOffset + rect.top;
      const middleOfScreen = window.innerHeight / 2;
      const scrollTo = absoluteElementTop - middleOfScreen + rect.height / 2;

      window.scrollTo({
        top: scrollTo,
        behavior: "smooth",
      });

      if (isMobile) setExpanded(false);
    }
  };

  return (
    <>
      {isMobile && (
        <ToggleButton
          aria-label={expanded ? "Close navigation" : "Open navigation"}
          onClick={() => setExpanded(!expanded)}
          expanded={expanded}
        >
          <FontAwesomeIcon icon={expanded ? faTimes : faBars} />
        </ToggleButton>
      )}

      <SideNav
        ref={sideNavRef}
        expanded={expanded}
        onMouseEnter={() => !isMobile && setExpanded(true)}
        onMouseLeave={() => !isMobile && setExpanded(false)}
        role="navigation"
        aria-label="Section navigation"
        isMobile={isMobile}
      >
        <LogoWrapper>
          <LogoImg
            src={expanded ? "/logo.png" : "/favi.png"}
            alt="Logo"
            expanded={expanded}
          />
        </LogoWrapper>
        <NavList expanded={expanded}>
          {sections.map(({ id, label, icon }) => (
            <NavItem
              key={id}
              isActive={active === id}
              onClick={() => scrollToSection(id)}
              tabIndex={0}
              aria-label={`Scroll to ${label}`}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") scrollToSection(id);
              }}
            >
              <IconWrapper expanded={expanded} isActive={active === id}>
                <FontAwesomeIcon icon={icon} />
              </IconWrapper>
              <Label expanded={expanded} isActive={active === id}>
                {label}
              </Label>
            </NavItem>
          ))}
        </NavList>
      </SideNav>
    </>
  );
}

export default Navbar;

const ToggleButton = styled.button<{ expanded: boolean }>`
  position: fixed;
  top: 15px;
  left: 15px;
  z-index: 1100;
  background: #0053ba;
  border: none;
  border-radius: 4px;
  padding: 8px 12px;
  color: white;
  font-size: 1.5rem;
  cursor: pointer;
  transition: background-color 0.3s ease;
  user-select: none;

  &:hover,
  &:focus {
    background: #0074ff;
    outline: none;
  }

  display: ${({ expanded }) => (expanded ? "none" : "flex")};
`;

const SideNav = styled.nav<{ expanded: boolean; isMobile: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: ${({ expanded }) => (expanded ? "200px" : "70px")};
  background: #f9faff;
  box-shadow: 2px 0 8px rgba(0, 0, 0, 0.1);
  padding: 1.5rem 0;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  transition: width 0.3s ease, transform 0.3s ease;
  user-select: none;
  z-index: 1000;

  @media (max-width: 768px) {
    width: 200px;
    transform: ${({ expanded }) =>
      expanded ? "translateX(0)" : "translateX(-100%)"};
    box-shadow: ${({ expanded }) =>
      expanded ? "2px 0 8px rgba(0, 0, 0, 0.2)" : "none"};
  }
`;

// ... keep your other styled components unchanged

const LogoWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding-bottom: 1rem;
`;

const LogoImg = styled.img<{ expanded: boolean }>`
  height: 40px;
  width: auto;
  transition: all 0.3s ease;
`;

const NavList = styled.div<{ expanded: boolean }>`
  flex: 1;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const NavItem = styled.div<{ isActive: boolean }>`
  display: flex;
  align-items: center;
  height: 48px;
  gap: 1rem;
  width: 100%;
  padding: 0 1.2rem;
  cursor: pointer;
  color: ${({ isActive }) => (isActive ? "#0053ba" : "#666")};
  font-weight: ${({ isActive }) => (isActive ? "600" : "400")};
  font-size: 1.1rem;
  border-left: ${({ isActive }) =>
    isActive ? "4px solid #0053ba" : "4px solid transparent"};
  transition: all 0.3s ease;
  background-color: transparent;

  &:hover,
  &:focus-visible {
    color: #0074ff;
    outline: none;
    background-color: #e7f0ff;
  }
`;

const IconWrapper = styled.div<{ expanded: boolean; isActive: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  min-width: 24px;
  height: 24px;
  font-size: 1.25rem;
  color: ${({ isActive }) => (isActive ? "#0053ba" : "#999")};
  transition: color 0.3s;
`;

const Label = styled.span<{ expanded: boolean; isActive: boolean }>`
  white-space: nowrap;
  overflow: hidden;
  max-width: ${({ expanded }) => (expanded ? "200px" : "0")};
  opacity: ${({ expanded }) => (expanded ? 1 : 0)};
  transition: max-width 0.3s ease, opacity 0.3s ease;
  color: ${({ isActive }) => (isActive ? "#0053ba" : "#444")};
  pointer-events: ${({ expanded }) => (expanded ? "auto" : "none")};
  user-select: none;
`;
