import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import LandingPage from './pages/LandingPage';
import PriceListPage from './pages/PriceListPage';
import NotesPage from './pages/NotesPage';
import PickupPage from './pages/PickupPage';
import { CartProvider } from './context/CartContext';
import CartModal from './components/CartModal';
import FloatingCart from './components/FloatingCart';
import './App.css';

function App() {
  return (
    <CartProvider>
      <Router>
        <Header />
        <FloatingCart />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/pricelist" element={<PriceListPage />} />
          <Route path="/notes" element={<NotesPage />} />
          <Route path="/pickup" element={<PickupPage />} />
        </Routes>
        <Footer />
        <CartModal />
      </Router>
    </CartProvider>
  );
}

export default App;
