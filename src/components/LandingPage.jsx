import { Link } from 'react-router-dom';

function LandingPage() {
  return (
    <div className="landing-page">
      <h1>🌿 Paradise Nursery</h1>
      <p className="company-description">
        Welcome to Paradise Nursery — your one-stop shop for beautiful houseplants that bring life
        and freshness to your home. From elegant succulents to lush tropical plants, we offer a
        carefully curated selection of greenery to transform any space into a personal paradise.
        Every plant is hand-selected for quality and comes with expert care guidance.
      </p>
      <Link to="/products" className="get-started-btn">
        Get Started
      </Link>
    </div>
  );
}

export default LandingPage;
