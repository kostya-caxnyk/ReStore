import React, { Component } from 'react';
import BookListItem from '../BookListItem';
import { connect } from 'react-redux';

import './BooksList.css';

import { fetchBooks, bookAddedToCart } from '../../Actions';
import withBookstoreService from '../Hoc/withBookstoreService';
import { compose } from '../../Utils';
import Spinner from '../Spinner';
import ErrorIndicator from '../ErrorIndicator';

const BooksList = ({ books, onAddedToCart }) => {
  return (
    <ul>
      {books.map((book) => {
        return (
          <li key={book.id}>
            <BookListItem book={book} onAddedToCart={() => onAddedToCart(book.id)}/>
          </li>
        );
      })}
    </ul>
  );
};

class BooksListContainer extends Component {
  componentDidMount() {
    this.props.fetchBooks();
  }

  render() {
    const { books, loading, error, onAddedToCart } = this.props;

    if (error) {
      return <ErrorIndicator />;
    }

    if (loading) {
      return <Spinner />;
    }

    return <BooksList books={books} onAddedToCart={onAddedToCart} />;
  }
}

const mapStateToProps = ({ books, loading, error }) => {
  return {
    books,
    loading,
    error,
  };
};

const mapDispatchToProps = (dispatch, { bookstoreService }) => {
  return {
    fetchBooks: fetchBooks(bookstoreService, dispatch),
    onAddedToCart: (id) => dispatch(bookAddedToCart(id))
  };
};

export default compose(
  withBookstoreService(),
  connect(mapStateToProps, mapDispatchToProps),
)(BooksListContainer);
