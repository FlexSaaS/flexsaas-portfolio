import { useEffect, useMemo, useState } from "react";
import styled, { css, keyframes } from "styled-components";

// --- Constants ---
const IMAGE_PATHS = ["/1.PNG", "/2.PNG", "/3.PNG", "/4.PNG", "/5.PNG"];

// --- Hook to detect mobile ---
function useIsMobile(breakpoint = 1000) {
  const [isMobile, setIsMobile] = useState(
    typeof window !== "undefined" ? window.innerWidth <= breakpoint : false
  );

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= breakpoint);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [breakpoint]);

  return isMobile;
}

// --- Props Interface ---
interface InfiniteImageScrollProps {
  speed?: number; // seconds
  direction?: "up" | "down" | "left" | "right";
}

// --- Component ---
export default function InfiniteImageScroll({
  speed = 40,
  direction = "up",
}: InfiniteImageScrollProps) {
  const [shuffledImages, setShuffledImages] = useState<string[]>([]);
  const isMobile = useIsMobile();

  useEffect(() => {
    setShuffledImages(shuffleArray(IMAGE_PATHS));
  }, []);

  const duplicatedImages = useMemo(
    () => [...shuffledImages, ...shuffledImages],
    [shuffledImages]
  );

  return (
    <ScrollContainer>
      <ScrollingContent isMobile={isMobile} direction={direction} speed={speed}>
        <ImageWrapper isMobile={isMobile}>
          {duplicatedImages.map((src, i) => (
            <img key={`img-${i}`} src={src} alt={`scroll-img-${i}`} />
          ))}
        </ImageWrapper>
        <ImageWrapper isMobile={isMobile}>
          {duplicatedImages.map((src, i) => (
            <img
              key={`img-duplicate-${i}`}
              src={src}
              alt={`scroll-img-duplicate-${i}`}
            />
          ))}
        </ImageWrapper>
      </ScrollingContent>
    </ScrollContainer>
  );
}

// --- Utility ---
function shuffleArray<T>(array: T[]): T[] {
  const result = [...array];
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
}

// --- Animations ---
const scrollLeft = keyframes`
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
`;
const scrollRight = keyframes`
  0% { transform: translateX(-50%); }
  100% { transform: translateX(0); }
`;
const scrollUp = keyframes`
  0% { transform: translateY(0); }
  100% { transform: translateY(-50%); }
`;
const scrollDown = keyframes`
  0% { transform: translateY(-50%); }
  100% { transform: translateY(0); }
`;

// --- Styled Components ---
const ScrollContainer = styled.div`
  overflow: hidden;
  width: 100%;
  height: 100%;
`;

const ScrollingContent = styled.div<{
  isMobile: boolean;
  direction: "up" | "down" | "left" | "right";
  speed: number;
}>`
  display: flex;
  flex-direction: ${({ isMobile }) => (isMobile ? "row" : "column")};
  width: ${({ isMobile }) => (isMobile ? "max-content" : "100%")};
  height: ${({ isMobile }) => (isMobile ? "auto" : "max-content")};
  animation: ${({ direction }) =>
    direction === "up"
      ? css`
          ${scrollUp}
        `
      : direction === "down"
      ? css`
          ${scrollDown}
        `
      : direction === "right"
      ? css`
          ${scrollRight}
        `
      : css`
          ${scrollLeft}
        `};
  animation-duration: ${({ speed }) => speed}s;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
`;

const ImageWrapper = styled.div<{ isMobile: boolean }>`
  display: flex;
  ${({ isMobile }) =>
    isMobile
      ? css`
          flex-direction: row;
          gap: 15px;
          padding: 10px;
        `
      : css`
          flex-direction: column;
          gap: 25px;
        `}

  img {
    width: ${({ isMobile }) => (isMobile ? "280px" : "100%")};
    height: auto;
    aspect-ratio: 1.2 / 1;
    object-fit: cover;
    border-radius: 10px;
  }
`;
