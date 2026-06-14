import { Link } from 'react-router-dom';

function AboutUs() {
  return (
    <div className="about-page">
      <nav className="navbar">
        <Link to="/" className="logo">🌿 Paradise Nursery</Link>
        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/products">Plants</Link>
          <Link to="/cart">Cart</Link>
        </div>
      </nav>
      <div className="about-container">
        <h1>About Paradise Nursery</h1>
        <p>
          Welcome to Paradise Nursery, your premier destination for beautiful and healthy houseplants!
          Founded with a passion for bringing nature indoors, we carefully curate our collection of plants
          to ensure every customer finds the perfect green companion for their home or office.
        </p>
        <p>
          At Paradise Nursery, we believe that plants bring joy, purify the air, and create a peaceful
          atmosphere in any space. Our team of expert horticulturists hand-selects each plant for its
          health, beauty, and ease of care, so whether you are a seasoned plant parent or just starting
          your green journey, we have something perfect for you.
        </p>
        <p>
          We offer a wide variety of houseplants including succulents, tropical plants, flowering plants,
          and air-purifying varieties. Each plant comes with detailed care instructions to help your new
          green friend thrive in its new home.
        </p>
        <p>
          Thank you for choosing Paradise Nursery. Let us help you create your own indoor paradise!
        </p>
      </div>
    </div>
  );
}

export default AboutUs;
