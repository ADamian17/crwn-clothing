import React, { useState } from 'react';

import { useDispatch } from 'react-redux';

import FormInput from '../formInput/FormtInput';
import CustomButton from '../customeButtom/customeButtom';

import { googleSignInStart, emailSignInStart } from '../../redux/user/user.actions';

import './sign-in.scss';

function SignIn() {
  const dispatch = useDispatch()

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault()
    dispatch(emailSignInStart({ email, password }))
  }

  return (
    <div className="sign-in">
      <h2>I already have an account </h2>
      <span>Sign in with your email and password</span>

      <form onSubmit={handleSubmit}>

        <FormInput
          name="email"
          type="email"
          value={email}
          label="email"
          handleChange={(e) => setEmail(e.target.value)}
          required />

        <FormInput
          name="password"
          type="password"
          value={password}
          handleChange={(e) => setPassword(e.target.value)}
          label="password"
          required />

        <div className='buttons'>
          <CustomButton type="submit" >
            Sign In
          </CustomButton>
          <CustomButton
            type="button"
            isGoogleSignIn
            onClick={() => dispatch(googleSignInStart())}>
            sign google
          </CustomButton>
        </div>
      </form>
    </div>
  )
}

export default SignIn;
