import React, { Component } from 'react';

import FormInput from '../formInput/FormtInput';
import CustomButton from '../customeButtom/customeButtom';
import {signInWithGoogle } from '../../fireBase/firebase'

import './sign-in.scss';

class SignIn extends Component {

  constructor(props) {
    super (props); 
    
    this.state = {
      email: "",
      password: "",
    }
  }

  handleSubmit = ( event ) => {
    this.setState ({
      email: "",
      password: ""
    }) 
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value 
    })
  }

  render () {
    return (
      <div className="sign-in">
        <h2>I already have an account </h2>
        <span>Sign in with your email and password</span>

        <form onSubmit={this.handleSubmit}> 
          <FormInput name="email" type="email" value={this.state.email} handleChange={this.handleChange} label="email" required />
  
          <FormInput name="password" type="password" value={this.state.password} handleChange={this.handleChange} label="password" required />
           
          <div className='buttons'>
            <CustomButton type="submit" >
              Sign In  
            </CustomButton>
            <CustomButton onClick={signInWithGoogle} isGoogleSignIn >
             sign google 
            </CustomButton>
          </div>
        </form>
      </div>
    )
  }
} 


export default SignIn;