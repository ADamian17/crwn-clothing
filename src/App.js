import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import './App.css';

import HomePage from './pages/Homepage/Homepage';
import ShopPage from './pages/shop/shop';
import Checkoutpage from './pages/Checkout/Checkout.jsx';
import Header from './components/header/Header';
import { auth, createUserProfileDocument } from './fireBase/firebase';
import { setCurrentUser } from './redux/user/user.actions';
import SignInSignUp from './pages/signIn_signUp/signIn_signUp';
import { selectCurrentUser } from './redux/user/user.selector';
class App extends Component {
  // this close the connection if the page is refresh
  usubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser} = this.props;
    this.usubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot((snapshot) => {
          setCurrentUser({
            id: snapshot.id,
            ...snapshot.data(),
          });
        });
      }

      setCurrentUser(userAuth);
    });
  }

  componentWillUnmount() {
    this.usubscribeFromAuth();
  }

  render() {
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
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
