import React from 'react';

import './BookListItem.css';

const BookListItem = ({ book, onAddedToCart }) => {
  const { title, author, price, coverImage } = book;
  return (
    <div className="book-list-item">
      <img src={coverImage} alt="book" />
      <div className="content">
        <h4 className="title">{title}</h4>
        <span className="autor">by {author}</span>
        <span className="price">${price}</span>
        <button onClick={onAddedToCart} className="btn btn-info">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default BookListItem;
