import { faFacebook, faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons/faTwitter";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import styled from "styled-components";

function Footer() {
  return (
     <FooterContainer aria-label="Site footer">
      <FooterGrid>
        <FooterColumn>
          <h3>Services</h3>
          <FooterLinks>
            <FooterLink>
              <Link to="/#services">Construction Portfolios</Link>
            </FooterLink>
            <FooterLink>
              <Link to="/#services">Beauty Booking Systems</Link>
            </FooterLink>
            <FooterLink>
              <Link to="/#services">Custom Solutions</Link>
            </FooterLink>
          </FooterLinks>
        </FooterColumn>

        <FooterColumn>
          <h3>Resources</h3>
          <FooterLinks>
            <FooterLink>
              <Link to="/#contact">Help Center</Link>
            </FooterLink>
            <FooterLink>
              <a href="mailto:hello@flexsaas.co.uk">Support</a>
            </FooterLink>
            <FooterLink>
              <a href="#">Blog</a>
            </FooterLink>
          </FooterLinks>
        </FooterColumn>

         <FooterColumn>
          <h3>Company</h3>
          <FooterLinks>
            <FooterLink>
              <Link to="/#team">Our Team</Link>
            </FooterLink>
            <FooterLink>
              <Link to="/#contact">Contact Us</Link>
            </FooterLink>
          </FooterLinks>
        </FooterColumn>
        
        <FooterColumn>
          <h3>Legal</h3>
          <FooterLinks>
            <FooterLink>
              <Link to="/privacy-policy">Privacy Policy</Link>
            </FooterLink>
            <FooterLink>
              <Link to="/terms-of-service">Terms of Service</Link>
            </FooterLink>
             <FooterLink>
              <Link to="/privacy-policy">Cookie Policy</Link>
            </FooterLink>
          </FooterLinks>
        </FooterColumn>
      </FooterGrid>

      <FooterBottom>
        <SocialLinks aria-label="Social links">
          <a href="https://instagram.com/flexsaas" aria-label="FlexSaaS on Instagram" target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a href="https://www.linkedin.com/company/flexsaas/" aria-label="FlexSaaS on LinkedIn" target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a href="https://twitter.com" aria-label="FlexSaaS on X/Twitter" target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faTwitter} />
          </a>
          <a href="https://facebook.com" aria-label="FlexSaaS on Facebook" target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faFacebook} />
          </a>
        </SocialLinks>
        <small>© {new Date().getFullYear()} FlexSaaS. All rights reserved.</small>
      </FooterBottom>
    </FooterContainer>
  );
}

export default Footer;

const FooterContainer = styled.footer`
  background: #101418;
  color: #bbb;
  padding: 3rem 2rem;
`;

const FooterGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: 900px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
  @media (max-width: 560px) {
    grid-template-columns: 1fr;
  }
`;

const FooterColumn = styled.div`
  h3 {
    color: white;
    margin-bottom: 1rem;
    font-size: 1.1rem;
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
    transition: color 0.25s ease;

    &:hover {
      color: #fff;
    }
  }
`;

const FooterBottom = styled.div`
  max-width: 1200px;
  margin: 2rem auto 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  border-top: 1px solid rgba(255,255,255,0.08);
  padding-top: 1rem;
  flex-wrap: wrap;
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;

  a {
    color: #bbb;
    font-size: 1.2rem;
    transition: color 0.25s ease, transform 0.25s ease;
  }

  a:hover {
    color: #fff;
    transform: translateY(-2px);
  }
`;