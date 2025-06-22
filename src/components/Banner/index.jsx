import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const BannerContainer = styled.div`
  width: 100%;
  height: 450px;
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), 
    url('https://images.samsung.com/is/image/samsung/p6pim/br/ar24cyglatwkaz/gallery/br-windfree-ar9500t-ar24cyglatwkaz-535067052?$1300_1038_PNG$');
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  margin-bottom: 50px;
  position: relative;
  
  @media (max-width: 768px) {
    height: 350px;
    margin-bottom: 30px;
  }
`;

const BannerContent = styled.div`
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  padding: 0 15px;
  color: white;
  text-align: left;
  
  @media (max-width: 768px) {
    text-align: center;
  }
`;

const BannerTitle = styled.h1`
  font-size: 3.5rem;
  font-weight: 800;
  margin-bottom: 1rem;
  color: white;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  
  @media (max-width: 768px) {
    font-size: 2.2rem;
  }
  
  @media (max-width: 480px) {
    font-size: 1.8rem;
  }
`;

const BannerSubtitle = styled.p`
  font-size: 1.2rem;
  margin-bottom: 2rem;
  max-width: 600px;
  font-weight: 400;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
  
  @media (max-width: 768px) {
    font-size: 1rem;
    margin: 0 auto 1.5rem;
  }
`;

const BannerButton = styled(Link)`
  display: inline-block;
  background-color: #0066cc;
  color: white;
  font-weight: 600;
  padding: 12px 30px;
  border-radius: 30px;
  text-decoration: none;
  transition: all 0.3s ease;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-size: 1rem;
  
  &:hover {
    background-color: #0055aa;
    transform: translateY(-3px);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
  }
  
  @media (max-width: 768px) {
    padding: 10px 24px;
    font-size: 0.9rem;
  }
`;

const Banner = () => {
  return (
    <BannerContainer>
      <BannerContent>
        <BannerTitle>Samsung WindFree™</BannerTitle>
        <BannerSubtitle>
          Resfriamento inteligente sem vento direto. Conforto máximo e economia de até 77% de energia.
        </BannerSubtitle>
        <BannerButton to="/product/1">Ver Detalhes</BannerButton>
      </BannerContent>
    </BannerContainer>
  );
};

export default Banner; 