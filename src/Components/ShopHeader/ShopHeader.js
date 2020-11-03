import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import './ShopHeader.css';

const ShopHeader = () => {
  const orderTotal = useSelector((state) => state.shoppingCart.orderTotal);
  const productsCount = useSelector((state) => state.shoppingCart.cartItems.length);

  return (
    <header className="header">
      <Link to="/">
        <h1>ReStore</h1>
      </Link>
      <Link to="/cart">
        <i className="fas fa-shopping-cart"></i>
        <span>
          {productsCount} item{productsCount === 1 ? '' : 's'} (${orderTotal})
        </span>
      </Link>
    </header>
  );
};

export default ShopHeader;
