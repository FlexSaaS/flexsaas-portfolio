import { useEffect, useState } from "react";
import styled, { keyframes, css } from "styled-components";

const imagePaths = ["/1.PNG", "/2.PNG", "/3.PNG", "/4.PNG", "/5.PNG"];

function shuffleArray<T>(array: T[]): T[] {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

// Keyframe animations
const scrollUp = keyframes`
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(-50%);
  }
`;

const scrollDown = keyframes`
  0% {
    transform: translateY(-50%);
  }
  100% {
    transform: translateY(0);
  }
`;

// Scroll container
const ScrollContainer = styled.div`
  background: linear-gradient(135deg, #f5f7fa 0%, #e4e8eb 100%);
  display: flex;
  gap: 10px;
  height: 1000px;
  overflow: hidden;
  width: 100%;
`;

// Scroll column
const Column = styled.div<{ reverse?: boolean; duration: number }>`
  flex: 1 1 0;
  overflow: hidden;
  position: relative;

  > div {
    display: flex;
    flex-direction: column;
    gap: 10px;

    > img {
      width: 100%;
      aspect-ratio: 1.2 / 1;
      object-fit: cover;
      display: block;
    }

    animation: ${({ reverse }) =>
      reverse
        ? css`
            ${scrollDown} linear infinite
          `
        : css`
            ${scrollUp} linear infinite
          `};
    animation-duration: ${({ duration }) => duration}s;
  }
`;

export default function InfiniteImageScroll() {
  const [leftShuffle, setLeftShuffle] = useState<string[]>([]);
  const [middleShuffle, setMiddleShuffle] = useState<string[]>([]);
  const [rightShuffle, setRightShuffle] = useState<string[]>([]);

  useEffect(() => {
    setLeftShuffle(shuffleArray(imagePaths));
    setMiddleShuffle(shuffleArray(imagePaths));
    setRightShuffle(shuffleArray(imagePaths));
  }, []);

  const leftDuplicated = [...leftShuffle, ...leftShuffle];
  const middleDuplicated = [...middleShuffle, ...middleShuffle];
  const rightDuplicated = [...rightShuffle, ...rightShuffle];

  return (
    <ScrollContainer>
      {/* Left column - scroll up */}
      <Column duration={80}>
        <div>
          {leftDuplicated.map((src, i) => (
            <img key={`left-${i}`} src={src} alt={`left-img-${i}`} />
          ))}
        </div>
      </Column>

      {/* Middle column - scroll down */}
      <Column reverse duration={100}>
        <div>
          {middleDuplicated.map((src, i) => (
            <img key={`middle-${i}`} src={src} alt={`middle-img-${i}`} />
          ))}
        </div>
      </Column>

      {/* Right column - scroll up */}
      <Column duration={120}>
        <div>
          {rightDuplicated.map((src, i) => (
            <img key={`right-${i}`} src={src} alt={`right-img-${i}`} />
          ))}
        </div>
      </Column>
    </ScrollContainer>
  );
}
