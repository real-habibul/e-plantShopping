import { Routes, Route, Link } from 'react-router-dom'
import ProductList from './components/ProductList'
import CartItem from './components/CartItem'
import AboutUs from './components/AboutUs'
import './App.css'

function LandingPage() {
  return (
    <div className="landing-page">
      <h1>Welcome to Paradise Nursery</h1>
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

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/products" element={<ProductList />} />
      <Route path="/cart" element={<CartItem />} />
      <Route path="/about" element={<AboutUs />} />
    </Routes>
  )
}

export default App
