import React, { useEffect, lazy, Suspense } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { selectCurrentUser } from './redux/user/user.selector';
import { checkUserSession } from './redux/user/user.actions';

import { GlobalStyle } from './global.style';

import Header from './components/header/Header';
import Spinner from './components/Spinner';

const HomePage = lazy(() => import('./pages/Homepage/Homepage'));
const ShopPage = lazy(() => import('./pages/shop/Shop'));
const Checkoutpage = lazy(() => import('./pages/Checkout/Checkout.jsx')) 
const SignInSignUp = lazy(() => import('./pages/signIn_signUp/signIn_signUp'));



function App () {
  const dispatch = useDispatch()
  const currentUser = useSelector(selectCurrentUser);

  useEffect(() => {
    dispatch(checkUserSession())
  }, [dispatch])

  return (
    <>
      <GlobalStyle />
      <Header />
      <Switch>

        <Suspense fallback={<Spinner />}>
          <Route 
            exact 
            path="/" 
            component={HomePage} />
            
          <Route 
            path="/shop" 
            component={ShopPage} />

          <Route 
            exact 
            path="/checkout" 
            component={Checkoutpage} />

          <Route
            exact
            path="/signin"
            render={() => currentUser ? <Redirect to="/" /> : <SignInSignUp />
            } />
        </Suspense>
      </Switch>
    </>
  );
}


export default App;
