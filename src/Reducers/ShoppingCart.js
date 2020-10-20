const updateCartItems = (cartItems, item, idx) => {
  if (item.count === 0) {
    return [...cartItems.slice(0, idx), ...cartItems.slice(idx + 1)];
  }

  if (idx === -1) {
    return [...cartItems, item];
  }

  return [...cartItems.slice(0, idx), item, ...cartItems.slice(idx + 1)];
};

const updateCartItem = (item = {}, book, quantity) => {
  const { id = book.id, title = book.title, count = 0, total = 0 } = item;

  return {
    id,
    title,
    count: count + quantity,
    total: total + quantity * book.price,
  };
};

const updateOrder = (state, bookId, quantity) => {
  const {
    shoppingCart: { cartItems },
    bookList: { books },
  } = state;

  const book = books.find(({ id }) => bookId === id);
  const itemIndex = cartItems.findIndex((item) => item.id === bookId);
  const item = cartItems[itemIndex];

  const newCartItem = updateCartItem(item, book, quantity);

  const newCartItems = updateCartItems(cartItems, newCartItem, itemIndex);

  const orderTotal = newCartItems.reduce((acc, book) => acc + book.total, 0)

  return {
    cartItems: newCartItems,
    orderTotal,
  };
};

const updateShoppingCart = (state, action) => {
  if (state === undefined) {
    return {
      cartItems: [],
      orderTotal: 0,
    };
  }

  switch (action.type) {
    case 'BOOK_ADDED_TO_CART': {
      return updateOrder(state, action.payload, 1);
    }
    case 'ALL_BOOKS_REMOVED_FROM_CART': {
      const itemCount = state.shoppingCart.cartItems.find((item) => item.id === action.payload)
        .count;

      return updateOrder(state, action.payload, -itemCount);
    }
    case 'BOOK_REMOVED_FROM_CART': {
      return updateOrder(state, action.payload, -1);
    }
    default:
      return state.shoppingCart;
  }
};

export default updateShoppingCart;
