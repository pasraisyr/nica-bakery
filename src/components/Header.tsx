import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { BiCartAlt, BiMenu, BiX } from 'react-icons/bi';
import { Cake } from 'lucide-react';
import { useCart } from '../context/CartContext';

const Header = () => {
  const location = useLocation();
  const { totalItems } = useCart();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const closeMenu = () => setIsMobileMenuOpen(false);

  return (
    <header>
      <div className="container">
        <nav>
          <Link to="/" className="logo">
            <Cake size={32} color="var(--primary)" style={{ marginRight: '10px' }} />
            Classic Craving by Nisajamal
          </Link>
          <button className="mobile-menu-btn" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <BiX size={32} /> : <BiMenu size={32} />}
          </button>
          
          <ul className={`nav-links ${isMobileMenuOpen ? 'mobile-active' : ''}`}>
            <li>
              <Link 
                to="/" 
                className={location.pathname === '/' ? 'active' : ''}
                onClick={closeMenu}
              >
                Home
              </Link>
            </li>
            <li>
              <Link 
                to="/pricelist" 
                className={location.pathname === '/pricelist' ? 'active' : ''}
                onClick={closeMenu}
              >
                Price List
              </Link>
            </li>
            <li className="cart-container">
              <button className="cart-btn" onClick={() => { window.dispatchEvent(new CustomEvent('open-cart')); closeMenu(); }} style={{ display: 'flex', alignItems: 'center', gap: '8px', background: 'var(--primary)', color: 'white', padding: '8px 16px', borderRadius: '50px' }}>
                <BiCartAlt size={22} />
                <span style={{ fontWeight: '600' }}>Cart</span>
                {totalItems > 0 && <span className="cart-badge-header" style={{ background: 'white', color: 'var(--primary)', padding: '2px 8px', borderRadius: '10px', fontSize: '0.8rem', fontWeight: '800' }}>{totalItems}</span>}
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
