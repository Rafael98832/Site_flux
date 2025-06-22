import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FaTags } from 'react-icons/fa';

const Card = styled.div`
  border: 1px solid var(--gray-200);
  border-radius: 12px;
  padding: 15px;
  background: var(--white);
  transition: var(--transition-normal);
  display: flex;
  flex-direction: column;
  position: relative;
  overflow: hidden;
  height: 100%;
  box-shadow: var(--shadow-sm);
  
  &:hover {
    box-shadow: var(--shadow-xl);
    transform: translateY(-5px);
    border-color: var(--kabum-orange);
  }
  
  @media (max-width: 768px) {
    padding: 12px;
  }
`;

const PromoBadge = styled.div`
  position: absolute;
  top: 15px;
  left: -30px;
  background: var(--kabum-orange);
  color: var(--white);
  padding: 5px 30px;
  font-size: 11px;
  font-weight: 600;
  text-transform: uppercase;
  transform: rotate(-45deg);
  box-shadow: var(--shadow-md);
  z-index: 2;
  
  @media (max-width: 480px) {
    top: 10px;
    left: -35px;
    padding: 4px 30px;
    font-size: 10px;
  }
`;

const ImageContainer = styled.div`
  position: relative;
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  height: 180px;
  
  @media (max-width: 992px) {
    height: 160px;
  }
  
  @media (max-width: 768px) {
    height: 150px;
    padding: 8px;
  }
  
  @media (max-width: 480px) {
    height: 140px;
    padding: 5px;
  }
`;

const ProductImage = styled.img`
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
`;

const StockLabel = styled.div`
  position: absolute;
  top: 10px;
  left: 10px;
  background: ${props => props.inStock ? 'var(--kabum-blue)' : '#ef4444'};
  color: var(--white);
  padding: 5px 10px;
  border-radius: 20px;
  font-size: 11px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  z-index: 1;
  box-shadow: var(--shadow-sm);
  
  @media (max-width: 768px) {
    padding: 4px 8px;
    font-size: 10px;
  }
  
  @media (max-width: 480px) {
    padding: 3px 8px;
    font-size: 9px;
    top: 8px;
    left: 8px;
  }
`;

const Content = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
`;

const Title = styled(Link)`
  color: var(--gray-800);
  font-size: 15px;
  font-weight: 500;
  margin-bottom: 8px;
  text-decoration: none;
  line-height: 1.4;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  height: 42px;
  transition: var(--transition-fast);
  
  &:hover {
    color: white;
  }
  
  @media (max-width: 768px) {
    font-size: 14px;
    margin-bottom: 6px;
    height: 39px;
  }
`;

const Specs = styled.div`
  margin-bottom: 10px;
  
  @media (max-width: 768px) {
    margin-bottom: 8px;
  }
`;

const SpecItem = styled.div`
  display: flex;
  margin-bottom: 4px;
  font-size: 13px;
  color: var(--gray-600);
  position: relative;
  padding-left: 10px;
  
  &:before {
    content: '';
    position: absolute;
    left: 0;
    top: 8px;
    width: 4px;
    height: 4px;
    border-radius: 50%;
    background: var(--kabum-orange);
  }
  
  @media (max-width: 768px) {
    font-size: 12px;
    margin-bottom: 3px;
    
    &:before {
      top: 7px;
      width: 3px;
      height: 3px;
    }
  }
`;

const SpecLabel = styled.span`
  margin-right: 5px;
`;

const PriceContainer = styled.div`
  margin-top: auto;
  padding-top: 10px;
  border-top: 1px solid var(--gray-200);
  
  @media (max-width: 768px) {
    padding-top: 8px;
  }
`;

const OriginalPrice = styled.div`
  color: var(--gray-400);
  font-size: 13px;
  text-decoration: line-through;
  
  @media (max-width: 768px) {
    font-size: 12px;
  }
`;

const CurrentPrice = styled.div`
  font-size: 18px;
  font-weight: 700;
  color: #333;
  margin: 3px 0;
  
  @media (max-width: 768px) {
    font-size: 16px;
    margin: 2px 0;
  }
  
  @media (max-width: 480px) {
    font-size: 15px;
  }
`;

const PixPrice = styled.div`
  font-size: 13px;
  color: #28a745;
  font-weight: 600;
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  gap: 5px;
  
  svg {
    font-size: 11px;
  }
  
  @media (max-width: 768px) {
    font-size: 12px;
    margin-bottom: 8px;
    
    svg {
      font-size: 10px;
    }
  }
`;

const ButtonsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 8px;
`;

const Button = styled.button`
  display: inline-block;
  padding: 10px;
  border-radius: 30px;
  font-weight: 600;
  text-align: center;
  transition: all 0.2s;
  cursor: pointer;
  font-size: 14px;
  
  @media (max-width: 768px) {
    padding: 8px;
    font-size: 13px;
  }
  
  @media (max-width: 480px) {
    padding: 7px;
    font-size: 12px;
  }
`;

const BuyButton = styled(Button)`
  background-color: var(--primary);
  color: white;
  border: none;
  
  &:hover {
    background-color: var(--primary-dark);
  }
  
  &:disabled {
    background-color: #cccccc;
    cursor: not-allowed;
  }
`;

const DetailsButton = styled(Button)`
  background-color: white;
  color: var(--primary);
  border: 1px solid var(--primary);
  
  &:hover {
    background-color: #f0f7ff;
  }
`;

const ProductCard = ({ product }) => {
  const { 
    id, 
    name, 
    shortDescription, 
    type, 
    technology, 
    image1,
    originalPrice, 
    price, 
    pixPrice,
    inStock,
    category
  } = product;

  const formatPrice = (value) => {
    return value.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    });
  };

  const handleBuyClick = () => {
    // Redireciona para a página do produto
    window.location.href = `/product/${id}`;
  };

  // Calcula o percentual de desconto
  const discountPercentage = Math.round(((originalPrice - price) / originalPrice) * 100);

  return (
    <Card>
      {discountPercentage >= 10 && (
        <PromoBadge>
          {discountPercentage}% OFF
        </PromoBadge>
      )}
      <ImageContainer>
        <StockLabel inStock={inStock}>
          {inStock ? 'EM ESTOQUE' : 'ESGOTADO'}
        </StockLabel>
        <ProductImage src={image1 || 'https://via.placeholder.com/300x300?text=Ar+Condicionado'} alt={name} />
      </ImageContainer>
      
      <Content>
        <Title to={`/product/${id}`}>{name}</Title>
        
        <Specs>
          <SpecItem>
            <SpecLabel>{shortDescription}</SpecLabel>
          </SpecItem>
          <SpecItem>
            <SpecLabel>{type}</SpecLabel>
          </SpecItem>
          <SpecItem>
            <SpecLabel>{technology}</SpecLabel>
          </SpecItem>
          <SpecItem>
            <SpecLabel>{category}</SpecLabel>
          </SpecItem>
        </Specs>
        
        <PriceContainer>
          <OriginalPrice>De: {formatPrice(originalPrice)}</OriginalPrice>
          <CurrentPrice>Por: {formatPrice(price)}</CurrentPrice>
          <PixPrice>
            <FaTags />
            À vista {formatPrice(pixPrice)} (Desconto 15% no Pix)
          </PixPrice>
          
          <ButtonsContainer>
            <BuyButton 
              onClick={handleBuyClick} 
              disabled={!inStock}
            >
              {inStock ? 'Comprar' : 'Esgotado'}
            </BuyButton>
            <DetailsButton as={Link} to={`/product/${id}`}>
              Ver detalhes
            </DetailsButton>
          </ButtonsContainer>
        </PriceContainer>
      </Content>
    </Card>
  );
};

export default ProductCard; 