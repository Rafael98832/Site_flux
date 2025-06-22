import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const CardContainer = styled(Link)`
  display: block;
  background-color: white;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.05);
  border-radius: 12px;
  overflow: hidden;
  transition: all 0.3s ease;
  text-decoration: none;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
    
    img {
      transform: scale(1.05);
    }
  }
`;

const CardImage = styled.div`
  height: 160px;
  overflow: hidden;
  position: relative;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s ease;
  }
  
  @media (max-width: 768px) {
    height: 140px;
  }
`;

const CardContent = styled.div`
  padding: 20px;
  
  @media (max-width: 768px) {
    padding: 15px;
  }
`;

const CardTitle = styled.h3`
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 5px;
  color: #222;
  
  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const CardDescription = styled.p`
  color: #777;
  font-size: 14px;
  margin-bottom: 0;
  
  @media (max-width: 768px) {
    font-size: 13px;
  }
`;

const getImageForCategory = (category) => {
  switch(category) {
    case 'Split Inverter':
      return 'https://images.samsung.com/is/image/samsung/p6pim/br/ar09bvpvbwknaz/gallery/br-windfree-ar9500t-ar09bvpvbwknaz-535066837?$720_576_PNG$';
    case 'Cassete':
      return 'https://d1i9kr860qmron.cloudfront.net/canaloffprice/fotos/grande/31485.jpg';
    case 'Multi Split':
      return 'https://www.fujitsu-general.com/br/resources/img/products/k-series/asba07jca/l_01.jpg';
    case 'Portátil':
      return 'https://m.media-amazon.com/images/I/51pPhQQd3cL._AC_SL1024_.jpg';
    default:
      return 'https://images.samsung.com/is/image/samsung/p6pim/br/ar24cyglatwkaz/gallery/br-windfree-ar9500t-ar24cyglatwkaz-535066871?$720_576_PNG$';
  }
};

const CategoryCard = ({ category, description }) => {
  return (
    <CardContainer to="/">
      <CardImage>
        <img src={getImageForCategory(category)} alt={category} />
      </CardImage>
      <CardContent>
        <CardTitle>{category}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardContent>
    </CardContainer>
  );
};

export default CategoryCard; 