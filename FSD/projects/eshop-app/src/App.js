import Homepage from './pages/Homepage';
import ProductPage from './pages/ProductPage';
import ProductDetailPage from './pages/ProductDetailPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';
import CartPage from './pages/CartPage';
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { setNavigationCallback } from './services/apiService';

function AppRoutes() {
  const navigate = useNavigate();

  //for API service
  useEffect(() => {
    setNavigationCallback((path) => navigate(path));
  }, [navigate]);

  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/products" element={<ProductPage />} />
      <Route path="/products/:id" element={<ProductDetailPage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="*" element={<h1>404 Page Not Found</h1>} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/cart" element={<CartPage />} />
    </Routes>
  );
}

function App() {
  return (
    <>
      <marquee>Welcome to E-Shop!</marquee>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </>   
  );
}
function App_old() {
  return (
    <>
      <Homepage />              
      {/* <ProductDetailPage /> */}
      {/* <ProductPage /> */}
      {/* <ContactPage /> */}
      <AboutPage />
    </>
      
    
  );
}

export default App;
