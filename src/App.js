import React, { useEffect, useState } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect, useDispatch, useSelector } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import './App.css';

import HomePage from './pages/Homepage/Homepage';
import ShopPage from './pages/shop/Shop';
import Checkoutpage from './pages/Checkout/Checkout.jsx';
import Header from './components/header/Header';

import SignInSignUp from './pages/signIn_signUp/signIn_signUp';
import { selectCurrentUser } from './redux/user/user.selector';
import { checkUserSession } from './redux/user/user.actions';

function App () {
  const dispatch = useDispatch()


  useEffect(() => {
    dispatch(checkUserSession())
    // componentDidmount
    return () => {}
  }, [])

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
          render={() =>
            this.props.currentUser ? <Redirect to="/" /> : <SignInSignUp />
          }
        />
        <HomePage />
      </Switch>
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

export default connect(mapStateToProps)(App);
