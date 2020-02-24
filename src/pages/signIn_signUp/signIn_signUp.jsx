import React from 'react';

import './signIn_signUp.scss';
import SignIn from '../../components/signIn/SignIn';
import SignUp from '../../components/signUp/signUp';

const SignInSignUp = () => {
  return (
    <div className='sign-in-and-sign-up'>
      < SignIn />
      < SignUp />
    </div>
  )
}

export default SignInSignUp;