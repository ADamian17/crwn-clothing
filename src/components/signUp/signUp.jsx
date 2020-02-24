import React, { Component }  from 'react';

import FormInput from '../formInput/FormtInput';
import CustomButton from '../customeButtom/customeButtom';

import { auth, createUserProfileDocument } from '../../fireBase/firebase';

import './signUp.scss';

class SignUp extends Component {

  constructor () {
    super();

    this.state = {
      displayName: '',
      email: '',
      password: '',
      confirmPassword: ''
    }

  }


  handleSubmit = async event => {
    event.preventDefault();

    const {displayName, email, password, confirmPassword} = this.state;
    if ( password !== confirmPassword ) {
      alert("passwords don't match")
      return
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword( email, password );

     await createUserProfileDocument(user, {displayName})

     this.setState({
      displayName: '',
      email: '',
      password: '',
      confirmPassword: ''
     })
    } catch ( err ) {
      console.log(err)
    }
  };
  
  handleChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  render() {
    const {displayName, email, password, confirmPassword} = this.state
    return (
      <div className='sign-up'>

        <h2 className='title'>I do not have a account</h2>
        <span>Sign up with your email and password</span>

        <form className='sign-up-form' onSubmit={this.handleSubmit}>
          <FormInput type='text' name='displayName' 
            value={displayName} onChange={this.handleChange} 
            label='Display Name' require="true" />

          <FormInput type='text' name='email' 
            value={email} onChange={this.handleChange} 
            label='Email' require="true" />

          <FormInput type='password' name='password' 
            value={password} onChange={this.handleChange} 
            label='Password' require="true" />

          <FormInput type='password' name='confirmPassword' 
            value={confirmPassword} onChange={this.handleChange} 
            label='Confirm Password'require="true" />

            <CustomButton type='submit'>Sign Up</CustomButton>
        </form>

      </div>
    )
  }
}

export default SignUp;