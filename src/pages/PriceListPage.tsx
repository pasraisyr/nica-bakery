import { useState } from 'react';
import products from '../data/products.json';
import { BiCartAdd } from 'react-icons/bi';
import { Cake } from 'lucide-react';
import SelectionModal from '../components/SelectionModal';

const getImageUrl = (imagePath: string) => {
  const filename = imagePath.split('/').pop();
  return new URL(`../assets/product/${filename}`, import.meta.url).href;
};

const ProductCard = ({ product }: { product: any }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [imageError, setImageError] = useState(false);

  return (
    <>
      <div className="product-card" onClick={() => setIsModalOpen(true)} style={{ cursor: 'pointer' }}>
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
              {product.options && <span style={{ fontSize: '0.8rem', marginLeft: '4px', opacity: 0.7 }}>+ options</span>}
            </div>
            
            <button 
              className="btn btn-select-options"
              onClick={(e) => { e.stopPropagation(); setIsModalOpen(true); }}
              style={{ 
                padding: '0.6rem 1.2rem', 
                borderRadius: '50px', 
                fontSize: '0.9rem',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                background: 'var(--primary)',
                color: 'white',
                border: 'none',
                cursor: 'pointer',
                fontWeight: '700'
              }}
            >
              <BiCartAdd size={20} />
              Add
            </button>
          </div>
        </div>
      </div>

      {isModalOpen && (
        <SelectionModal 
          product={product} 
          onClose={() => setIsModalOpen(false)} 
        />
      )}
    </>
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
