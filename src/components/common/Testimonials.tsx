import styled from 'styled-components';
import { useState, useRef } from 'react';

type Testimonial = {
  id: number;
  quote: string;
  name: string;
  company: string;
  image: string;
  rating: number;
  category: 'portfolio' | 'booking';
};

const testimonials: Testimonial[] = [
  {
    id: 1,
    quote: "Our new website has brought in twice as many leads as before. The portfolio showcase makes it easy to demonstrate our quality work.",
    name: "Mike Johnson",
    company: "Johnson Construction",
    image: "/contractor.jpg",
    rating: 5,
    category: 'portfolio'
  },
  {
    id: 2,
    quote: "The booking system has saved me hours each week. Clients can book anytime, and the automated reminders have virtually eliminated no-shows.",
    name: "Sarah Miller",
    company: "Miller Hair Studio",
    image: "/SarahMiller.jpeg",
    rating: 5,
    category: 'booking'
  },
  {
    id: 3,
    quote: "The professional design and easy content management system has transformed how we showcase our work to potential clients.",
    name: "David Wilson",
    company: "Wilson Electric",
    image: "/DavidWilson.jpeg",
    rating: 4,
    category: 'portfolio'
  },
  {
    id: 4,
    quote: "Our appointment bookings have increased by 40% since implementing this system. The interface is so user-friendly for both us and our clients.",
    name: "Emily Chen",
    company: "Chen Dental",
    image: "/EmilyChen.jpeg",
    rating: 5,
    category: 'booking'
  },
  {
    id: 5,
    quote: "The portfolio website has helped us win several high-profile contracts. The image galleries load quickly and look stunning on all devices.",
    name: "Robert Taylor",
    company: "Taylor Architects",
    image: "/RobertTaylor.jpeg",
    rating: 4,
    category: 'portfolio'
  }
];

function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const getVisibleCards = () => {
    if (typeof window === 'undefined') return 3;
    return window.innerWidth < 768 ? 1 : 3;
  };

  const visibleCards = getVisibleCards();
  const maxIndex = Math.max(0, testimonials.length - visibleCards);

  const scrollToIndex = (index: number) => {
    if (!scrollContainerRef.current) return;

    const newIndex = Math.max(0, Math.min(index, maxIndex));
    setCurrentIndex(newIndex);

    const container = scrollContainerRef.current;
    const card = container.querySelector('.testimonial-card') as HTMLElement;
    if (!card) return;

    const cardWidth = card.offsetWidth + 32; // 32px is the grid gap (2rem)
    container.scrollTo({
      left: newIndex * cardWidth,
      behavior: 'smooth'
    });
  };

  return (
    <TestimonialsContainer>
      <SectionHeader>
        <SectionTitle>Client Success Stories</SectionTitle>
        <SectionSubtitle>Hear from businesses who've transformed their online presence</SectionSubtitle>
      </SectionHeader>

      <TestimonialsWrapper>
        <NavigationButton
          onClick={() => scrollToIndex(currentIndex - 1)}
          disabled={currentIndex === 0}
          style={{ left: '-60px' }}
        >
          &larr;
        </NavigationButton>

        <TestimonialGrid ref={scrollContainerRef}>
          {/* Left Spacer */}
          <Spacer />

          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id} className="testimonial-card">
              <StarsContainer>
                {[...Array(5)].map((_, i) => (
                  <Star key={i} filled={i < testimonial.rating}>★</Star>
                ))}
              </StarsContainer>
              <TestimonialText>"{testimonial.quote}"</TestimonialText>
              <TestimonialAuthor>
                <AuthorImage>
                  <img src={testimonial.image} alt={testimonial.name} />
                </AuthorImage>
                <AuthorInfo>
                  <AuthorName>{testimonial.name}</AuthorName>
                  <AuthorCompany>{testimonial.company}</AuthorCompany>
                  <AuthorCategory>
                    {testimonial.category === 'portfolio' ? 'Portfolio Client' : 'Booking Client'}
                  </AuthorCategory>
                </AuthorInfo>
              </TestimonialAuthor>
            </TestimonialCard>
          ))}

          {/* Right Spacer */}
          <Spacer />
        </TestimonialGrid>

        <NavigationButton
          onClick={() => scrollToIndex(currentIndex + 1)}
          disabled={currentIndex >= maxIndex}
          style={{ right: '-60px' }}
        >
          &rarr;
        </NavigationButton>
      </TestimonialsWrapper>
    </TestimonialsContainer>
  );
}

export default Testimonials;

// Styled Components
const TestimonialsContainer = styled.section`
  padding: 6rem 5%;
  position: relative;
`;

const SectionHeader = styled.div`
  text-align: center;
  max-width: 800px;
  margin: 0 auto 4rem;
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  color: #333;
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const SectionSubtitle = styled.p`
  font-size: 1.1rem;
  color: #666;
  line-height: 1.6;
`;

const TestimonialsWrapper = styled.div`
  position: relative;
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  align-items: center;
`;

const NavigationButton = styled.button<{ disabled: boolean }>`
  position: absolute;
  z-index: 10;
  background: white;
  border: none;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  font-size: 1.5rem;
  color: ${({ disabled }) => (disabled ? '#ccc' : '#0066ff')};
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;

  &:hover:not(:disabled) {
    background: #0066ff;
    color: white;
    transform: scale(1.1);
  }

  @media (max-width: 768px) {
    width: 40px;
    height: 40px;
    font-size: 1.2rem;
  }
`;

const TestimonialGrid = styled.div`
  display: flex;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  scroll-behavior: smooth;
  gap: 2rem;
  padding: 1rem 0;
  -ms-overflow-style: none;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const Spacer = styled.div`
  flex: 0 0 30px;

  @media (min-width: 768px) {
    flex: 0 0 60px;
  }
`;

const TestimonialCard = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 5px 30px rgba(0, 0, 0, 0.08);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  scroll-snap-align: start;
  flex: 0 0 auto;
  width: 85vw;
  max-width: 350px;
  min-width: 280px;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);
  }

  @media (min-width: 768px) {
    width: 45vw;
    max-width: 380px;
  }

  @media (min-width: 1024px) {
    width: 30vw;
    max-width: 400px;
  }
`;

const StarsContainer = styled.div`
  margin-bottom: 1.5rem;
`;

const Star = styled.span<{ filled: boolean }>`
  color: ${({ filled }) => (filled ? '#FFD700' : '#e0e0e0')};
  font-size: 1.2rem;
  margin-right: 0.2rem;
`;

const TestimonialText = styled.p`
  font-size: 1.1rem;
  line-height: 1.8;
  color: #555;
  margin-bottom: 2rem;
  font-style: italic;
  position: relative;

  &::before {
    content: '"';
    font-size: 3rem;
    color: rgba(0, 102, 255, 0.1);
    position: absolute;
    top: -1.5rem;
    left: -1rem;
    line-height: 1;
  }
`;

const TestimonialAuthor = styled.div`
  display: flex;
  align-items: center;
`;

const AuthorImage = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  overflow: hidden;
  margin-right: 1.5rem;
  border: 3px solid rgba(0, 102, 255, 0.1);

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const AuthorInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

const AuthorName = styled.h4`
  font-size: 1.1rem;
  color: #333;
  margin: 0 0 0.2rem 0;
`;

const AuthorCompany = styled.p`
  font-size: 0.9rem;
  color: #666;
  margin: 0 0 0.2rem 0;
`;

const AuthorCategory = styled.span`
  font-size: 0.8rem;
  color: #0066ff;
  background: rgba(0, 102, 255, 0.1);
  padding: 0.2rem 0.6rem;
  border-radius: 20px;
  display: inline-block;
  margin-top: 0.3rem;
`;
