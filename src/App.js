import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css';

import HomePage from './pages/Homepage/Homepage';
import ShopPage from './pages/shop/shop';
import Header from './components/header/Header';
import SignIn_SignUp from './pages/signIn_signUp/signIn_signUp';
import { auth } from './fireBase/firebase';

class App extends Component {

  constructor () {
    super(); 
    this.state = {
      currenUser: null
    }
  }
  
  // this close the connection if the page is refresh
  usubscribeFromAuth = null;
  
  componentDidMount () {
    this.usubscribeFromAuth = auth.onAuthStateChanged( user => {
      this.setState({ currenUser: user });

      console.log(user)
    })
  }
  
  componentWillUnmount() {
    this.usubscribeFromAuth();
  }

  render () {
    const currentUser = this.state.currenUser
    return (
      <div>
        < Header currentUser={currentUser}/> 
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route path='/signin' component={SignIn_SignUp} />
          <HomePage />
        </Switch> 
      </div>
    );
  }
}

export default App;
