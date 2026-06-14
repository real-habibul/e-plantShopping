# Paradise Nursery Shopping Application

A React-based e-commerce shopping application for houseplants, built as the final project for the IBM "Developing Front-End Apps with React" course on Coursera.

## Features

- **Landing Page**: Beautiful background image with company description and "Get Started" button
- **Product Listing Page**: Browse 18 houseplants across 3 categories (Succulents, Tropical Plants, Flowering Plants)
  - Each plant displays thumbnail, name, and price
  - Add to Cart functionality with button disable after adding
  - Dynamic cart quantity display in the header
  - Navigation bar on all pages
- **Shopping Cart Page**: Full cart management
  - View all cart items with thumbnails, names, and unit prices
  - Increase/decrease quantity buttons
  - Delete items from cart
  - Total items count and total cost calculation
  - Continue Shopping and Checkout buttons
- **Redux State Management**: Uses Redux Toolkit for efficient cart state management

## Tech Stack

- React 18
- Redux Toolkit (state management)
- React Router DOM (navigation)
- Vite (build tool)
- GitHub Pages (deployment)

## Project Structure

```
src/
├── components/
│   ├── AboutUs.jsx       # Company information page
│   ├── CartItem.jsx      # Shopping cart page with full cart management
│   └── ProductList.jsx   # Product listing with categories and add-to-cart
├── redux/
│   ├── CartSlice.jsx     # Redux slice for cart state management
│   └── store.js          # Redux store configuration
├── App.jsx               # Main app with routing
├── App.css               # Styling
└── main.jsx              # Entry point
```

## Live Demo

Visit the deployed application: [Paradise Nursery on GitHub Pages](https://real-habibul.github.io/e-plantShopping/)

## Author

**AHMAD HABIBUL ULUM**  
IBM Full-Stack JavaScript Developer Professional Certificate
