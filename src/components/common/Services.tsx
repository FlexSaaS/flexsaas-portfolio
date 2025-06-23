import styled from 'styled-components';


function Services() {
  return (
    <ServicesContainer>
      <SectionTitle>Our Solutions</SectionTitle>
      <ServicesGrid>
        <ServiceCard>
          <ServiceIcon>🏗️</ServiceIcon>
          <ServiceTitle>Construction Portfolios</ServiceTitle>
          <ServiceDescription>
            Beautiful, mobile-friendly websites to showcase your work, highlight testimonials, 
            and make it easy for clients to contact you.
          </ServiceDescription>
        </ServiceCard>
        
        <ServiceCard>
          <ServiceIcon>✂️</ServiceIcon>
          <ServiceTitle>Beauty Booking Systems</ServiceTitle>
          <ServiceDescription>
            Powerful scheduling tools that let clients book appointments 24/7, 
            manage your calendar, and reduce no-shows with automated reminders.
          </ServiceDescription>
        </ServiceCard>
        
        <ServiceCard>
          <ServiceIcon>🚀</ServiceIcon>
          <ServiceTitle>Custom Solutions</ServiceTitle>
          <ServiceDescription>
            Need something special? We build custom digital solutions tailored 
            to your specific business needs and workflow.
          </ServiceDescription>
        </ServiceCard>
      </ServicesGrid>
    </ServicesContainer>
  );
}

export default Services;

const ServicesContainer = styled.section`
  padding: 8rem 10%;
  background: white;
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 5rem;
  color: #333;
`;

const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 3rem;
`;

const ServiceCard = styled.div`
  background: #f9fafc;
  border-radius: 8px;
  padding: 2.5rem;
  transition: all 0.3s;
  border: 1px solid #eaeaea;
  
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
  }
`;

const ServiceIcon = styled.div`
  font-size: 2.5rem;
  color: #0066ff;
  margin-bottom: 1.5rem;
`;

const ServiceTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: #333;
`;

const ServiceDescription = styled.p`
  color: #666;
  line-height: 1.6;
  margin-bottom: 1.5rem;
`;