import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { addItem } from '../redux/CartSlice';
import { useState } from 'react';

const plants = [
  {
    category: 'Succulents',
    items: [
      { name: 'Aloe Vera', price: 12.99, image: 'https://images.unsplash.com/photo-1509423350716-97f9360b4e09?w=400&q=80' },
      { name: 'Echeveria', price: 9.99, image: 'https://images.unsplash.com/photo-1459411552884-841db9b3cc2a?w=400&q=80' },
      { name: 'Jade Plant', price: 14.99, image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80' },
      { name: 'Haworthia', price: 11.49, image: 'https://images.unsplash.com/photo-1446071103084-c257b5f70672?w=400&q=80' },
      { name: 'String of Pearls', price: 16.99, image: 'https://images.unsplash.com/photo-1485955900006-10f4d324d411?w=400&q=80' },
      { name: 'Zebra Plant', price: 13.49, image: 'https://images.unsplash.com/photo-1520412099551-62b6bafeb5bb?w=400&q=80' },
    ],
  },
  {
    category: 'Tropical Plants',
    items: [
      { name: 'Monstera Deliciosa', price: 29.99, image: 'https://images.unsplash.com/photo-1614594975525-e45190c55d0b?w=400&q=80' },
      { name: 'Fiddle Leaf Fig', price: 34.99, image: 'https://images.unsplash.com/photo-1459411552884-841db9b3cc2a?w=400&q=80' },
      { name: 'Pothos', price: 15.99, image: 'https://images.unsplash.com/photo-1572688484438-313a56e6a6a4?w=400&q=80' },
      { name: 'Bird of Paradise', price: 39.99, image: 'https://images.unsplash.com/photo-1603436326446-74e2d65f3e72?w=400&q=80' },
      { name: 'Philodendron', price: 22.99, image: 'https://images.unsplash.com/photo-1637967886160-fd78dc3ce3f5?w=400&q=80' },
      { name: 'Calathea', price: 27.49, image: 'https://images.unsplash.com/photo-1632207691143-643e2a9a9361?w=400&q=80' },
    ],
  },
  {
    category: 'Flowering Plants',
    items: [
      { name: 'Peace Lily', price: 18.99, image: 'https://images.unsplash.com/photo-1593691509543-c55fb32d8de5?w=400&q=80' },
      { name: 'Orchid', price: 24.99, image: 'https://images.unsplash.com/photo-1566907225470-85807a88e41e?w=400&q=80' },
      { name: 'African Violet', price: 11.99, image: 'https://images.unsplash.com/photo-1490750967868-88aa4f44baee?w=400&q=80' },
      { name: 'Anthurium', price: 21.99, image: 'https://images.unsplash.com/photo-1598880940371-c756e015faf1?w=400&q=80' },
      { name: 'Begonia', price: 14.49, image: 'https://images.unsplash.com/photo-1567331711402-509c12c41959?w=400&q=80' },
      { name: 'Kalanchoe', price: 10.99, image: 'https://images.unsplash.com/photo-1509587584298-0f3b3a3a1797?w=400&q=80' },
    ],
  },
];

function ProductList() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);
  const [addedProducts, setAddedProducts] = useState({});

  const handleAddToCart = (product) => {
    dispatch(addItem({ product }));
    setAddedProducts((prev) => ({ ...prev, [product.name]: true }));
  };

  const isInCart = (productName) => {
    return addedProducts[productName] || cartItems.some((item) => item.name === productName);
  };

  return (
    <div className="product-page">
      <nav className="navbar">
        <Link to="/" className="logo">🌿 Paradise Nursery</Link>
        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/products">Plants</Link>
          <Link to="/cart" className="cart-icon">
            🛒 <span className="cart-count">{totalQuantity}</span>
          </Link>
        </div>
      </nav>
      <div className="products-container">
        {plants.map((category) => (
          <div key={category.category} className="category-section">
            <h2>{category.category}</h2>
            <div className="products-grid">
              {category.items.map((plant) => (
                <div key={plant.name} className="product-card">
                  <img src={plant.image} alt={plant.name} />
                  <div className="product-info">
                    <h3>{plant.name}</h3>
                    <p className="price">${plant.price.toFixed(2)}</p>
                    <button
                      className="add-to-cart-btn"
                      onClick={() => handleAddToCart(plant)}
                      disabled={isInCart(plant.name)}
                    >
                      {isInCart(plant.name) ? 'Added to Cart ✓' : 'Add to Cart'}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductList;
