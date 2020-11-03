import React from 'react';
import { Route, Switch } from 'react-router-dom';

import './App.css';

import { HomePage, CartPage } from '../Pages';
import ShopHeader from '../ShopHeader';

const App = () => {
  return (
    <main role="main" className="container">
      <ShopHeader />
      <Switch>
        <Route path="/" component={HomePage} exact />
        <Route path="/cart" component={CartPage} />
      </Switch>
    </main>
  );
};

export default App;
