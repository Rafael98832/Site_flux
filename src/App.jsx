import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { createGlobalStyle } from 'styled-components'
import styled from 'styled-components'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import ProductDetails from './pages/ProductDetails'
import Category from './pages/Category'
import Products from './pages/Products'

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;500;600;700;800&display=swap');
  
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  body {
    font-family: 'Open Sans', 'Segoe UI', Arial, sans-serif;
    background-color: #f9f9f9;
    color: #333;
    line-height: 1.6;
    overflow-x: hidden;
  }
  
  button {
    cursor: pointer;
    font-family: 'Open Sans', 'Segoe UI', Arial, sans-serif;
  }
  
  a {
    text-decoration: none;
    color: inherit;
  }
  
  img {
    max-width: 100%;
  }
  
  h1, h2, h3, h4, h5, h6 {
    font-weight: 700;
    line-height: 1.3;
  }
  
  input, textarea, select {
    font-family: 'Open Sans', 'Segoe UI', Arial, sans-serif;
  }
  
  /* Cores da marca */
  :root {
    --primary: #0066cc;
    --primary-dark: #005bb9;
    --secondary: #28a745;
    --text-dark: #333;
    --text-medium: #666;
    --text-light: #999;
    --border-color: #eee;
    --bg-light: #f9f9f9;
    --bg-medium: #f5f5f5;
    --danger: #f44336;
    --success: #4caf50;
    --warning: #ff9800;
  }
  
  /* Media queries para responsividade */
  @media (max-width: 768px) {
    html {
      font-size: 95%;
    }
  }
  
  @media (max-width: 480px) {
    html {
      font-size: 90%;
    }
  }
`;

const MainContainer = styled.main`
  width: 100%;
  max-width: 100vw;
  margin: 0 auto;
  overflow-x: hidden;
`;

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Header />
      <MainContainer>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/category/:categoryName" element={<Category />} />
          <Route path="/category/:categoryName/:capacity" element={<Category />} />
          {/* Outras rotas serão adicionadas conforme necessário */}
        </Routes>
      </MainContainer>
      <Footer />
    </Router>
  )
}

export default App
