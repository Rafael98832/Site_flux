import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FaUser, FaShoppingCart, FaSearch, FaPhone, FaHeart, FaBars, FaTimes, FaChevronDown } from 'react-icons/fa';


const HeaderContainer = styled.header`
  font-family: 'Open Sans', 'Segoe UI', Arial, sans-serif;
  box-shadow: 0 2px 5px rgba(0,0,0,0.05);
  width: 100%;
`;




const MainHeader = styled.div`
  padding: 10px 0;
  
  background:rgb(255, 102, 0);
  box-shadow: var(--shadow-md);
  border-bottom: 1px solid var(--gray-200);
  position: relative;
`;

const MainContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 15px;
  
  @media (max-width: 992px) {
    gap: 20px;
  }
  
  @media (max-width: 768px) {
    flex-wrap: wrap;
    justify-content: center;
  }
`;

const Logo = styled(Link)`
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: 28px;
  font-weight: 800;
  color: #f3f3f3;
  text-decoration: none;
  letter-spacing: -0.5px;
  transition: var(--transition-fast);
  
  &:hover {
    color: white;
    transform: scale(1.02);
  }
  
  @media (max-width: 480px) {
    font-size: 16px;
  }
`;

const LogoImage = styled.img`
  height: 60px;
  width: auto;
  object-fit: contain;
  
  @media (max-width: 480px) {
    height: 30px;
  }
`;

const SearchBar = styled.div`
  flex-grow: 1;
  margin: 0 50px;
  position: relative;
  max-width: 600px;
  
  @media (max-width: 992px) {
    margin: 0 20px;
  }
  
  @media (max-width: 768px) {
    order: 3;
    width: 100%;
    max-width: 100%;
    margin: 15px 0 0;
  }
`;

const SearchInput = styled.input`
  width: 100%;
  padding: 12px 50px 12px 20px;
  border-radius: 40px;
  border: 2px solid var(--gray-300);
  font-size: 14px;
  background: var(--white);
  box-shadow: var(--shadow-sm);
  transition: var(--transition-normal);
  
  &:focus {
    outline: none;
    border-color: var(--kabum-orange);
    box-shadow: 0 0 0 3px rgba(255, 102, 0, 0.1), var(--shadow-md);
    background: var(--white);
  }
  
  &::placeholder {
    color: var(--gray-400);
  }
`;

const SearchButton = styled.button`
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  background: var(--kabum-orange);
  border: none;
  width: 35px;
  height: 35px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: var(--white);
  transition: var(--transition-fast);
  box-shadow: var(--shadow-sm);
  
  &:hover {
    background: white;
    color: var(--kabum-orange);
    transform: translateY(-50%) scale(1.05);
    box-shadow: var(--shadow-md);
  }
`;

const HeaderIcons = styled.div`
  display: flex;
  gap: 25px;
  
  @media (max-width: 768px) {
    gap: 20px;
  }
  
  @media (max-width: 480px) {
    gap: 15px;
  }
`;

const IconItem = styled(Link)`
  color: #444;
  text-decoration: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 12px;
  position: relative;
  
  svg {
    font-size: 20px;
    margin-bottom: 5px;
  }

  &:hover {
    color: white;
    transform: translateY(-1px);
  }
  
  @media (max-width: 480px) {
    svg {
      font-size: 18px;
      margin-bottom: 3px;
    }
    font-size: 10px;
  }
`;

const CartCount = styled.span`
  position: absolute;
  top: -5px;
  right: -5px;
  background: var(--gradient-orange);
  color: var(--white);
  width: 16px;
  height: 16px;
  border-radius: 50%;
  font-size: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  box-shadow: var(--shadow-sm);
`;

const Navigation = styled.nav`
  background: var(--kabum-orange);
  padding: 0;
  box-shadow: var(--shadow-lg);
  position: relative;
`;

const NavContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  padding: 0 15px;
  position: relative;
`;

const NavList = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
  
  @media (max-width: 992px) {
    display: ${props => props.isOpen ? 'flex' : 'none'};
    flex-direction: column;
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background: var(--kabum-orange);
    z-index: 100;
    box-shadow: var(--shadow-xl);
  }
`;

const NavItem = styled.li`
  position: relative;
  
  @media (max-width: 992px) {
    width: 100%;
  }
`;

const NavLink = styled(Link)`
  color: var(--white);
  text-decoration: none;
  padding: 15px 20px;
  display: flex;
  align-items: center;
  gap: 5px;
  font-weight: 600;
  font-size: 14px;
  letter-spacing: 0.3px;
  transition: var(--transition-normal);
  text-transform: uppercase;
  position: relative;
  
  &:hover {
    background: rgba(255, 255, 255, 0.1);
    transform: translateY(-1px);
  }
  
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    width: 0;
    height: 3px;
    background: var(--white);
    transition: var(--transition-normal);
    transform: translateX(-50%);
  }
  
  &:hover::after {
    width: 80%;
  }
  
  @media (max-width: 992px) {
    padding: 15px;
    justify-content: space-between;
  }
`;

const DropdownItem = styled.div`
  position: relative;
  
  @media (max-width: 992px) {
    width: 100%;
  }
`;

const DropdownButton = styled.button`
  color: var(--white);
  background: none;
  border: none;
  padding: 15px 20px;
  display: flex;
  align-items: center;
  gap: 5px;
  font-weight: 600;
  font-size: 14px;
  letter-spacing: 0.3px;
  transition: var(--transition-normal);
  text-transform: uppercase;
  position: relative;
  cursor: pointer;
  
  &:hover {
    background: rgba(255, 255, 255, 0.1);
    transform: translateY(-1px);
  }
  
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    width: 0;
    height: 3px;
    background: var(--white);
    transition: var(--transition-normal);
    transform: translateX(-50%);
  }
  
  &:hover::after {
    width: 80%;
  }
  
  svg {
    transition: transform 0.3s ease;
  }
  
  &:hover svg {
    transform: rotate(180deg);
  }
  
  @media (max-width: 992px) {
    padding: 15px;
    justify-content: space-between;
    width: 100%;
  }
`;

const DropdownMenu = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  background: var(--white);
  min-width: 200px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  border-radius: 8px;
  opacity: 0;
  visibility: hidden;
  transform: translateY(-10px);
  transition: all 0.3s ease;
  z-index: 1000;
  
  ${DropdownItem}:hover & {
    opacity: 1;
    visibility: visible;
    transform: translateY(0);
  }
  
  @media (max-width: 992px) {
    position: static;
    opacity: 1;
    visibility: visible;
    transform: none;
    box-shadow: none;
    border-radius: 0;
    background: rgba(255, 255, 255, 0.1);
    margin-top: 10px;
  }
`;

const DropdownLink = styled(Link)`
  display: block;
  padding: 12px 20px;
  color: var(--text-dark);
  text-decoration: none;
  font-size: 13px;
  font-weight: 500;
  transition: all 0.2s ease;
  text-transform: none;
  
  &:hover {
    background: var(--bg-light);
    color: var(--kabum-orange);
    padding-left: 25px;
  }
  
  &:first-child {
    border-radius: 8px 8px 0 0;
  }
  
  &:last-child {
    border-radius: 0 0 8px 8px;
  }
  
  @media (max-width: 992px) {
    color: var(--white);
    padding: 8px 20px;
    
    &:hover {
      background: rgba(255, 255, 255, 0.1);
      color: var(--white);
      padding-left: 25px;
    }
    
    &:first-child,
    &:last-child {
      border-radius: 0;
    }
  }
`;



const MobileMenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  color: white;
  font-size: 24px;
  cursor: pointer;
  padding: 10px 15px;
  
  @media (max-width: 992px) {
    display: flex;
    align-items: center;
  }
`;

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <HeaderContainer>
    
      
      <MainHeader>
        <MainContent>
          <Logo to="/">
            <LogoImage src="/ar.png" alt="Logo" />
            DISTRIBUIDORA MARKETPLACE
          </Logo>

        </MainContent>
      </MainHeader>
      
      <Navigation>
        <NavContent>
          <MobileMenuButton onClick={toggleMobileMenu}>
            {mobileMenuOpen ? <FaTimes /> : <FaBars />}
          </MobileMenuButton>
          <NavList isOpen={mobileMenuOpen}>
            <DropdownItem>
              <DropdownButton>
                Ar-condicionados <FaChevronDown />
              </DropdownButton>
              <DropdownMenu>
                <DropdownLink to="/category/ar-condicionado/9000">9.000 BTUs</DropdownLink>
                <DropdownLink to="/category/ar-condicionado/12000">12.000 BTUs</DropdownLink>
                <DropdownLink to="/category/ar-condicionado/18000">18.000 BTUs</DropdownLink>
                <DropdownLink to="/category/ar-condicionado/24000">24.000 BTUs</DropdownLink>
              </DropdownMenu>
            </DropdownItem>
            <DropdownItem>
              <DropdownButton>
                Móveis <FaChevronDown />
              </DropdownButton>
              <DropdownMenu>
                <DropdownLink to="/category/moveis/sofa">Sofás</DropdownLink>
              </DropdownMenu>
            </DropdownItem>
            <NavItem>
              <NavLink to="/products">Todos os Produtos</NavLink>
            </NavItem>
          </NavList>
        </NavContent>
      </Navigation>
    </HeaderContainer>
  );
};

export default Header; 