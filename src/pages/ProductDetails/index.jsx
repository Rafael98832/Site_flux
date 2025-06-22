import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import styled from 'styled-components';
import { FaHeart, FaShoppingCart, FaTruck, FaShieldAlt, FaCheck, FaRegCreditCard, FaBarcode, FaMoneyBillWave, FaTags, FaArrowLeft, FaClipboard, FaTools, FaExclamationTriangle } from 'react-icons/fa';
import { useProducts } from '../../hooks/useProducts';

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px 15px 40px;
  font-family: 'Open Sans', 'Segoe UI', Arial, sans-serif;
  color: #333;
  
  @media (max-width: 768px) {
    padding: 15px 15px 30px;
  }
  
  @media (max-width: 480px) {
    padding: 10px 10px 20px;
  }
`;

const Breadcrumbs = styled.div`
  margin-bottom: 25px;
  font-size: 13px;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  
  @media (max-width: 768px) {
    margin-bottom: 20px;
    font-size: 12px;
  }
  
  @media (max-width: 480px) {
    margin-bottom: 15px;
    font-size: 11px;
  }
`;

const BreadcrumbLink = styled(Link)`
  color: #666;
  text-decoration: none;
  transition: color 0.2s;
  
  &:hover {
    color: #0066cc;
    text-decoration: underline;
  }
`;

const Separator = styled.span`
  margin: 0 8px;
  color: #ccc;
`;

const ProductContainer = styled.div`
  display: grid;
  grid-template-columns: 0.9fr 1.1fr;
  gap: 30px;
  margin-bottom: 30px;
  
  @media (max-width: 992px) {
    grid-template-columns: 1fr;
    gap: 25px;
    margin-bottom: 25px;
  }
  
  @media (max-width: 768px) {
    gap: 20px;
    margin-bottom: 20px;
  }
  
  @media (max-width: 480px) {
    gap: 15px;
    margin-bottom: 15px;
  }
`;

const ImageSection = styled.div`
  position: relative;
`;

const MainImage = styled.div`
  width: 100%;
  height: 380px;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.05);
  margin-bottom: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  background-color: #f9f9f9;
  border: 1px solid #eee;
  
  img {
    max-width: 90%;
    max-height: 90%;
    object-fit: contain;
  }
  
  @media (max-width: 992px) {
    height: 350px;
  }
  
  @media (max-width: 768px) {
    height: 300px;
    margin-bottom: 12px;
  }
  
  @media (max-width: 480px) {
    height: 250px;
    margin-bottom: 10px;
  }
`;

const ThumbnailContainer = styled.div`
  display: flex;
  gap: 12px;
  margin-bottom: 75px;
  justify-content: flex-start;
  flex-wrap: wrap;
  
  @media (max-width: 768px) {
    gap: 10px;
    margin-bottom: 15px;
    justify-content: center;
  }
  
  @media (max-width: 480px) {
    gap: 8px;
    margin-bottom: 12px;
  }
`;

const Thumbnail = styled.div`
  width: 90px;
  height: 90px;
  border-radius: 8px;
  cursor: pointer;
  border: 2px solid ${props => props.selected ? '#0066cc' : '#eee'};
  padding: 5px;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  transition: all 0.2s;
  
  img {
    max-width: 100%;
    max-height: 100%;
    object-fit: contain;
  }
  
  &:hover {
    border-color: ${props => props.selected ? '#0066cc' : '#bbb'};
    transform: translateY(-3px);
    box-shadow: 0 3px 10px rgba(0,0,0,0.08);
  }
  
  @media (max-width: 768px) {
    width: 70px;
    height: 70px;
  }
  
  @media (max-width: 480px) {
    width: 60px;
    height: 60px;
  }
`;

const StockBadge = styled.div`
  position: absolute;
  top: 20px;
  left: 20px;
  background-color: ${props => props.inStock ? '#4caf50' : '#f44336'};
  color: white;
  padding: 8px 16px;
  border-radius: 30px;
  font-size: 12px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  z-index: 2;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
  
  @media (max-width: 768px) {
    top: 15px;
    left: 15px;
    padding: 6px 12px;
    font-size: 11px;
  }
  
  @media (max-width: 480px) {
    top: 10px;
    left: 10px;
    padding: 5px 10px;
    font-size: 10px;
  }
`;

const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const ProductTitle = styled.h1`
  font-size: 26px;
  margin: 0 0 15px;
  font-weight: 700;
  color: #333;
  line-height: 1.3;
  
  @media (max-width: 768px) {
    font-size: 22px;
    margin-bottom: 12px;
  }
  
  @media (max-width: 480px) {
    font-size: 20px;
    margin-bottom: 10px;
  }
`;

const ShortDescription = styled.div`
  font-size: 15px;
  color: #666;
  margin-bottom: 20px;
  line-height: 1.5;
  padding-bottom: 15px;
  border-bottom: 1px solid #eee;
  
  @media (max-width: 768px) {
    font-size: 14px;
    margin-bottom: 15px;
    padding-bottom: 12px;
  }
`;

const Specifications = styled.div`
  margin-bottom: 25px;
`;

const SpecTitle = styled.h3`
  font-size: 17px;
  margin: 0 0 15px;
  font-weight: 700;
  color: #222;
  position: relative;
  padding-bottom: 8px;
  color: white;
  
  &:after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 40px;
    height: 3px;
    background-color: #0066cc;
  }
  
  @media (max-width: 768px) {
    font-size: 16px;
    margin-bottom: 12px;
  }
`;

const SpecList = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 12px 20px;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 10px;
  }
`;

const SpecItem = styled.div`
  display: flex;
  align-items: center;
  font-size: 14px;
  color: #555;
  
  @media (max-width: 768px) {
    font-size: 13px;
  }
`;

const SpecIcon = styled.span`
  color: #0066cc;
  margin-right: 8px;
  display: flex;
  align-items: center;
`;

const PriceSection = styled.div`
  margin-bottom: 25px;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 10px;
  border: 1px solid #eee;
`;

const OriginalPrice = styled.div`
  font-size: 15px;
  color: #999;
  text-decoration: line-through;
  margin-bottom: 5px;
  display: flex;
  align-items: center;
  gap: 5px;
`;

const CurrentPrice = styled.div`
  font-size: 28px;
  font-weight: 800;
  color: #333;
  margin-bottom: 8px;
  
  @media (max-width: 768px) {
    font-size: 24px;
  }
`;

const InstallmentPrice = styled.div`
  font-size: 15px;
  color: #555;
  margin-bottom: 12px;
  font-weight: 500;
  
  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

const PixPrice = styled.div`
  font-size: 17px;
  color: #28a745;
  font-weight: 700;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  gap: 10px;
  background-color: #f0fff4;
  padding: 10px 15px;
  border-radius: 8px;
  border-left: 4px solid #28a745;
  
  @media (max-width: 768px) {
    font-size: 15px;
    padding: 8px 12px;
  }
`;

const ButtonsContainer = styled.div`
  display: flex;
  gap: 12px;
  margin-bottom: 0;
  
  @media (max-width: 576px) {
    flex-direction: column;
    gap: 10px;
  }
`;

const Button = styled.button`
  padding: 14px 20px;
  border-radius: 40px;
  font-weight: 700;
  font-size: 15px;
  cursor: pointer;
  transition: all 0.3s;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  
  @media (max-width: 768px) {
    padding: 12px 18px;
    font-size: 14px;
  }
`;

const BuyButton = styled(Button)`
  background-color: #0066cc;
  color: white;
  border: none;
  flex-grow: 1;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  
  &:hover {
    background-color: #005bb9;
    transform: translateY(-3px);
    box-shadow: 0 5px 15px rgba(0,102,204,0.3);
  }
  
  &:disabled {
    background-color: #cccccc;
    cursor: not-allowed;
    transform: none;
    box-shadow: none;
  }
`;

const ContactButton = styled(Button)`
  background-color: #28a745;
  color: white;
  border: none;
  flex-grow: 1;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  
  &:hover {
    background-color: #218838;
    transform: translateY(-3px);
    box-shadow: 0 5px 15px rgba(40, 167, 69, 0.3);
  }
`;

const WishlistButton = styled(Button)`
  background-color: white;
  color: #666;
  border: 1px solid #ddd;
  padding: 15px;
  
  &:hover {
    background-color: #f5f5f5;
    color: #ff6b6b;
    border-color: #ff6b6b;
  }
`;

const PaymentMethods = styled.div`
  margin-bottom: 20px;
`;

const MethodsList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;

const PaymentMethod = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  background-color: white;
  border: 1px solid #eee;
  padding: 10px 15px;
  border-radius: 8px;
  font-size: 13px;
  font-weight: 500;
  transition: all 0.2s;
  
  &:hover {
    box-shadow: 0 3px 8px rgba(0,0,0,0.05);
    transform: translateY(-2px);
  }
  
  svg {
    color: #0066cc;
    font-size: 16px;
  }
`;

const DeliveryInfo = styled.div`
  margin-bottom: 20px;
  background-color: white;
  border: 1px solid #eee;
  border-radius: 10px;
  padding: 15px;
`;

const DeliveryTitle = styled.h3`
  font-size: 15px;
  margin: 0 0 10px;
  font-weight: 700;
  display: flex;
  align-items: center;
  gap: 8px;
  color: #333;
  
  svg {
    color: #0066cc;
  }
`;

const DeliveryText = styled.p`
  margin: 0 0 5px;
  font-size: 13px;
  color: #666;
  line-height: 1.5;
`;

const TabsSection = styled.div`
  margin-bottom: 40px;
`;

const TabHeaders = styled.div`
  display: flex;
  border-bottom: 1px solid #ddd;
  margin-bottom: 20px;
  flex-wrap: wrap;
`;

const TabHeader = styled.button`
  padding: 12px 20px;
  background-color: transparent;
  border: none;
  border-bottom: 3px solid ${props => props.active ? '#0066cc' : 'transparent'};
  color: ${props => props.active ? '#0066cc' : '#666'};
  font-weight: ${props => props.active ? 700 : 500};
  cursor: pointer;
  transition: all 0.2s;
  font-size: 14px;
  
  &:hover {
    color: #0066cc;
  }
`;

const TabContent = styled.div`
  font-size: 14px;
  line-height: 1.6;
  color: #555;
  
  p {
    margin-bottom: 12px;
  }
  
  strong {
    color: #333;
  }
  
  ul {
    margin: 12px 0;
    padding-left: 20px;
    
    li {
      margin-bottom: 6px;
    }
  }
`;

const RelatedProductsSection = styled.div`
  margin-bottom: 40px;
  background-color: #f7f9fb;
  padding: 30px 0;
  border-top: 1px solid #eee;
  border-bottom: 1px solid #eee;
`;

const RelatedContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 15px;
`;

const RelatedTitle = styled.h2`
  font-size: 24px;
  margin-bottom: 25px;
  font-weight: 700;
  position: relative;
  padding-bottom: 12px;
  
  &:after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 50px;
    height: 3px;
    background-color: #0066cc;
  }
  
  @media (max-width: 768px) {
    font-size: 20px;
    margin-bottom: 20px;
    padding-bottom: 10px;
  }
`;

const RelatedGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  
  @media (max-width: 992px) {
    grid-template-columns: repeat(3, 1fr);
  }
  
  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 15px;
  }
  
  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    gap: 12px;
  }
`;

const RelatedCard = styled(Link)`
  text-decoration: none;
  color: inherit;
  border: 1px solid #eee;
  border-radius: 10px;
  overflow: hidden;
  transition: transform 0.3s, box-shadow 0.3s;
  background-color: white;
  display: flex;
  flex-direction: column;
  height: 100%;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 15px rgba(0,0,0,0.1);
  }
`;

const RelatedImage = styled.div`
  width: 100%;
  height: 160px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f9f9f9;
  border-bottom: 1px solid #eee;
  padding: 15px;
  
  img {
    max-width: 90%;
    max-height: 90%;
    object-fit: contain;
  }
  
  @media (max-width: 768px) {
    height: 140px;
  }
`;

const RelatedContent = styled.div`
  padding: 15px;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

const RelatedName = styled.h3`
  font-size: 14px;
  margin: 0 0 10px;
  color: #333;
  font-weight: 600;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  height: 40px;
  line-height: 1.4;
  
  &:hover {
    color: #0066cc;
  }
  
  @media (max-width: 768px) {
    font-size: 13px;
    margin: 0 0 8px;
    height: 36px;
  }
`;

const RelatedPrice = styled.div`
  font-size: 16px;
  font-weight: 700;
  color: #333;
  margin-top: auto;
  
  @media (max-width: 768px) {
    font-size: 15px;
  }
`;

const StockAlert = styled.div`
  background-color: ${props => props.inStock ? '#e8f5e9' : '#ffebee'};
  border-left: 4px solid ${props => props.inStock ? '#4caf50' : '#f44336'};
  padding: 12px 15px;
  margin: 0 0 20px;
  font-size: 14px;
  color: ${props => props.inStock ? '#2e7d32' : '#c62828'};
  display: flex;
  align-items: center;
  gap: 10px;
  border-radius: 4px;
  
  svg {
    font-size: 18px;
  }
  
  @media (max-width: 768px) {
    font-size: 13px;
    padding: 10px 12px;
    margin-bottom: 15px;
    
    svg {
      font-size: 16px;
    }
  }
`;

const BackToProducts = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  color: #0066cc;
  font-size: 13px;
  text-decoration: none;
  margin-bottom: 15px;
  font-weight: 500;
  transition: all 0.3s ease;
  
  &:hover {
    color: #005bb9;
    transform: translateX(-3px);
    text-decoration: none;
    
    svg {
      transform: translateX(-2px);
    }
  }
  
  svg {
    transition: transform 0.3s ease;
  }
  
  @media (max-width: 768px) {
    font-size: 12px;
    margin-bottom: 12px;
  }
`;

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('description');
  const [relatedProducts, setRelatedProducts] = useState([]);
  const [selectedImage, setSelectedImage] = useState(0);
  const { productsData, loading: dataLoading, error } = useProducts();

  useEffect(() => {
    if (!dataLoading && productsData) {
      // Simula carregamento do produto
      const productId = parseInt(id);
      const foundProduct = productsData.products.find(p => p.id === productId);
      
      if (foundProduct) {
        setProduct(foundProduct);
        
        // Filtra produtos relacionados da mesma categoria
        const related = productsData.products
          .filter(p => p.category === foundProduct.category && p.id !== productId)
          .slice(0, 4);
        
        setRelatedProducts(related);
      }
      
      setLoading(false);
    }
  }, [id, dataLoading, productsData]);

  if (dataLoading || loading) {
    return (
      <Container>
        <div>Carregando...</div>
      </Container>
    );
  }

  if (error) {
    return (
      <Container>
        <div>Erro ao carregar dados: {error}</div>
      </Container>
    );
  }

  if (!product) {
    return (
      <Container>
        <div>Produto não encontrado</div>
      </Container>
    );
  }

  const {
    name,
    shortDescription,
    description,
    type,
    technology,
    voltage,
    wifi,
    energyClass,
    originalPrice,
    price,
    pixPrice,
    image1,
    image2,
    image3,
    image4,
    category,
    capacity,
    inStock,
    checkoutLink
  } = product;

  const formatPrice = (value) => {
    return value.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    });
  };

  // Calcula o percentual de desconto
  const discountPercentage = Math.round(((originalPrice - price) / originalPrice) * 100);

  // Função para lidar com o clique no botão de comprar
  const handleBuyClick = () => {
    if (checkoutLink) {
      window.open(checkoutLink, '_blank');
    }
  };

  // Função para lidar com o clique no botão de contato
  const handleContactClick = () => {
    // Link que será definido posteriormente
    const contactLink = `https://wa.me/5511975513198?text=Olá,%20tenho%20interesse%20no%20produto%20%${name}` ;
    window.open(contactLink, '_blank');
  };

  // Cria array de imagens baseado nas propriedades image1, image2, image3, image4
  const productImages = [
    image1 || 'https://via.placeholder.com/500x500?text=Ar+Condicionado',
    image2 || 'https://via.placeholder.com/500x500?text=Vista+Lateral',
    image3 || 'https://via.placeholder.com/500x500?text=Vista+Traseira',
    image4 || 'https://via.placeholder.com/500x500?text=Vista+Detalhes'
  ].filter(img => img); // Remove imagens vazias

  return (
    <Container>
      <BackToProducts to="/">
        <FaArrowLeft /> Voltar aos produtos
      </BackToProducts>
      
      <Breadcrumbs>
        <BreadcrumbLink to="/">Início</BreadcrumbLink>
        <Separator>/</Separator>
        <BreadcrumbLink to={`/category/${category.toLowerCase().replace(/\s+/g, '-')}`}>
          {category}
        </BreadcrumbLink>
        <Separator>/</Separator>
        <span>{name}</span>
      </Breadcrumbs>
      
      <ProductContainer>
        <ImageSection>
          <StockBadge inStock={inStock}>
            {inStock ? 'DISPONÍVEL' : 'ESGOTADO'}
          </StockBadge>
          <MainImage>
            <img src={productImages[selectedImage]} alt={name} />
          </MainImage>
          <ThumbnailContainer>
            {productImages.map((img, index) => (
              <Thumbnail 
                key={index} 
                selected={selectedImage === index}
                onClick={() => setSelectedImage(index)}
              >
                <img src={img} alt={`Visualização ${index + 1}`} />
              </Thumbnail>
            ))}
          </ThumbnailContainer> 
         <DeliveryInfo>
            <DeliveryTitle>
              <FaTruck /> Informações de Entrega
            </DeliveryTitle>
            <DeliveryText>
              Entregamos para todo o Brasil. O prazo de entrega varia de acordo com a região.
              Consulte o prazo estimado no cálculo de frete abaixo.
            </DeliveryText>
          </DeliveryInfo>

          <DeliveryInfo>
            <DeliveryTitle>
              <FaShieldAlt /> Garantia
            </DeliveryTitle>
            <DeliveryText>
              Este produto possui garantia de 12 meses (3 meses de garantia legal e 9 meses de garantia especial oferecida pelo fabricante).
            </DeliveryText>
          </DeliveryInfo>
        </ImageSection>
        
        <ProductInfo>
          <ProductTitle>{name}</ProductTitle>
          <ShortDescription>{shortDescription}</ShortDescription>
          
          <StockAlert inStock={inStock}>
            {inStock ? (
              <>
                <FaCheck /> Produto em estoque. Entrega em até 7 dias úteis.
              </>
            ) : (
              <>
                <FaExclamationTriangle /> Produto esgotado temporariamente.
              </>
            )}
          </StockAlert>
          
          <Specifications>
            <SpecTitle>Especificações Técnicas</SpecTitle>
            <SpecList>
              <SpecItem>
                <SpecIcon><FaCheck /></SpecIcon>
                <span>Tipo: {type}</span>
              </SpecItem>
              <SpecItem>
                <SpecIcon><FaCheck /></SpecIcon>
                <span>Tecnologia: {technology}</span>
              </SpecItem>
              <SpecItem>
                <SpecIcon><FaCheck /></SpecIcon>
                <span>Voltagem: {voltage}</span>
              </SpecItem>
              <SpecItem>
                <SpecIcon><FaCheck /></SpecIcon>
                <span>Wi-Fi: {wifi ? 'Sim' : 'Não'}</span>
              </SpecItem>
              <SpecItem>
                <SpecIcon><FaCheck /></SpecIcon>
                <span>Classificação: {energyClass}</span>
              </SpecItem>
              <SpecItem>
                <SpecIcon><FaCheck /></SpecIcon>
                <span>Capacidade: {capacity}</span>
              </SpecItem>
            </SpecList>
          </Specifications>
          
          <PriceSection>
            <OriginalPrice>
              De: {formatPrice(originalPrice)} 
              {discountPercentage >= 10 && (
                <span style={{
                  backgroundColor: '#ff6b6b', 
                  color: 'white', 
                  padding: '2px 8px', 
                  borderRadius: '4px', 
                  fontSize: '12px',
                  marginLeft: '10px',
                  fontWeight: 'bold'
                }}>
                  {discountPercentage}% OFF
                </span>
              )}
            </OriginalPrice>
            <CurrentPrice>Por: {formatPrice(price)}</CurrentPrice>
            <InstallmentPrice>ou 10x de {formatPrice(price/10)} sem juros no cartão</InstallmentPrice>
            <PixPrice>
              <FaMoneyBillWave size={20} />
              À vista {formatPrice(pixPrice)} (Desconto 15% no Pix)
            </PixPrice>
            
            <ButtonsContainer>
              {inStock ? (
                checkoutLink ? (
                  <BuyButton onClick={handleBuyClick} style={{width: '100%'}}>
                    <FaShoppingCart />
                    Comprar agora
                  </BuyButton>
                ) : (
                  <ContactButton onClick={handleContactClick} style={{width: '100%'}}>
                    <FaShoppingCart />
                    Falar com vendedor
                  </ContactButton>
                )
              ) : (
                <BuyButton disabled style={{width: '100%'}}>
                  <FaShoppingCart />
                  Produto Esgotado
                </BuyButton>
              )}
            </ButtonsContainer>
          </PriceSection>
          
          <PaymentMethods>
            <SpecTitle>Formas de Pagamento</SpecTitle>
            <MethodsList>
              <PaymentMethod>
                <FaRegCreditCard />
                <span>Cartão de Crédito</span>
              </PaymentMethod>
              <PaymentMethod>
                <FaBarcode />
                <span>Boleto Bancário</span>
              </PaymentMethod>
              <PaymentMethod>
                <FaMoneyBillWave />
                <span>PIX</span>
              </PaymentMethod>
            </MethodsList>
          </PaymentMethods>
          

          

        </ProductInfo>
      </ProductContainer>
      
      <TabsSection>
        <TabHeaders>
          <TabHeader 
            active={activeTab === 'description'} 
            onClick={() => setActiveTab('description')}
          >
            Descrição
          </TabHeader>
          <TabHeader 
            active={activeTab === 'specifications'} 
            onClick={() => setActiveTab('specifications')}
          >
            Especificações Técnicas
          </TabHeader>
          <TabHeader 
            active={activeTab === 'warranty'} 
            onClick={() => setActiveTab('warranty')}
          >
            Garantia
          </TabHeader>
        </TabHeaders>
        
        <TabContent>
          {activeTab === 'description' && (
            <div>
              <p>{description}</p>
              <p>O ar-condicionado é um equipamento eletroeletrônico utilizado para climatizar ambientes, proporcionando conforto térmico aos usuários. Este aparelho possui a capacidade de resfriar, ventilar, desumidificar e, em alguns modelos, também aquecer o ambiente.</p>
              <p>Além de controlar a temperatura, o ar-condicionado também melhora a qualidade do ar interior, pois filtra partículas de poeira, pólen e outros alérgenos, contribuindo para um ambiente mais saudável.</p>
            </div>
          )}
          
          {activeTab === 'specifications' && (
            <div>
              <p><strong>Modelo:</strong> {name}</p>
              <p><strong>Capacidade de Refrigeração:</strong> {capacity}</p>
              <p><strong>Ciclo:</strong> {type}</p>
              <p><strong>Tecnologia:</strong> {technology}</p>
              <p><strong>Voltagem:</strong> {voltage}</p>
              <p><strong>Classificação Energética:</strong> {energyClass}</p>
              <p><strong>Conectividade Wi-Fi:</strong> {wifi ? 'Sim' : 'Não'}</p>
            </div>
          )}
          
          {activeTab === 'warranty' && (
            <div>
              <p>Este produto possui garantia de 12 meses (3 meses de garantia legal e 9 meses de garantia especial oferecida pelo fabricante).</p>
              <p>A garantia abrange defeitos de fabricação e vícios ocultos. Não estão cobertos pela garantia:</p>
              <ul>
                <li>Danos causados por instalação inadequada;</li>
                <li>Danos causados por uso indevido do produto;</li>
                <li>Oxidação ou corrosão decorrente da instalação em ambientes agressivos;</li>
                <li>Peças sujeitas ao desgaste natural;</li>
                <li>Danos causados por variação de tensão da rede elétrica;</li>
                <li>Problemas decorrentes de falta de limpeza e manutenção periódica.</li>
              </ul>
              <p>Para acionar a garantia, entre em contato com nossa central de atendimento.</p>
            </div>
          )}
        </TabContent>
      </TabsSection>
      
      {relatedProducts.length > 0 && (
        <RelatedProductsSection>
          <RelatedContainer>
            <RelatedTitle>Produtos Relacionados</RelatedTitle>
            <RelatedGrid>
              {relatedProducts.map(relatedProduct => (
                <RelatedCard key={relatedProduct.id} to={`/product/${relatedProduct.id}`}>
                  <RelatedImage>
                    <img 
                      src={relatedProduct.image1 || 'https://via.placeholder.com/150x150?text=Ar+Condicionado'} 
                      alt={relatedProduct.name} 
                    />
                  </RelatedImage>
                  <RelatedContent>
                    <RelatedName>{relatedProduct.name}</RelatedName>
                    <RelatedPrice>{formatPrice(relatedProduct.price)}</RelatedPrice>
                  </RelatedContent>
                </RelatedCard>
              ))}
            </RelatedGrid>
          </RelatedContainer>
        </RelatedProductsSection>
      )}
    </Container>
  );
};

export default ProductDetails; 