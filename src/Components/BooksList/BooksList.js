import React, { Component } from 'react';
import BookListItem from '../BookListItem';
import { connect } from 'react-redux';

import './BooksList.css';

import { fetchBooks } from '../../Actions';
import withBookstoreService from '../Hoc/withBookstoreService';
import { compose } from '../../Utils';
import Spinner from '../Spinner';
import ErrorIndicator from '../ErrorIndicator';

class BooksList extends Component {
  componentDidMount() {
    this.props.fetchBooks();
  }

  render() {
    const { books, loading, error } = this.props;

    if (error) {
      return <ErrorIndicator />;
    }

    if (loading) {
      return <Spinner />;
    }

    return (
      <ul>
        {books.map((book) => {
          return (
            <li key={book.id}>
              <BookListItem book={book} />
            </li>
          );
        })}
      </ul>
    );
  }
}

const mapStateToProps = ({ books, loading, error }) => {
  return {
    books,
    loading,
    error,
  };
};

const mapDispatchtoProps = (dispatch, { bookstoreService }) => {
  return {
    fetchBooks: fetchBooks(bookstoreService, dispatch),
  }
};

export default compose(
  withBookstoreService(),
  connect(mapStateToProps, mapDispatchtoProps),
)(BooksList);
