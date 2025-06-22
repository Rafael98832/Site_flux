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
  const [filters, setFilters] = useState({
    capacity: capacity || '',
    type: '',
    technology: '',
    voltage: '',
    energyClass: '',
    wifi: '',
    inStock: ''
  });
  const { productsData, loading, error } = useProducts();

  // Decodifica o nome da categoria da URL
  const decodedCategoryName = categoryName?.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());

  useEffect(() => {
    if (productsData) {
      filterProducts();
    }
  }, [categoryName, capacity, filters, productsData]);

  const filterProducts = () => {
    if (!productsData) return;
    
    let filtered = productsData.products.filter(product => {
      // Filtro por categoria
      const categoryMatch = !categoryName || 
        product.category.toLowerCase().replace(/\s+/g, '-') === categoryName.toLowerCase();
      
      // Filtro por capacidade
      const capacityMatch = !filters.capacity || 
        product.capacity.toLowerCase().includes(filters.capacity.toLowerCase());
      
      // Filtro por tipo
      const typeMatch = !filters.type || product.type === filters.type;
      
      // Filtro por tecnologia
      const technologyMatch = !filters.technology || product.technology === filters.technology;
      
      // Filtro por voltagem
      const voltageMatch = !filters.voltage || product.voltage === filters.voltage;
      
      // Filtro por classe energética
      const energyMatch = !filters.energyClass || product.energyClass === filters.energyClass;
      
      // Filtro por WiFi
      const wifiMatch = !filters.wifi || product.wifi.toString() === filters.wifi;
      
      // Filtro por estoque
      const stockMatch = !filters.inStock || product.inStock.toString() === filters.inStock;

      return categoryMatch && capacityMatch && typeMatch && technologyMatch && 
             voltageMatch && energyMatch && wifiMatch && stockMatch;
    });

    setFilteredProducts(filtered);
  };

  const handleFilterChange = (filterName, value) => {
    setFilters(prev => ({
      ...prev,
      [filterName]: value
    }));
  };

  const clearFilters = () => {
    setFilters({
      capacity: capacity || '',
      type: '',
      technology: '',
      voltage: '',
      energyClass: '',
      wifi: '',
      inStock: ''
    });
  };

  // Obter valores únicos para os filtros baseados na categoria atual
  const categoryProducts = productsData ? productsData.products.filter(product => 
    !categoryName || product.category.toLowerCase().replace(/\s+/g, '-') === categoryName.toLowerCase()
  ) : [];

  const uniqueCapacities = [...new Set(categoryProducts.map(p => p.capacity))].sort();
  const uniqueTypes = [...new Set(categoryProducts.map(p => p.type))].sort();
  const uniqueTechnologies = [...new Set(categoryProducts.map(p => p.technology))].sort();
  const uniqueVoltages = [...new Set(categoryProducts.map(p => p.voltage))].sort();
  const uniqueEnergyClasses = [...new Set(categoryProducts.map(p => p.energyClass))].sort();

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
          {capacity && ` - ${capacity}`}
        </CategoryTitle>
        <CategorySubtitle>
          Encontre o ar-condicionado ideal para o seu ambiente
        </CategorySubtitle>
      </CategoryHeader>

      <ResultsInfo>
        <ResultsCount>
          {filteredProducts.length} produto{filteredProducts.length !== 1 ? 's' : ''} encontrado{filteredProducts.length !== 1 ? 's' : ''}
        </ResultsCount>
      </ResultsInfo>

      <FilterContainer>
        <FilterGroup>
          <FilterLabel>Capacidade (BTUs)</FilterLabel>
          <FilterSelect 
            value={filters.capacity} 
            onChange={(e) => handleFilterChange('capacity', e.target.value)}
          >
            <option value="">Todas as capacidades</option>
            {uniqueCapacities.map(capacity => (
              <option key={capacity} value={capacity}>{capacity}</option>
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
          <FaFilter /> Limpar Filtros
        </ClearFiltersButton>
      </FilterContainer>

      {filteredProducts.length > 0 ? (
        <ProductGrid>
          {filteredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </ProductGrid>
      ) : (
        <NoResults>
          <h3>Nenhum produto encontrado</h3>
          <p>Tente ajustar os filtros para encontrar o produto que você procura.</p>
        </NoResults>
      )}
    </CategoryContainer>
  );
};

export default Category; 