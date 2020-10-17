import React from 'react';
import withBookstoreService from '../Hoc/withBookstoreService';

const App = ({ bookstoreService }) => {
  const arr = bookstoreService.getBooks().map(({ id, title, author }) => {
    return (
      <div key={id}>
        <h2>{title}</h2>
        <strong>Author: {author}</strong>
      </div>
    );
  });
  
  return <div>{arr}</div>;
};

export default withBookstoreService()(App);
