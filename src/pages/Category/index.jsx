import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import styled from 'styled-components';
import ProductCard from '../../components/ProductCard';
import { useProducts } from '../../hooks/useProducts';
import { FaFilter, FaArrowLeft } from 'react-icons/fa';

const CategoryContainer = styled.div`
  margin: 0 auto;
  padding: 20px 15px 40px;
  font-family: 'Open Sans', 'Segoe UI', Arial, sans-serif;
  max-width: 1200px;
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

const BackButton = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  color: #0066cc;
  text-decoration: none;
  font-size: 14px;
  margin-bottom: 20px;
  transition: color 0.2s;
  
  &:hover {
    color: #005bb9;
  }
`;

const CategoryHeader = styled.div`
  margin-bottom: 30px;
`;

const CategoryTitle = styled.h1`
  font-size: 28px;
  color: #333;
  margin-bottom: 10px;
  
  @media (max-width: 768px) {
    font-size: 24px;
  }
`;

const CategorySubtitle = styled.p`
  color: #666;
  font-size: 16px;
  margin-bottom: 20px;
`;

const ResultsInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  flex-wrap: wrap;
  gap: 15px;
  
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const ResultsCount = styled.span`
  color: #666;
  font-size: 14px;
`;

const FilterContainer = styled.div`
  display: flex;
  gap: 15px;
  margin-bottom: 30px;
  flex-wrap: wrap;
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 10px;
  }
`;

const FilterGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const FilterLabel = styled.label`
  font-size: 14px;
  font-weight: 600;
  color: #333;
`;

const FilterSelect = styled.select`
  padding: 10px 12px;
  border: 1px solid #ddd;
  border-radius: 8px;
  font-size: 14px;
  background-color: white;
  cursor: pointer;
  min-width: 150px;
  
  &:focus {
    outline: none;
    border-color: #0066cc;
    box-shadow: 0 0 0 2px rgba(0, 102, 204, 0.1);
  }
`;

const ClearFiltersButton = styled.button`
  padding: 10px 16px;
  background-color: #f8f9fa;
  border: 1px solid #ddd;
  border-radius: 8px;
  color: #666;
  font-size: 14px;
  cursor: pointer;
  transition: all 0.2s;
  align-self: flex-end;
  
  &:hover {
    background-color: #e9ecef;
    border-color: #bbb;
  }
`;

const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 20px;
  margin-bottom: 40px;
  
  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 15px;
  }
  
  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    gap: 15px;
  }
`;

const NoResults = styled.div`
  text-align: center;
  padding: 60px 20px;
  color: #666;
  
  h3 {
    font-size: 20px;
    margin-bottom: 10px;
    color: #333;
  }
  
  p {
    font-size: 16px;
    line-height: 1.5;
  }
`;

const Category = () => {
  const { categoryName, capacity } = useParams();
  const [filteredProducts, setFilteredProducts] = useState([]);
  const { productsData, loading, error } = useProducts();

  // Decodifica o nome da categoria da URL
  const getDisplayCategoryName = () => {
    if (categoryName === 'ar-condicionado') {
      return capacity ? `Ar-condicionados ${capacity} BTUs` : 'Ar-condicionados';
    } else if (categoryName === 'moveis') {
      return capacity === 'sofa' ? 'Sofás' : 'Móveis';
    } else {
      return categoryName?.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
    }
  };
  
  const decodedCategoryName = getDisplayCategoryName();

  useEffect(() => {
    if (!productsData) return;
    
    const filtered = productsData.products.filter(product => {
      // Filtro por tipo de produto (ar-condicionado ou móveis)
      if (categoryName === 'ar-condicionado') {
        if (product.productType !== 'Ar-condicionado') return false;
        
        // Filtro por capacidade BTU para ar-condicionados
        if (capacity) {
          const urlCapacityClean = capacity.replace(/\./g, '');
          const productCapacityClean = product.capacity.replace(/\./g, '');
          
          const urlCapacityNumbers = urlCapacityClean.match(/\d+/g);
          const productCapacityNumbers = productCapacityClean.match(/\d+/g);
          
          if (!urlCapacityNumbers || !productCapacityNumbers) return false;
          
          const urlBTUs = parseInt(urlCapacityNumbers[0]);
          const productBTUs = parseInt(productCapacityNumbers[0]);
          
          return urlBTUs === productBTUs;
        }
        return true;
      } else if (categoryName === 'moveis') {
        if (product.productType !== 'Móveis') return false;
        
        // Filtro por subcategoria de móveis (ex: sofá)
        if (capacity === 'sofa') {
          return product.category.toLowerCase() === 'sofás';
        }
        return true;
      } else {
        // Filtro por categoria específica (para compatibilidade com URLs antigas)
        return product.category.toLowerCase().replace(/\s+/g, '-') === categoryName.toLowerCase();
      }
    });

    setFilteredProducts(filtered);
  }, [categoryName, capacity, productsData]);

  if (loading) {
    return (
      <CategoryContainer>
        <div>Carregando produtos...</div>
      </CategoryContainer>
    );
  }

  if (error) {
    return (
      <CategoryContainer>
        <div>Erro ao carregar produtos: {error}</div>
      </CategoryContainer>
    );
  }

  return (
    <CategoryContainer>
      <BackButton to="/">
        <FaArrowLeft /> Voltar à página inicial
      </BackButton>

      <Breadcrumbs>
        <BreadcrumbLink to="/">Início</BreadcrumbLink>
        <Separator>/</Separator>
        <BreadcrumbLink to={`/category/${categoryName}`}>
          {decodedCategoryName}
        </BreadcrumbLink>
        {capacity && (
          <>
            <Separator>/</Separator>
            <span>{capacity}</span>
          </>
        )}
      </Breadcrumbs>

      <CategoryHeader>
        <CategoryTitle>
          {decodedCategoryName}
        </CategoryTitle>
        <CategorySubtitle>
          {categoryName === 'ar-condicionado' 
            ? 'Encontre o ar-condicionado ideal para o seu ambiente'
            : categoryName === 'moveis'
            ? 'Encontre o móvel perfeito para sua casa'
            : 'Produtos de qualidade para você'
          }
        </CategorySubtitle>
      </CategoryHeader>

      <ResultsInfo>
        <ResultsCount>
          {filteredProducts.length} produto{filteredProducts.length !== 1 ? 's' : ''} encontrado{filteredProducts.length !== 1 ? 's' : ''}
        </ResultsCount>
      </ResultsInfo>



      {filteredProducts.length > 0 ? (
        <ProductGrid>
          {filteredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </ProductGrid>
      ) : (
        <NoResults>
          <h3>Nenhum produto encontrado</h3>
          <p>Não há produtos disponíveis para esta categoria e capacidade.</p>
        </NoResults>
      )}
    </CategoryContainer>
  );
};

export default Category; 