import React from 'react';
import { Switch, Route } from 'react-router-dom';

import HomePage from './pages/Homepage/Homepage';
import ShopPage from './pages/shop/shop';

function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={ShopPage} />
        <HomePage />
      </Switch> 
    </div>
  );
}

export default App;
