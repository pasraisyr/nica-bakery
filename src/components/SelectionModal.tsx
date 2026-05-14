import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { BiPlus, BiMinus, BiX } from 'react-icons/bi';

interface SelectionModalProps {
  product: any;
  onClose: () => void;
}

const getImageUrl = (imagePath: string) => {
  const filename = imagePath.split('/').pop();
  return new URL(`../assets/product/${filename}`, import.meta.url).href;
};

const SelectionModal: React.FC<SelectionModalProps> = ({ product, onClose }) => {
  const { addToCart } = useCart();
  // Default to first option if exists, otherwise null
  const [selectedOption, setSelectedOption] = useState(product.options ? product.options[0] : null);
  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = () => {
    addToCart(
      product, 
      quantity, 
      selectedOption ? selectedOption.label : undefined, 
      selectedOption ? selectedOption.extraPrice : 0
    );
    onClose();
    window.dispatchEvent(new CustomEvent('open-cart'));
  };

  const currentUnitPrice = product.price + (selectedOption ? selectedOption.extraPrice : 0);
  const totalPrice = currentUnitPrice * quantity;

  return (
    <div className="selection-modal-overlay" onClick={onClose}>
      <div className="selection-modal" onClick={e => e.stopPropagation()}>
        <button className="modal-close-btn" onClick={onClose}>
          <BiX size={24} />
        </button>

        <div className="modal-body">
          <div className="modal-image-container">
            <img src={getImageUrl(product.image)} alt={product.name} />
          </div>

          <div className="modal-content">
            <div className="modal-header-info">
              <span className="modal-category">{product.category}</span>
              <h2 className="modal-title">{product.name}</h2>
              {product.description && <p className="modal-description" style={{ color: '#666', fontSize: '0.9rem', marginTop: '0.5rem', lineHeight: '1.5' }}>{product.description}</p>}
            </div>

            {product.options && (
              <div className="options-section">
                <label>Select Flavor:</label>
                <div className="flavor-grid">
                  {product.options.map((opt: any) => (
                    <button
                      key={opt.label}
                      className={`flavor-pill ${selectedOption?.label === opt.label ? 'active' : ''}`}
                      onClick={() => setSelectedOption(opt)}
                    >
                      <span className="flavor-label">{opt.label}</span>
                      {opt.extraPrice > 0 && <span className="flavor-price"> (+RM{opt.extraPrice})</span>}
                    </button>
                  ))}
                </div>
              </div>
            )}

            <div className="modal-footer-controls">
              <div className="quantity-section">
                <label>Quantity:</label>
                <div className="modal-quantity-selector">
                  <button onClick={() => setQuantity(Math.max(1, quantity - 1))}>
                    <BiMinus size={20} />
                  </button>
                  <span>{quantity}</span>
                  <button onClick={() => setQuantity(quantity + 1)}>
                    <BiPlus size={20} />
                  </button>
                </div>
              </div>

              <div className="price-summary">
                <span className="total-label">Total Price:</span>
                <span className="total-value">RM{totalPrice.toFixed(2)}</span>
              </div>
            </div>

            <button className="add-to-cart-confirm-btn" onClick={handleAddToCart}>
              Add {quantity} to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SelectionModal;
