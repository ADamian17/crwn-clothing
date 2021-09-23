import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import FormInput from '../formInput/FormtInput';
import CustomButton from '../customeButtom/customeButtom';

import { signUpStart } from '../../redux/user/user.actions';

import './signUp.scss';

function SignUp() {

  const dispatch = useDispatch()

  const [email, setEmail] = useState('');
  const [displayName, setDisplayName] = useState('')
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState(null);


  const handleSubmit = async event => {
    event.preventDefault();

    if (password !== confirmPassword) {
      return setError("passwords don't match")
    }

    if (displayName === '' ||
      email === '' ||
      password === '' ||
      confirmPassword === ''
    ) {
      return setError('Fields can not be empty')
    }

    dispatch(signUpStart({ email, displayName, password }))
  };

  return (
    <div className='sign-up'>

      <h2 className='title'>I do not have a account</h2>
      <span>Sign up with your email and password</span>

      {
        error && <span>{error}</span>
      }

      <form className='sign-up-form' onSubmit={handleSubmit}>
        <FormInput
          type='text'
          name='displayName'
          value={displayName}
          onChange={(e) => setDisplayName(e.target.value)}
          label='Display Name'
          required />

        <FormInput
          type='text'
          name='email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          label='Email' require="true" />

        <FormInput
          type='password'
          name='password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          label='Password'
          required />

        <FormInput
          type='password'
          name='confirmPassword'
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          label='Confirm Password'
          required />

        <CustomButton type='submit'>Sign Up</CustomButton>
      </form>

    </div>
  )

}

export default SignUp;