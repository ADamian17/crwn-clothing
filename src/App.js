import React, { useEffect } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import './App.css';

import HomePage from './pages/Homepage/Homepage';
import ShopPage from './pages/shop/Shop';
import Checkoutpage from './pages/Checkout/Checkout.jsx';
import Header from './components/header/Header';

import SignInSignUp from './pages/signIn_signUp/signIn_signUp';
import { checkUserSession } from './redux/user/user.actions';

function App () {
  const dispatch = useDispatch()
  const { currentUser } = useSelector(({user}) => user)

  useEffect(() => {
    dispatch(checkUserSession())
  }, [dispatch])

  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
        <Route exact path="/checkout" component={Checkoutpage} />
        <Route
          exact
          path="/signin"
          render={() => currentUser ? <Redirect to="/" /> : <SignInSignUp />
          }
        />
        <HomePage />
      </Switch>
    </div>
  );
}


export default App;
