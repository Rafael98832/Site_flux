import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import ProductCard from '../../components/ProductCard';
import { useProducts } from '../../hooks/useProducts';
import { FaArrowRight, FaShippingFast, FaLock, FaCreditCard, FaPercent, FaAward, FaTools, FaCalculator, FaStoreAlt } from 'react-icons/fa';
import bannerImage from '../../assets/banner.webp';

const HomeContainer = styled.div`
  margin: 0 auto;
  padding: 0;
  font-family: 'Open Sans', 'Segoe UI', Arial, sans-serif;
  overflow-x: hidden;
  width: 100%;
`;

const Banner = styled.div`
  width: 100%;
  margin-bottom: 50px;
  overflow: hidden;
  position: relative;
  
  @media (max-width: 768px) {
    height: 380px;
    margin-bottom: 30px;
    background: var(--gradient-blue);
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--white);
  }
  
  @media (max-width: 480px) {
    height: 320px;
    margin-bottom: 20px;
  }
`;

const BannerContent = styled.div`
  display: none;
  
  @media (max-width: 768px) {
    display: flex;
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
    align-items: center;
    justify-content: center;
    position: relative;
    z-index: 2;
  }
`;

const BannerInfo = styled.div`
  max-width: 600px;
  
  @media (max-width: 992px) {
    max-width: 70%;
  }
  
  @media (max-width: 768px) {
    max-width: 100%;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

const BannerTitle = styled.h1`
  font-size: 38px;
  line-height: 1.2;
  margin-bottom: 20px;
  font-weight: 800;
  color: var(--kabum-orange-light);
  
  @media (max-width: 768px) {
    font-size: 32px;
  }
  
  @media (max-width: 480px) {
    font-size: 26px;
    margin-bottom: 15px;
  }
`;

const BannerText = styled.p`
  font-size: 18px;
  margin-bottom: 30px;
  line-height: 1.5;
  color: white;
  opacity: 0.95;
  
  @media (max-width: 768px) {
    font-size: 16px;
    margin-bottom: 25px;
  }
  
  @media (max-width: 480px) {
    font-size: 14px;
    margin-bottom: 20px;
  }
`;

const BannerButton = styled(Link)`
  display: inline-block;
  background: var(--primary-orange);
  color: var(--white);
  padding: 14px 28px;
  border-radius: 30px;
  text-decoration: none;
  font-weight: 700;
  font-size: 16px;
  transition: var(--transition-normal);
  box-shadow: var(--shadow-lg);
  position: relative;
  z-index: 2;
  
  &:hover {
    background: var(--primary-orange-dark);
    transform: translateY(-3px);
    box-shadow: var(--shadow-xl);
  }
  
  @media (max-width: 480px) {
    padding: 12px 24px;
    font-size: 14px;
  }
`;

const BannerImage = styled.img`
  width: 100%;
  height: auto;
  max-height: 500px;
  object-fit: fill;
  object-position: center;
  display: block;
  
  @media (max-width: 768px) {
    display: none;
  }
`;

const ContentContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 15px;
  
  @media (max-width: 480px) {
    padding: 0 10px;
  }
`;

const SectionTitle = styled.h2`
  font-size: 28px;
  margin-bottom: 30px;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: var(--gray-900);
  position: relative;
  
  &:after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 0;
    width: 60px;
    height: 4px;
    background: var(--kabum-orange);
    border-radius: 2px;
  }
  
  @media (max-width: 768px) {
    font-size: 24px;
    margin-bottom: 25px;
    flex-wrap: wrap;
  }
  
  @media (max-width: 480px) {
    font-size: 22px;
    margin-bottom: 20px;
  }
`;

const SeeAllLink = styled(Link)`
  font-size: 14px;
  color: var(--kabum-blue);
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 5px;
  font-weight: 600;
  white-space: nowrap;
  transition: var(--transition-fast);
  
  &:hover {
    color: white;
    transform: translateX(5px);
  }
  
  @media (max-width: 480px) {
    font-size: 13px;
  }
`;

const CategoryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 25px;
  margin-bottom: 60px;
  
  @media (max-width: 992px) {
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
  }
  
  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 15px;
    margin-bottom: 40px;
  }
  
  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    gap: 15px;
    margin-bottom: 30px;
  }
`;

const CategoryCard = styled(Link)`
  border-radius: 10px;
  overflow: hidden;
  text-decoration: none;
  color: inherit;
  box-shadow: 0 3px 10px rgba(0,0,0,0.08);
  transition: transform 0.3s, box-shadow 0.3s;
  display: flex;
  flex-direction: column;
  background-color: white;
  height: 100%;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 20px rgba(0,0,0,0.12);
  }
`;

const CategoryImage = styled.div`
  height: 170px;
  background-color: #f7f9fb;
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid #eee;
  
  @media (max-width: 768px) {
    height: 150px;
  }
  
  @media (max-width: 480px) {
    height: 130px;
  }
`;

const CategoryContent = styled.div`
  padding: 20px;
  
  @media (max-width: 768px) {
    padding: 15px;
  }
`;

const CategoryName = styled.h3`
  margin: 0 0 10px;
  font-size: 18px;
  font-weight: 700;
  color: #0066cc;
  
  @media (max-width: 768px) {
    font-size: 16px;
    margin-bottom: 8px;
  }
`;

const CategoryDescription = styled.p`
  margin: 0;
  font-size: 14px;
  color: #666;
  line-height: 1.5;
  
  @media (max-width: 768px) {
    font-size: 13px;
    line-height: 1.4;
  }
`;

const SectionDivider = styled.div`
  margin: 60px 0;
  height: 1px;
  background: linear-gradient(to right, #f0f0f0, #ddd, #f0f0f0);
  
  @media (max-width: 768px) {
    margin: 40px 0;
  }
  
  @media (max-width: 480px) {
    margin: 30px 0;
  }
`;

const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 25px;
  margin-bottom: 40px;
  
  @media (max-width: 992px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
  }
  
  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    gap: 15px;
    margin-bottom: 30px;
  }
`;

const BenefitsContainer = styled.div`
  background-color: #f7f9fb;
  padding: 60px 0;
  margin: 60px 0;
  border-top: 1px solid #eee;
  border-bottom: 1px solid #eee;
  
  @media (max-width: 768px) {
    padding: 40px 0;
    margin: 40px 0;
  }
  
  @media (max-width: 480px) {
    padding: 30px 0;
    margin: 30px 0;
  }
`;

const BenefitSection = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 15px;
  
  @media (max-width: 480px) {
    padding: 0 10px;
  }
`;

const BenefitTitle = styled.h2`
  font-size: 28px;
  margin-bottom: 40px;
  font-weight: 700;
  text-align: center;
  color: #333;
  
  &:after {
    content: '';
    display: block;
    width: 60px;
    height: 3px;
    background-color: #0066cc;
    margin: 15px auto 0;
  }
  
  @media (max-width: 768px) {
    font-size: 24px;
    margin-bottom: 30px;
  }
  
  @media (max-width: 480px) {
    font-size: 22px;
    margin-bottom: 25px;
  }
`;

const BenefitGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 30px;
  
  @media (max-width: 992px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 25px 20px;
  }
  
  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    gap: 20px;
  }
`;

const BenefitCard = styled.div`
  background-color: white;
  border-radius: 10px;
  padding: 30px 20px;
  text-align: center;
  box-shadow: 0 5px 15px rgba(0,0,0,0.05);
  transition: transform 0.3s, box-shadow 0.3s;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 25px rgba(0,0,0,0.1);
  }
  
  @media (max-width: 768px) {
    padding: 25px 15px;
  }
`;

const BenefitIcon = styled.div`
  width: 70px;
  height: 70px;
  margin: 0 auto 20px;
  background-color: #eaf4ff;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #0066cc;
  font-size: 28px;
  
  @media (max-width: 768px) {
    width: 60px;
    height: 60px;
    font-size: 24px;
    margin-bottom: 15px;
  }
`;

const BenefitCardTitle = styled.h3`
  font-size: 18px;
  margin: 0 0 15px;
  font-weight: 700;
  color: #333;
  
  @media (max-width: 768px) {
    font-size: 16px;
    margin-bottom: 10px;
  }
`;

const BenefitText = styled.p`
  font-size: 14px;
  color: #666;
  margin: 0;
  line-height: 1.5;
  
  @media (max-width: 768px) {
    font-size: 13px;
    line-height: 1.4;
  }
`;

const Home = () => {
  const { productsData, loading, error } = useProducts();
  
  if (loading) return <div>Carregando produtos...</div>;
  if (error) return <div>Erro ao carregar produtos: {error}</div>;
  if (!productsData) return <div>Nenhum produto encontrado</div>;
  
  const { products } = productsData;
  
  // Separar produtos por tipo
  const sofas = products.filter(product => product.productType === 'Móveis' && product.category === 'Sofás');
  const airConditioners = products.filter(product => product.productType === 'Ar-condicionado');
  
  // Produtos em destaque: 2 sofás + 1 ar-condicionado
  const featuredSofas = sofas.slice(0, 2);
  const featuredAirConditioner = airConditioners.slice(0, 1);
  const featuredProducts = [...featuredSofas, ...featuredAirConditioner];
  
  // Ofertas: priorizar sofás com maior desconto
  const sofasOnSale = [...sofas].sort((a, b) => 
    ((b.originalPrice - b.price) / b.originalPrice) - ((a.originalPrice - a.price) / a.originalPrice)
  ).slice(0, 2);
  
  const airConditionersOnSale = [...airConditioners].sort((a, b) => 
    ((b.originalPrice - b.price) / b.originalPrice) - ((a.originalPrice - a.price) / a.originalPrice)
  ).slice(0, 1);
  
  const onSaleProducts = [...sofasOnSale, ...airConditionersOnSale];
  
  return (
    <HomeContainer>
      <Banner>
        <BannerContent>
          <BannerInfo>
            <BannerTitle>SOFÁS E MÓVEIS com 15% de Desconto à Vista no PIX</BannerTitle>
            <BannerText>
              Transforme sua casa com sofás de qualidade superior e móveis que combinam conforto, estilo e durabilidade. Entrega rápida para todo o Brasil.
            </BannerText>
            <BannerButton to="/category/moveis/sofa">Ver Sofás</BannerButton>
          </BannerInfo>
        </BannerContent>
        <BannerImage src={bannerImage} alt="Banner Sofás e Móveis" />
      </Banner>
      
      <ContentContainer>
 
       
        <SectionTitle>
          Produtos em Destaque
          <SeeAllLink to="/products">
            Ver todos <FaArrowRight />
          </SeeAllLink>
        </SectionTitle>
        <ProductGrid>
          {featuredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </ProductGrid>
        
        <SectionDivider />
        
        <SectionTitle>
          Sofás em Destaque
          <SeeAllLink to="/category/moveis/sofa">
            Ver todos os sofás <FaArrowRight />
          </SeeAllLink>
        </SectionTitle>
        <ProductGrid>
          {sofas.slice(0, 3).map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </ProductGrid>
        
        <SectionDivider />
        
        <SectionTitle>
          Ofertas Imperdíveis
        </SectionTitle>
        <ProductGrid>
          {onSaleProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </ProductGrid>
      </ContentContainer>
      
      <BenefitsContainer>
        <BenefitSection>
          <BenefitTitle>Por que comprar conosco?</BenefitTitle>
          <BenefitGrid>
            <BenefitCard>
              <BenefitIcon>
                <FaAward />
              </BenefitIcon>
              <BenefitCardTitle>Garantia de Qualidade</BenefitCardTitle>
              <BenefitText>Produtos com garantia estendida e equipe especializada para instalação e montagem.</BenefitText>
            </BenefitCard>
            
            <BenefitCard>
              <BenefitIcon>
                <FaTools />
              </BenefitIcon>
              <BenefitCardTitle>Assistência Técnica</BenefitCardTitle>
              <BenefitText>Equipe especializada para manutenção de ar-condicionados e suporte pós-venda para móveis. Atendimento em todo o Brasil.</BenefitText>
            </BenefitCard>
            
            <BenefitCard>
              <BenefitIcon>
                <FaCalculator />
              </BenefitIcon>
              <BenefitCardTitle>Consultoria Especializada</BenefitCardTitle>
              <BenefitText>Ajudamos você a escolher o produto ideal para seu espaço, seja ar-condicionado ou móveis.</BenefitText>
            </BenefitCard>
            
            <BenefitCard>
              <BenefitIcon>
                <FaStoreAlt />
              </BenefitIcon>
              <BenefitCardTitle>Lojas Físicas</BenefitCardTitle>
              <BenefitText>Contamos com uma sólida rede de lojas físicas em todo o Brasil. Venha nos visitar!</BenefitText>
            </BenefitCard>
          </BenefitGrid>
        </BenefitSection>
      </BenefitsContainer>
      
      <ContentContainer>
        <SectionTitle>
          Vantagens de Comprar na DISTRIBUIDORA MARKETPLACE
        </SectionTitle>
        <CategoryGrid>
          <BenefitCard>
            <BenefitIcon>
              <FaShippingFast />
            </BenefitIcon>
            <BenefitCardTitle>Entrega em Todo Brasil</BenefitCardTitle>
            <BenefitText>Despachamos para todos os estados brasileiros com rapidez e segurança.</BenefitText>
          </BenefitCard>
          
          <BenefitCard>
            <BenefitIcon>
              <FaLock />
            </BenefitIcon>
            <BenefitCardTitle>Loja 100% Segura</BenefitCardTitle>
            <BenefitText>Site protegido e auditado. Compre com tranquilidade total.</BenefitText>
          </BenefitCard>
          
          <BenefitCard>
            <BenefitIcon>
              <FaCreditCard />
            </BenefitIcon>
            <BenefitCardTitle>Parcele em 10x sem juros</BenefitCardTitle>
            <BenefitText>Pagamento facilitado com parcelamento sem juros nos principais cartões.</BenefitText>
          </BenefitCard>
          
          <BenefitCard>
            <BenefitIcon>
              <FaPercent />
            </BenefitIcon>
            <BenefitCardTitle>15% de desconto no PIX</BenefitCardTitle>
            <BenefitText>Economize ainda mais pagando à vista pelo PIX. Benefício exclusivo!</BenefitText>
          </BenefitCard>
        </CategoryGrid>
      </ContentContainer>
    </HomeContainer>
  );
};

export default Home; 