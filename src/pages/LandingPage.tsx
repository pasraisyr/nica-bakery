import { Link } from "react-router-dom";


const LandingPage = () => {
  return (
    <main>
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <h1>Welcome to Classic Cravings by Nisajamal 💛</h1>
            <p>
              "Sweets for your soul, treats for your tummy." <br></br>
              Burnt cheesecake, buttercakes, and brownies made fresh with love 🍰
            </p>
            <div className="hero-buttons" style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link to="/pricelist" className="btn">
                View Price List
              </Link>
              <Link to="/notes" className="btn btn-outline" style={{ background: 'transparent', border: '2px solid white', color: 'white' }}>
                Important Notes
              </Link>
              <Link to="/pickup" className="btn btn-outline" style={{ background: 'rgba(255,255,255,0.1)', border: '2px solid white', color: 'white' }}>
                Pickup Location
              </Link>
            </div>
          </div>
        </div>
      </section>

     
    </main>
  );
};

export default LandingPage;
