const initialState = {
  books: [],
  loading: true,
  error: null,
  cartItems: [],
  orderTotal: 0,
};

const updateCartItems = (cartItems, item, idx) => {
  if (idx === -1) {
    return [...cartItems, item];
  }

  return [...cartItems.slice(0, idx), item, ...cartItems.slice(idx + 1)];
};

const updateCartItem = (item = {}, book) => {
  const { id = book.id, title = book.title, count = 0, total = 0 } = item;

  return {
    id,
    title,
    count: count + 1,
    total: total + book.price,
  };
};

const changeCountCartItem = (cartItems, bookId, book, action) => {
  const newCartItems = cartItems.map((item) => {
    if (item.id === bookId) {
      if (!(action === '-' ? item.count - 1 : item.count + 1)) {
        return null;
      }
      return {
        ...item,
        count: action === '-' ? item.count - 1 : item.count + 1,
        total: action === '-' ? item.total - book.price : item.total + book.price,
      };
    }

    return item;
  });

  return newCartItems.filter((item) => item);
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_BOOKS_REQUEST':
      return {
        ...state,
        books: [],
        loading: true,
        error: null,
      };
    case 'FETCH_BOOKS_SUCCESS':
      return {
        ...state,
        loading: false,
        books: action.payload,
        error: null,
      };
    case 'FETCH_BOOKS_FAILURE':
      return {
        ...state,
        books: [],
        loading: false,
        error: action.payload,
      };
    case 'BOOK_ADDED_TO_CART': {
      const bookId = action.payload;
      const book = state.books.find(({ id }) => bookId === id);
      const itemIndex = state.cartItems.findIndex((item) => item.id === bookId);
      const item = state.cartItems[itemIndex];

      const newItem = updateCartItem(item, book);

      return {
        ...state,
        cartItems: updateCartItems(state.cartItems, newItem, itemIndex),
      };
    }
    case 'BOOK_DELETE_FROM_CART': {
      const newCartItems = state.cartItems.filter((item) => action.payload !== item.id);

      return {
        ...state,
        cartItems: newCartItems,
      };
    }
    case 'BOOK_DECREASE_COUNT': {
      const book = state.books.find(({ id }) => action.payload === id);

      const newCartItems = changeCountCartItem(state.cartItems, action.payload, book, '-');

      return {
        ...state,
        cartItems: newCartItems,
      };
    }
    case 'BOOK_INCREASE_COUNT':
      const book = state.books.find(({ id }) => action.payload === id);

      const newCartItems = changeCountCartItem(state.cartItems, action.payload, book, '+');

      return {
        ...state,
        cartItems: newCartItems,
      };
    default:
      return state;
  }
};

export default reducer;
