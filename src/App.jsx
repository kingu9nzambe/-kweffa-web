import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import ProductsPage from './pages/ProductsPage';
import MusicPage from './pages/MusicPage';
import ContactPage from './pages/ContactPage';
import NguzuMetutuPage from './pages/NguzuMetutuPage';
import { MusicProvider } from './context/MusicContext';
import { CartProvider } from './context/CartContext';
import MusicPlayer from './components/layout/MusicPlayer';
import CartSidebar from './components/cart/CartSidebar'; // Keeping this for now until Products refactor
import CosmogramSpiral from './components/layout/CosmogramSpiral';
import { AnimatePresence } from 'framer-motion';

function App() {
  const location = useLocation();

  return (
    <MusicProvider>
      <CartProvider>
        <div className="bg-black min-h-screen text-white overflow-x-hidden selection:bg-regime-gold selection:text-black relative">
          <CosmogramSpiral />
          <div className="noise-overlay" />
          <Navbar />
          <CartSidebar />

          <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/services" element={<ServicesPage />} />
              <Route path="/products" element={<ProductsPage />} />
              <Route path="/music" element={<MusicPage />} />
              <Route path="/nguzu-metutu" element={<NguzuMetutuPage />} />
              <Route path="/contact" element={<ContactPage />} />
            </Routes>
          </AnimatePresence>

          <MusicPlayer />
          <Footer />
        </div>
      </CartProvider>
    </MusicProvider>
  );
}

export default App;
