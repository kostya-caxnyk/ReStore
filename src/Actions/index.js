const booksLoaded = (newBooks) => ({ type: 'FETCH_BOOKS_SUCCESS', payload: newBooks });

const booksRequested = () => ({ type: 'FETCH_BOOKS_REQUEST' });

const booksError = (err) => ({ type: 'FETCH_BOOKS_FAILURE', payload: err });

const fetchBooks = (bookstoreService, dispatch) => () => {
  dispatch(booksRequested());

  bookstoreService
    .getBooks()
    .then((data) => dispatch(booksLoaded(data)))
    .catch((err) => dispatch(booksError(err)));
};

const bookAddedToCart = (bookId) => ({
  type: 'BOOK_ADDED_TO_CART',
  payload: bookId,
});

const bookDeletedFromCart = (bookId) => ({
  type: 'BOOK_DELETE_FROM_CART',
  payload: bookId,
});

const bookDecreasedCount = (bookId) => ({
  type: 'BOOK_DECREASE_COUNT',
  payload: bookId,
});

const bookIncreasedCount = (bookId) => ({
  type: 'BOOK_INCREASE_COUNT',
  payload: bookId,
});

export { fetchBooks, bookAddedToCart, bookDeletedFromCart, bookDecreasedCount, bookIncreasedCount };
