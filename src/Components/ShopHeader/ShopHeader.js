import React from 'react';
import { Link } from 'react-router-dom';

import './ShopHeader.css';

const ShopHeader = ({ productsCount, priceValue }) => {
  return (
    <header className="header">
      <Link to="/">
        <h1>ReStore</h1>
      </Link>
      <Link to="/cart">
        <i className="fas fa-shopping-cart"></i>
        <span>
          {productsCount} item{productsCount === 1 ? '' : 's'} (${priceValue})
        </span>
      </Link>
    </header>
  );
};

export default ShopHeader;
