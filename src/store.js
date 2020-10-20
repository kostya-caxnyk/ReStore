import { createStore, applyMiddleware } from 'redux';
import reducer from './Reducers';
import thunkMiddleware from 'redux-thunk';

const logMiddleware = (store) => (dispatch) => (action) => {
  console.log(action.type, store.getState());
  return dispatch(action);
};

console.log(thunkMiddleware);

const stringMiddleware = () => (dispatch) => (action) => {
  if (typeof action === 'string') {
    return dispatch({
      type: action,
    });
  }
  return dispatch(action);
};

const store = createStore(
  reducer,
  applyMiddleware(thunkMiddleware, stringMiddleware, logMiddleware),
);

export default store;
