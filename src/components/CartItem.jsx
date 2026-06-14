import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { removeItem, updateQuantity } from '../redux/CartSlice';
import { useState } from 'react';

function CartItem() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);
  const totalAmount = useSelector((state) => state.cart.totalAmount);
  const [checkoutMessage, setCheckoutMessage] = useState('');

  const handleIncrease = (productName) => {
    dispatch(updateQuantity({ productName, amount: 1 }));
  };

  const handleDecrease = (productName) => {
    dispatch(updateQuantity({ productName, amount: -1 }));
  };

  const handleDelete = (productName) => {
    dispatch(removeItem({ productName }));
  };

  const handleCheckout = () => {
    setCheckoutMessage('Coming Soon! Checkout functionality is under development.');
    setTimeout(() => setCheckoutMessage(''), 3000);
  };

  return (
    <div className="cart-page">
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
      <div className="cart-container">
        {cartItems.length === 0 ? (
          <div className="empty-cart">
            <h2>Your Cart is Empty</h2>
            <p>Start adding some beautiful plants to your cart!</p>
            <Link to="/products" className="continue-shopping-btn" style={{ display: 'inline-block', marginTop: '20px' }}>
              Continue Shopping
            </Link>
          </div>
        ) : (
          <>
            <div className="cart-summary">
              <h2>Shopping Cart</h2>
              <div className="total-info">
                <p>Total Items: {totalQuantity}</p>
                <p className="total-cost">Total Cost: ${totalAmount.toFixed(2)}</p>
              </div>
            </div>

            {cartItems.map((item) => (
              <div key={item.name} className="cart-item">
                <img src={item.image} alt={item.name} />
                <div className="item-details">
                  <h3>{item.name}</h3>
                  <p className="unit-price">Unit Price: ${item.price.toFixed(2)}</p>
                  <p className="item-total">Total: ${(item.price * item.quantity).toFixed(2)}</p>
                </div>
                <div className="quantity-controls">
                  <button onClick={() => handleDecrease(item.name)}>-</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => handleIncrease(item.name)}>+</button>
                </div>
                <button className="delete-btn" onClick={() => handleDelete(item.name)}>
                  Delete
                </button>
              </div>
            ))}

            {checkoutMessage && (
              <div style={{ textAlign: 'center', padding: '15px', background: '#fff3cd', borderRadius: '8px', marginBottom: '15px' }}>
                {checkoutMessage}
              </div>
            )}

            <div className="cart-buttons">
              <Link to="/products" className="continue-shopping-btn">
                Continue Shopping
              </Link>
              <button className="checkout-btn" onClick={handleCheckout}>
                Checkout
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default CartItem;
