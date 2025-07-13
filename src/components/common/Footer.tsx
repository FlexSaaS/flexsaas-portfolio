import styled from 'styled-components';

function Footer() {
  return (
    <FooterContainer aria-label="Site footer">
      <FooterGrid>
        <FooterColumn>
          <h3>Services</h3>
          <FooterLinks>
            <FooterLink><a href="#services">Construction Portfolios</a></FooterLink>
            <FooterLink><a href="#services">Beauty Booking Systems</a></FooterLink>
            <FooterLink><a href="#services">Custom Solutions</a></FooterLink>
          </FooterLinks>
        </FooterColumn>
        
        <FooterColumn>
          <h3>Company</h3>
          <FooterLinks>
            <FooterLink><a href="#team">About Us</a></FooterLink>
            <FooterLink><a href="#team">Our Team</a></FooterLink>
            {/* <FooterLink><a href="#">Careers</a></FooterLink> */}
            <FooterLink><a href="#contact">Contact</a></FooterLink>
          </FooterLinks>
        </FooterColumn>
        
        <FooterColumn>
          <h3>Resources</h3>
          <FooterLinks>
            <FooterLink><a href="#">Blog</a></FooterLink>
            <FooterLink><a href="#contact">Help Center</a></FooterLink>
          </FooterLinks>
        </FooterColumn>
        
        <FooterColumn>
          <h3>Legal</h3>
          <FooterLinks>
            <FooterLink><a href="#">Privacy Policy</a></FooterLink>
            <FooterLink><a href="#">Terms of Service</a></FooterLink>
            <FooterLink><a href="#">Cookie Policy</a></FooterLink>
          </FooterLinks>
        </FooterColumn>
      </FooterGrid>
      
      <FooterBottom>
        <div>© {new Date().getFullYear()} FlexSaaS. All rights reserved.</div>
        <SocialLinks aria-label="Social media links">
          <a href="https://twitter.com/flexsaas" aria-label="FlexSaaS on Twitter"><i className="fab fa-twitter" aria-hidden="true"></i></a>
          <a href="https://facebook.com/flexsaas" aria-label="FlexSaaS on Facebook"><i className="fab fa-facebook" aria-hidden="true"></i></a>
          <a href="https://instagram.com/flexsaas" aria-label="FlexSaaS on Instagram"><i className="fab fa-instagram" aria-hidden="true"></i></a>
          <a href="https://linkedin.com/company/flexsaas" aria-label="FlexSaaS on LinkedIn"><i className="fab fa-linkedin" aria-hidden="true"></i></a>
        </SocialLinks>
      </FooterBottom>
    </FooterContainer>
  );
}

export default Footer;

const FooterContainer = styled.footer`
  background: #333;
  color: white;
  padding: 5rem 10% 2rem;
`;

const FooterGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 3rem;
  margin-bottom: 3rem;
`;

const FooterColumn = styled.div`
  h3 {
    color: white;
    margin-bottom: 1.5rem;
    font-size: 1.2rem;
  }
`;

const FooterLinks = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const FooterLink = styled.li`
  margin-bottom: 0.8rem;
  
  a {
    color: #bbb;
    text-decoration: none;
    transition: color 0.3s;
    
    &:hover {
      color: white;
    }
  }
`;

const FooterBottom = styled.div`
  border-top: 1px solid #444;
  padding-top: 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #999;
  font-size: 0.9rem;
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
  
  a {
    color: #bbb;
    font-size: 1.2rem;
    transition: color 0.3s;
    
    &:hover {
      color: white;
    }
  }
`;
