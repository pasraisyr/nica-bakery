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
            <Link to="/pricelist" className="btn">
              View Price List
            </Link>
          </div>
        </div>
      </section>

     
    </main>
  );
};

export default LandingPage;
