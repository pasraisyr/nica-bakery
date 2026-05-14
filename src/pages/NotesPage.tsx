import { Link } from 'react-router-dom';
import { Info, Truck, XCircle, ChevronLeft } from 'lucide-react';

const NotesPage = () => {
  return (
    <div className="notes-page" style={{ padding: '120px 20px 60px' }}>
      <div className="container" style={{ maxWidth: '800px' }}>
        <Link to="/" className="back-link" style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--primary)', fontWeight: '700', marginBottom: '2rem', textDecoration: 'none' }}>
          <ChevronLeft size={24} />
          Back to Home
        </Link>

        <div className="notes-card" style={{ 
          background: 'rgba(255, 255, 255, 0.7)', 
          backdropFilter: 'blur(20px)', 
          borderRadius: '32px', 
          padding: '3rem', 
          boxShadow: '0 20px 40px rgba(255, 143, 171, 0.1)',
          border: '1px solid rgba(255, 255, 255, 0.5)'
        }}>
          <div className="notes-header" style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <div style={{ 
              background: 'var(--primary-light)', 
              width: '60px', 
              height: '60px', 
              borderRadius: '50%', 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center', 
              margin: '0 auto 1.5rem',
              color: 'var(--primary)'
            }}>
              <Info size={32} />
            </div>
            <h1 style={{ fontSize: '2.5rem', color: 'var(--dark)', marginBottom: '1rem' }}>Important Notes</h1>
            <p style={{ color: '#666', fontSize: '1.1rem' }}>Please read before placing your order 🍰</p>
          </div>

          <div className="notes-sections" style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
            <section>
              <h2 style={{ display: 'flex', alignItems: 'center', gap: '12px', color: 'var(--primary)', fontSize: '1.5rem', marginBottom: '1.5rem' }}>
                <Info size={24} /> Ordering Policy
              </h2>
              <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {[
                  "Pre-order at least 2 days earlier.",
                  "No urgent / same day orders.",
                  "For delivery, minimum order is 2 Mini Iceberg Burnt Cheesecakes.",
                  "Ready stock items are based on first come, first serve basis.",
                  "Booking is confirmed with payment only."
                ].map((note, i) => (
                  <li key={i} style={{ display: 'flex', gap: '12px', color: '#444', lineHeight: '1.6' }}>
                    <span style={{ color: 'var(--primary)', fontWeight: '800' }}>•</span>
                    {note}
                  </li>
                ))}
              </ul>
            </section>

            <section>
              <h2 style={{ display: 'flex', alignItems: 'center', gap: '12px', color: 'var(--primary)', fontSize: '1.5rem', marginBottom: '1.5rem' }}>
                <Truck size={24} /> Collection / Pickup
              </h2>
              <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {[
                  "Please make sure to be on time.",
                  "Kindly inform before pickup.",
                  "Delivery available via Lalamove / Grab only.",
                  "Self-pickup is by appointment and mutual agreement."
                ].map((note, i) => (
                  <li key={i} style={{ display: 'flex', gap: '12px', color: '#444', lineHeight: '1.6' }}>
                    <span style={{ color: 'var(--primary)', fontWeight: '800' }}>•</span>
                    {note}
                  </li>
                ))}
              </ul>
            </section>

            <section style={{ background: 'rgba(255, 77, 109, 0.05)', padding: '2rem', borderRadius: '20px', border: '1px dashed var(--primary)' }}>
              <h2 style={{ display: 'flex', alignItems: 'center', gap: '12px', color: '#ff4d6d', fontSize: '1.5rem', marginBottom: '1rem' }}>
                <XCircle size={24} /> Cancellation Policy
              </h2>
              <p style={{ color: '#444', lineHeight: '1.6', fontWeight: '600' }}>
                Last minute cancellation will be charged 50% of the total payment.
              </p>
            </section>
          </div>

          <div style={{ marginTop: '4rem', textAlign: 'center' }}>
            <Link to="/pricelist" className="btn" style={{ textDecoration: 'none' }}>
              Proceed to Price List
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotesPage;
