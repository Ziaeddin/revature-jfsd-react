import Homepage from './pages/Homepage';
import ProductPage from './pages/ProductPage';
import ProductDetailPage from './pages/ProductDetailPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';
import CartPage from './pages/CartPage';
import { BrowserRouter,Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <marquee>Welcome to E-Shop!</marquee>
      <BrowserRouter>
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
