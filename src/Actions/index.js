const booksLoaded = (newBooks) => ({ type: 'FETCH_BOOKS_SUCCESS', payload: newBooks });

const booksRequested = () => ({ type: 'FETCH_BOOKS_REQUEST' });

const booksError = (err) => ({ type: 'FETCH_BOOKS_FAILURE', payload: err });

const bookAddedToCart = (bookId) => ({
  type: 'BOOK_ADDED_TO_CART',
  payload: bookId,
});

const allBooksRemovedFromCart = (bookId) => ({
  type: 'ALL_BOOKS_REMOVED_FROM_CART',
  payload: bookId,
});

const bookRemovedFromCart = (bookId) => ({
  type: 'BOOK_REMOVED_FROM_CART',
  payload: bookId,
});

const fetchBooks = (bookstoreService) => () => (dispatch) => {
  dispatch(booksRequested());

  bookstoreService
    .getBooks()
    .then((data) => dispatch(booksLoaded(data)))
    .catch((err) => dispatch(booksError(err)));
};

export { fetchBooks, bookAddedToCart, allBooksRemovedFromCart, bookRemovedFromCart };
