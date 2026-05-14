import { useState } from 'react';
import products from '../data/products.json';
import { useCart } from '../context/CartContext';
import { BiPlus, BiMinus } from 'react-icons/bi';
import { Cake } from 'lucide-react';

const getImageUrl = (imagePath: string) => {
  const filename = imagePath.split('/').pop();
  return new URL(`../assets/product/${filename}`, import.meta.url).href;
};

const ProductCard = ({ product }: { product: any }) => {
  const { cart, addToCart, updateQuantity } = useCart();
  
  // Find if this product is already in the cart
  const cartItem = cart.find(item => item.id === product.id);
  const quantity = cartItem ? cartItem.quantity : 0;

  const handlePlus = () => {
    if (quantity === 0) {
      addToCart(product, 1);
    } else {
      updateQuantity(product.id, quantity + 1);
    }
  };

  const handleMinus = () => {
    if (quantity > 0) {
      updateQuantity(product.id, quantity - 1);
    }
  };

  const [imageError, setImageError] = useState(false);

  return (
    <div className="product-card">
      <div className="product-image" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'var(--primary-light)', color: '#999' }}>
        {product.image && !imageError ? (
          <img 
            src={getImageUrl(product.image)} 
            alt={product.name} 
            onError={() => setImageError(true)} 
          />
        ) : (
          <div style={{ textAlign: 'center', opacity: 0.6 }}>
            <Cake size={48} color="var(--primary)" />
            <div style={{ fontSize: '0.8rem', marginTop: '0.8rem', fontWeight: '700', color: 'var(--primary)', letterSpacing: '1px', textTransform: 'uppercase' }}>No Photo</div>
          </div>
        )}
      </div>
      <div className="product-info">
        <div className="product-category">{product.category}</div>
        <h3 className="product-name">{product.name}</h3>
        
        <div className="product-footer-top">
          <div className="product-price">
            <span>RM</span>{product.price.toFixed(2)}
          </div>
          <div className="quantity-selector" style={{ 
            display: 'flex', 
            alignItems: 'center', 
            gap: '0.8rem', 
            background: 'var(--primary-light)', 
            padding: '0.5rem 1rem', 
            borderRadius: '50px',
            transition: 'all 0.3s ease'
          }}>
            <button 
              onClick={handleMinus}
              style={{ border: 'none', background: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', color: quantity > 0 ? 'var(--primary)' : '#ccc' }}
              disabled={quantity === 0}
            >
              <BiMinus size={20} />
            </button>
            <span style={{ 
              fontWeight: '700', 
              minWidth: '20px', 
              textAlign: 'center',
              color: quantity > 0 ? 'var(--primary)' : '#999'
            }}>{quantity}</span>
            <button 
              onClick={handlePlus}
              style={{ border: 'none', background: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', color: 'var(--primary)' }}
            >
              <BiPlus size={20} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const PriceListPage = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  
  const categories = ['All', ...new Set(products.map(p => p.category))];
  
  const filteredProducts = activeCategory === 'All' 
    ? products 
    : products.filter(p => p.category === activeCategory);

  return (
    <div className="price-list-page">
      <div className="container">
        <div className="section-title">
          <h2>Our Price List</h2>
          <p>Delicious handcrafted cakes and brownies made fresh daily.</p>
        </div>

        <div className="category-filter">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`btn ${activeCategory === cat ? '' : 'btn-outline'}`}
              style={{
                background: activeCategory === cat ? 'var(--primary)' : 'transparent',
                color: activeCategory === cat ? 'var(--white)' : 'var(--primary)',
                border: '2px solid var(--primary)',
                padding: '0.5rem 1.5rem',
                cursor: 'pointer',
                borderRadius: '50px',
                fontWeight: '600',
                transition: 'all 0.3s ease'
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="product-grid">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PriceListPage;
