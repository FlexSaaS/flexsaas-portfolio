import { useState, useEffect } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";


function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {isVisible && (
        <ScrollButton onClick={scrollToTop}>
          <FontAwesomeIcon icon={faArrowUp} />
        </ScrollButton>
      )}
    </>
  );
}

export default ScrollToTopButton;

// Styled Components
const ScrollButton = styled.button`
  position: fixed;
  bottom: 1rem;
  right: 1rem;
  background-color: #2563eb;
  color: white;
  padding: 1rem;
  border-radius: 50%;
  border: none;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  z-index: 50;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 3rem;
  height: 3rem;
  transition: all 0.3s ease;

  &:hover {
    background-color: rgb(5, 61, 145);
    transform: translateY(-2px);
    box-shadow: 0 6px 8px rgba(0, 0, 0, 0.15);
  }

  svg {
    font-size: 1.25rem;
  }
`;
