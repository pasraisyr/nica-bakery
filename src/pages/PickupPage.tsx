import { Link } from 'react-router-dom';
import { BiMap, BiChevronLeft, BiNavigation, BiStoreAlt } from 'react-icons/bi';

const PickupPage = () => {
  const address = "B-01-17, Pangsapuri Idaman Cahaya 2, Jalan Selasih U12/13, Cahaya Alam, 40170 Shah Alam Selangor";
  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;

  return (
    <div className="pickup-page" style={{ padding: '120px 20px 60px' }}>
      <div className="container" style={{ maxWidth: '800px' }}>
        <Link to="/" className="back-link" style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--primary)', fontWeight: '700', marginBottom: '2rem', textDecoration: 'none' }}>
          <BiChevronLeft size={24} />
          Back to Home
        </Link>

        <div className="pickup-card" style={{ 
          background: 'rgba(255, 255, 255, 0.7)', 
          backdropFilter: 'blur(20px)', 
          borderRadius: '32px', 
          padding: '3rem', 
          boxShadow: '0 20px 40px rgba(255, 143, 171, 0.1)',
          border: '1px solid rgba(255, 255, 255, 0.5)',
          textAlign: 'center'
        }}>
          <div style={{ 
            background: 'var(--primary-light)', 
            width: '80px', 
            height: '80px', 
            borderRadius: '50%', 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center', 
            margin: '0 auto 2rem',
            color: 'var(--primary)'
          }}>
            <BiStoreAlt size={40} />
          </div>

          <h1 style={{ fontSize: '2.5rem', color: 'var(--dark)', marginBottom: '1rem' }}>Self-Pickup Location</h1>
          <p style={{ color: '#666', fontSize: '1.1rem', marginBottom: '2.5rem' }}>You can collect your treats at our home bakery 🏠</p>

          <div className="address-box" style={{ 
            background: 'white', 
            padding: '2rem', 
            borderRadius: '24px', 
            border: '2px dashed var(--primary-light)',
            marginBottom: '3rem',
            position: 'relative'
          }}>
            <BiMap size={32} color="var(--primary)" style={{ marginBottom: '1rem' }} />
            <p style={{ 
              fontSize: '1.3rem', 
              color: 'var(--dark)', 
              lineHeight: '1.6', 
              fontWeight: '600',
              margin: 0
            }}>
              {address}
            </p>
          </div>

          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a 
              href={mapsUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn" 
              style={{ display: 'flex', alignItems: 'center', gap: '10px', textDecoration: 'none' }}
            >
              <BiNavigation size={22} />
              Open in Google Maps
            </a>
            <Link to="/notes" className="btn btn-outline" style={{ textDecoration: 'none', border: '2px solid var(--primary)', color: 'var(--primary)', background: 'transparent' }}>
              Pickup Guidelines
            </Link>
          </div>

          <p style={{ marginTop: '2rem', color: '#999', fontSize: '0.9rem' }}>
            *Please ensure you have an appointment before coming.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PickupPage;
