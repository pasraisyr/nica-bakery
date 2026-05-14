import { useEffect } from 'react';
import { useCart } from '../context/CartContext';
import { BiPlus, BiMinus, BiTrash, BiXCircle } from 'react-icons/bi';

const getImageUrl = (imagePath: string) => {
  const filename = imagePath.split('/').pop();
  return new URL(`../assets/product/${filename}`, import.meta.url).href;
};

const CartModal = () => {
  const { cart, removeFromCart, updateQuantity, totalPrice, totalItems, clearCart, isCartOpen, setIsCartOpen } = useCart();

  useEffect(() => {
    const handleOpen = () => setIsCartOpen(true);
    window.addEventListener('open-cart', handleOpen);
    return () => window.removeEventListener('open-cart', handleOpen);
  }, [setIsCartOpen]);

  if (!isCartOpen) return null;

  const handleWhatsAppOrder = () => {
    const phoneNumber = '60163846320';
    let message = `*BREAD ORDER SUMMARY*\n------------------\n`;
    
    cart.forEach((item, index) => {
      const flavorText = item.selectedOption ? ` (${item.selectedOption})` : '';
      message += `${index + 1}. ${item.name}${flavorText}\n   Qty: ${item.quantity} x RM${item.price.toFixed(2)} = *RM${(item.quantity * item.price).toFixed(2)}*\n\n`;
    });

    message += `------------------\n*TOTAL: RM${totalPrice.toFixed(2)}*\n\n`;
    message += `Items: ${totalItems}\n`;
    message += `_Please process my order. Thank you!_`;

    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, '_blank');
  };

  return (
    <div className="cart-modal-overlay" onClick={() => setIsCartOpen(false)}>
      <div className="cart-modal" onClick={e => e.stopPropagation()}>
        <div className="cart-header">
          <h2>Your Cart ({totalItems})</h2>
          <button className="close-btn" onClick={() => setIsCartOpen(false)}>
            <BiXCircle size={28} />
          </button>
        </div>


        {cart.length === 0 ? (
          <div className="empty-cart">
            <p>Your cart is empty.</p>
            <button className="btn" onClick={() => setIsCartOpen(false)}>Go Shopping</button>
          </div>
        ) : (
          <>
            <div className="cart-items">
              {cart.map(item => (
                <div key={item.id} className="cart-item">
                  <img src={getImageUrl(item.image)} alt={item.name} />
                  <div className="item-details">
                    <h4 style={{ fontSize: '1rem', marginBottom: '4px' }}>{item.name}</h4>
                    {item.selectedOption && (
                      <div style={{ fontSize: '0.8rem', color: 'var(--primary)', fontWeight: '600', marginBottom: '8px' }}>
                        Flavor: {item.selectedOption}
                      </div>
                    )}
                    <p style={{ fontWeight: '700', color: '#333' }}>RM{item.price.toFixed(2)}</p>
                    <div className="quantity-controls" style={{ marginTop: '12px' }}>
                      <button onClick={() => updateQuantity(item.id, item.quantity - 1)}><BiMinus size={16} /></button>
                      <span style={{ fontWeight: '700' }}>{item.quantity}</span>
                      <button onClick={() => updateQuantity(item.id, item.quantity + 1)}><BiPlus size={16} /></button>
                    </div>
                  </div>
                  <button className="remove-item" onClick={() => removeFromCart(item.id)}>
                    <BiTrash size={20} />
                  </button>
                </div>
              ))}
            </div>

            <div className="cart-footer">
              <div className="total-row">
                <span>Total Amount:</span>
                <span className="total-price">RM{totalPrice.toFixed(2)}</span>
              </div>
              <button className="whatsapp-order-btn" onClick={handleWhatsAppOrder}>
                Order via WhatsApp
              </button>
              <button className="clear-cart-btn" onClick={clearCart}>Clear Cart</button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default CartModal;
