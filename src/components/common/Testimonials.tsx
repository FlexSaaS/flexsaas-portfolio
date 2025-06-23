import styled from 'styled-components';



function Testimonials() {
  return (
    <TestimonialsContainer>
      {/* <SectionTitle>What Our Clients Say</SectionTitle> */}
      <TestimonialGrid>
        <TestimonialCard>
          <TestimonialText>
            "Our new website has brought in twice as many leads as before. 
            The portfolio showcase makes it easy to demonstrate our quality work."
          </TestimonialText>
          <TestimonialAuthor>
            <AuthorImage>
              <img src="/contractor.jpg" alt="Mike Johnson" />
            </AuthorImage>
            <AuthorInfo>
              <h4>Mike Johnson</h4>
              <p>Johnson Construction</p>
            </AuthorInfo>
          </TestimonialAuthor>
        </TestimonialCard>
        
        <TestimonialCard>
          <TestimonialText>
            "The booking system has saved me hours each week. Clients can book 
            anytime, and the automated reminders have virtually eliminated no-shows."
          </TestimonialText>
          <TestimonialAuthor>
            <AuthorImage>
              <img src="/stylist.jpg" alt="Sarah Miller" />
            </AuthorImage>
            <AuthorInfo>
              <h4>Sarah Miller</h4>
              <p>Miller Hair Studio</p>
            </AuthorInfo>
          </TestimonialAuthor>
        </TestimonialCard>
      </TestimonialGrid>
    </TestimonialsContainer>
  );
}

export default Testimonials;

const TestimonialsContainer = styled.section`
  padding: 8rem 10%;
  background: white;
`;

const TestimonialGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 4rem;
`;

const TestimonialCard = styled.div`
  background: #f9fafc;
  padding: 2rem;
  border-radius: 8px;
  border: 1px solid #eaeaea;
`;

const TestimonialText = styled.p`
  font-style: italic;
  color: #555;
  line-height: 1.8;
  margin-bottom: 1.5rem;
`;

const TestimonialAuthor = styled.div`
  display: flex;
  align-items: center;
`;

const AuthorImage = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: #eee;
  margin-right: 1rem;
  overflow: hidden;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const AuthorInfo = styled.div`
  h4 {
    margin: 0;
    color: #333;
  }
  
  p {
    margin: 0.2rem 0 0 0;
    color: #777;
    font-size: 0.9rem;
  }
`;