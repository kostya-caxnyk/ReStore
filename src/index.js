import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

import './index.css';

import App from './Components/App/App';
import ErrorBoundry from './Components/ErrorBoundry/ErrorBoundry';
import BookstoreService from './Services/BookstoreService';
import { BookstoreServiceProvider } from './Components/BookstoreServiceContext/BookstoreServiceContext';
import store from './store';

const bookstoreService = new BookstoreService();

ReactDOM.render(
  <Provider store={store}>
    <ErrorBoundry>
      <BookstoreServiceProvider value={bookstoreService}>
        <Router>
          <App />
        </Router>
      </BookstoreServiceProvider>
    </ErrorBoundry>
  </Provider>,
  document.getElementById('root'),
);
