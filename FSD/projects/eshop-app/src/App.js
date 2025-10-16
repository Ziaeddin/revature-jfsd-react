import Homepage from './pages/Homepage';
import ProductPage from './pages/ProductPage';
import ProductDetailPage from './pages/ProductDetailPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
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
