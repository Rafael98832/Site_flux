import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin, FaPhone, FaEnvelope, FaMapMarkerAlt, FaWhatsapp, FaClock, FaShieldAlt, FaTruck, FaCreditCard } from 'react-icons/fa';

const FooterContainer = styled.footer`
  width: 100%;
  background: var(--kabum-blue);
  color: var(--white);
  font-family: 'Inter', 'Segoe UI', Roboto, Arial, sans-serif;
`;

const TopFooter = styled.div`
  background: var(--kabum-blue-dark);
  padding: 40px 0;
  
  @media (max-width: 768px) {
    padding: 30px 0;
  }
  
  @media (max-width: 480px) {
    padding: 25px 0;
  }
`;

const NewsletterContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 15px;
`;

const Newsletter = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const NewsletterTitle = styled.h3`
  font-size: 24px;
  margin-bottom: 15px;
  font-weight: 700;
  
  @media (max-width: 768px) {
    font-size: 20px;
  }
`;

const NewsletterText = styled.p`
  font-size: 15px;
  margin-bottom: 20px;
  max-width: 600px;
  
  @media (max-width: 768px) {
    font-size: 14px;
    margin-bottom: 15px;
  }
`;

const NewsletterForm = styled.form`
  display: flex;
  max-width: 500px;
  width: 100%;
  
  @media (max-width: 576px) {
    flex-direction: column;
  }
`;

const NewsletterInput = styled.input`
  flex: 1;
  padding: 12px 15px;
  border: none;
  border-radius: 4px 0 0 4px;
  font-size: 14px;
  background: var(--white);
  color: var(--gray-800);
  
  @media (max-width: 576px) {
    border-radius: 4px;
    margin-bottom: 10px;
  }
`;

const NewsletterButton = styled.button`
  background: var(--kabum-orange);
  color: var(--white);
  border: none;
  padding: 0 20px;
  border-radius: 0 4px 4px 0;
  font-weight: 600;
  cursor: pointer;
  transition: var(--transition-normal);
  box-shadow: var(--shadow-sm);
  
  &:hover {
    background: var(--kabum-orange-dark);
    transform: translateY(-1px);
    box-shadow: var(--shadow-md);
  }
  
  @media (max-width: 576px) {
    border-radius: 4px;
    padding: 12px 20px;
  }
`;

const MainFooter = styled.div`
  padding: 60px 0;
  
  @media (max-width: 768px) {
    padding: 40px 0;
  }
  
  @media (max-width: 480px) {
    padding: 30px 0;
  }
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 15px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
  
  @media (max-width: 992px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: 576px) {
    grid-template-columns: 1fr;
  }
`;

const FooterColumn = styled.div``;

const ColumnTitle = styled.h4`
  font-size: 18px;
  margin-bottom: 20px;
  position: relative;
  font-weight: 700;
  color: white;
  &:after {
    content: '';
    position: absolute;
    left: 0;
    bottom: -10px;
    width: 40px;
    height: 3px;
    background: var(--kabum-orange);
    border-radius: 2px;
  }
  
  @media (max-width: 768px) {
    font-size: 16px;
    margin-bottom: 15px;
  }
`;

const FooterLinks = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const FooterLink = styled.li`
  margin-bottom: 10px;
  
  a {
    color: rgba(255, 255, 255, 0.8);
    text-decoration: none;
    transition: var(--transition-fast);
    font-size: 14px;
    display: inline-block;
    
    &:hover {
      color: var(--kabum-orange);
    }
  }
`;

const ContactInfo = styled.div``;

const ContactItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 15px;
  font-size: 14px;
  color: rgba(255, 255, 255, 0.8);
`;

const ContactIcon = styled.div`
  margin-right: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--kabum-orange);
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 15px;
  margin-top: 20px;
`;

const SocialLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 50%;
  color: white;
  transition: var(--transition-normal);
  
  &:hover {
    background-color: var(--kabum-orange);
    transform: translateY(-3px);
    color: white;
  }
`;

const BottomFooter = styled.div`
  background-color: #00529e;
  padding: 20px 0;
  text-align: center;
  font-size: 13px;
  
  @media (max-width: 768px) {
    padding: 15px 0;
    font-size: 12px;
  }
`;

const Copyright = styled.p`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 15px;
  color: rgba(255, 255, 255, 0.7);
`;

const PaymentSection = styled.div`
  margin-top: 25px;
`;

const PaymentTitle = styled.h5`
  font-size: 16px;
  margin-bottom: 15px;
  font-weight: 600;
  
  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

const PaymentIcons = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 10px;
  
  img {
    height: 30px;
    width: auto;
    object-fit: contain;
    padding: 5px;
    border-radius: 4px;
    box-shadow: 0 5px 10px rgba(0,0,0,0.1);
    cursor: pointer;
  }
`;

const Benefits = styled.div`
  margin-top: 20px;
`;

const BenefitItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 12px;
  font-size: 14px;
  color: rgba(255, 255, 255, 0.8);
`;

const BenefitIcon = styled.div`
  margin-right: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--kabum-orange);
`;

const Footer = () => {
  return (
    <FooterContainer>
      <MainFooter>
        <FooterContent>
          <FooterColumn>
            <ColumnTitle>DISTRIBUIDORA MARKETPLACE</ColumnTitle>
            <ContactInfo>
              
              <ContactItem>
                <ContactIcon>
                  <FaPhone />
                </ContactIcon>
                <span>(11) 97551-3198</span>
              </ContactItem>
             
              <ContactItem>
                <ContactIcon>
                  <FaEnvelope />
                </ContactIcon>
                <span>contato@dgair.com.br</span>
              </ContactItem>
              <ContactItem>
                <ContactIcon>
                  <FaClock />
                </ContactIcon>
                <span>Seg - Sex: 9h às 18h<br />Sábado: 9h às 13h</span>
              </ContactItem>
            </ContactInfo>
            
            <SocialLinks>
              <SocialLink href="https://wa.me/5511975513198" target="_blank">
                <FaWhatsapp />
              </SocialLink>
              <SocialLink href="#" target="_blank">
                <FaInstagram />
              </SocialLink>
              <SocialLink href="mailto:contato@dgair.com.br" target="_blank">
                <FaEnvelope />
              </SocialLink>
            </SocialLinks>
          </FooterColumn>
          
          <FooterColumn>
            <ColumnTitle>Split Inverter por BTUs</ColumnTitle>
            <FooterLinks>
              <FooterLink>
                <Link to="/category/split-inverter/9000">9.000 BTUs</Link>
              </FooterLink>
              <FooterLink>
                <Link to="/category/split-inverter/12000">12.000 BTUs</Link>
              </FooterLink>
              <FooterLink>
                <Link to="/category/split-inverter/18000">18.000 BTUs</Link>
              </FooterLink>
              <FooterLink>
                <Link to="/category/split-inverter/24000">24.000 BTUs</Link>
              </FooterLink>
            </FooterLinks>
            

          </FooterColumn>
          
         
          
          <FooterColumn>
            <ColumnTitle>Por que Split Inverter?</ColumnTitle>
            <Benefits>
              <BenefitItem>
                <BenefitIcon>
                  <FaShieldAlt />
                </BenefitIcon>
                <span>Até 70% mais economia de energia</span>
              </BenefitItem>
              <BenefitItem>
                <BenefitIcon>
                  <FaTruck />
                </BenefitIcon>
                <span>Instalação profissional grátis</span>
              </BenefitItem>
              <BenefitItem>
                <BenefitIcon>
                  <FaCreditCard />
                </BenefitIcon>
                <span>Garantia estendida de 3 anos</span>
              </BenefitItem>
            </Benefits>
            
            <Benefits style={{marginTop: '25px'}}>
              <BenefitItem>
                <BenefitIcon>
                  <FaShieldAlt />
                </BenefitIcon>
                <span>Tecnologia Inverter mais eficiente</span>
              </BenefitItem>
              <BenefitItem>
                <BenefitIcon>
                  <FaTruck />
                </BenefitIcon>
                <span>Controle de temperatura preciso</span>
              </BenefitItem>
              <BenefitItem>
                <BenefitIcon>
                  <FaCreditCard />
                </BenefitIcon>
                <span>Operação ultra silenciosa</span>
              </BenefitItem>
            </Benefits>
            
            <PaymentSection>
              <PaymentTitle>Formas de Pagamento</PaymentTitle>
              <PaymentIcons>
                <img src="https://raw.githubusercontent.com/aaronfagan/svg-credit-card-payment-icons/main/flat/visa.svg" alt="Visa" />
                <img src="https://raw.githubusercontent.com/aaronfagan/svg-credit-card-payment-icons/main/flat/mastercard.svg" alt="Mastercard" />
                <img src="https://upload.wikimedia.org/wikipedia/commons/d/de/Logo_-_pix_powered_by_Banco_Central_%28Brazil%2C_2020%29.png" alt="PIX" />
                <img src="https://raw.githubusercontent.com/jeffdrumgod/payment-brands-images/master/variation-01/PNG/boleto@2x.png" alt="Boleto" />
              </PaymentIcons>
            </PaymentSection>
          </FooterColumn>
        </FooterContent>
      </MainFooter>
      
      <BottomFooter>
        <Copyright>
          © {new Date().getFullYear()} DG Air Climatização - Todos os direitos reservados.
        </Copyright>
      </BottomFooter>
    </FooterContainer>
  );
};

export default Footer; 