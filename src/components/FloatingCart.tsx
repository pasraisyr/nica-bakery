import { BiCartAlt } from 'react-icons/bi';
import { useCart } from '../context/CartContext';

const FloatingCart = () => {
  const { totalItems, totalPrice, isCartOpen } = useCart();

  if (totalItems === 0 || isCartOpen) return null;

  return (
    <div 
      className="floating-cart"
      onClick={() => window.dispatchEvent(new CustomEvent('open-cart'))}
    >
      <div className="floating-cart-icon">
        <BiCartAlt size={24} />
        <span className="floating-cart-badge">{totalItems}</span>
      </div>
      <div className="floating-cart-info">
        <span className="floating-cart-label">View Cart</span>
        <span className="floating-cart-price">RM{totalPrice.toFixed(2)}</span>
      </div>
    </div>
  );
};

export default FloatingCart;
