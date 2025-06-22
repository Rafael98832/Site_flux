import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import ProductCard from '../../components/ProductCard';
import { useProducts } from '../../hooks/useProducts';
import { FaArrowLeft, FaFilter } from 'react-icons/fa';

const ProductsContainer = styled.div`
  margin: 0 auto;
  padding: 20px 15px 40px;
  font-family: 'Open Sans', 'Segoe UI', Arial, sans-serif;
  max-width: 1200px;
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

const PageHeader = styled.div`
  margin-bottom: 30px;
`;

const PageTitle = styled.h1`
  font-size: 28px;
  color: #333;
  margin-bottom: 10px;
  
  @media (max-width: 768px) {
    font-size: 24px;
  }
`;

const PageSubtitle = styled.p`
  color: #666;
  font-size: 16px;
  margin-bottom: 20px;
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

const Products = () => {
  const { productsData, loading, error } = useProducts();
  const [filters, setFilters] = useState({
    category: '',
    type: '',
    technology: '',
    voltage: '',
    energyClass: '',
    wifi: '',
    inStock: ''
  });

  if (loading) {
    return (
      <ProductsContainer>
        <div>Carregando produtos...</div>
      </ProductsContainer>
    );
  }

  if (error) {
    return (
      <ProductsContainer>
        <div>Erro ao carregar produtos: {error}</div>
      </ProductsContainer>
    );
  }

  if (!productsData) {
    return (
      <ProductsContainer>
        <div>Nenhum produto encontrado</div>
      </ProductsContainer>
    );
  }

  const { products } = productsData;

  // Filtrar produtos
  const filteredProducts = products.filter(product => {
    const categoryMatch = !filters.category || product.category === filters.category;
    const typeMatch = !filters.type || product.type === filters.type;
    const technologyMatch = !filters.technology || product.technology === filters.technology;
    const voltageMatch = !filters.voltage || product.voltage === filters.voltage;
    const energyMatch = !filters.energyClass || product.energyClass === filters.energyClass;
    const wifiMatch = !filters.wifi || product.wifi.toString() === filters.wifi;
    const stockMatch = !filters.inStock || product.inStock.toString() === filters.inStock;

    return categoryMatch && typeMatch && technologyMatch && voltageMatch && 
           energyMatch && wifiMatch && stockMatch;
  });

  // Obter valores únicos para os filtros
  const uniqueCategories = [...new Set(products.map(p => p.category))].sort();
  const uniqueTypes = [...new Set(products.map(p => p.type))].sort();
  const uniqueTechnologies = [...new Set(products.map(p => p.technology))].sort();
  const uniqueVoltages = [...new Set(products.map(p => p.voltage))].sort();
  const uniqueEnergyClasses = [...new Set(products.map(p => p.energyClass))].sort();

  const handleFilterChange = (filterName, value) => {
    setFilters(prev => ({
      ...prev,
      [filterName]: value
    }));
  };

  const clearFilters = () => {
    setFilters({
      category: '',
      type: '',
      technology: '',
      voltage: '',
      energyClass: '',
      wifi: '',
      inStock: ''
    });
  };

  return (
    <ProductsContainer>
      <BackButton to="/">
        <FaArrowLeft /> Voltar à página inicial
      </BackButton>

      <PageHeader>
        <PageTitle>Todos os Produtos</PageTitle>
        <PageSubtitle>
          Explore nossa linha completa de ar-condicionados com as melhores marcas e tecnologias
        </PageSubtitle>
      </PageHeader>

      <FilterContainer>
        <FilterGroup>
          <FilterLabel>Categoria</FilterLabel>
          <FilterSelect 
            value={filters.category} 
            onChange={(e) => handleFilterChange('category', e.target.value)}
          >
            <option value="">Todas as categorias</option>
            {uniqueCategories.map(category => (
              <option key={category} value={category}>{category}</option>
            ))}
          </FilterSelect>
        </FilterGroup>

        <FilterGroup>
          <FilterLabel>Tipo</FilterLabel>
          <FilterSelect 
            value={filters.type} 
            onChange={(e) => handleFilterChange('type', e.target.value)}
          >
            <option value="">Todos os tipos</option>
            {uniqueTypes.map(type => (
              <option key={type} value={type}>{type}</option>
            ))}
          </FilterSelect>
        </FilterGroup>

        <FilterGroup>
          <FilterLabel>Tecnologia</FilterLabel>
          <FilterSelect 
            value={filters.technology} 
            onChange={(e) => handleFilterChange('technology', e.target.value)}
          >
            <option value="">Todas as tecnologias</option>
            {uniqueTechnologies.map(tech => (
              <option key={tech} value={tech}>{tech}</option>
            ))}
          </FilterSelect>
        </FilterGroup>

        <FilterGroup>
          <FilterLabel>Voltagem</FilterLabel>
          <FilterSelect 
            value={filters.voltage} 
            onChange={(e) => handleFilterChange('voltage', e.target.value)}
          >
            <option value="">Todas as voltagens</option>
            {uniqueVoltages.map(voltage => (
              <option key={voltage} value={voltage}>{voltage}</option>
            ))}
          </FilterSelect>
        </FilterGroup>

        <FilterGroup>
          <FilterLabel>Classe Energética</FilterLabel>
          <FilterSelect 
            value={filters.energyClass} 
            onChange={(e) => handleFilterChange('energyClass', e.target.value)}
          >
            <option value="">Todas as classes</option>
            {uniqueEnergyClasses.map(energyClass => (
              <option key={energyClass} value={energyClass}>Classe {energyClass}</option>
            ))}
          </FilterSelect>
        </FilterGroup>

        <FilterGroup>
          <FilterLabel>Wi-Fi</FilterLabel>
          <FilterSelect 
            value={filters.wifi} 
            onChange={(e) => handleFilterChange('wifi', e.target.value)}
          >
            <option value="">Com ou sem Wi-Fi</option>
            <option value="true">Com Wi-Fi</option>
            <option value="false">Sem Wi-Fi</option>
          </FilterSelect>
        </FilterGroup>

        <FilterGroup>
          <FilterLabel>Disponibilidade</FilterLabel>
          <FilterSelect 
            value={filters.inStock} 
            onChange={(e) => handleFilterChange('inStock', e.target.value)}
          >
            <option value="">Todos os produtos</option>
            <option value="true">Em estoque</option>
            <option value="false">Esgotado</option>
          </FilterSelect>
        </FilterGroup>

        <ClearFiltersButton onClick={clearFilters}>
          Limpar Filtros
        </ClearFiltersButton>
      </FilterContainer>

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
          <p>Tente ajustar os filtros para encontrar produtos que atendam aos seus critérios.</p>
        </NoResults>
      )}
    </ProductsContainer>
  );
};

export default Products; 