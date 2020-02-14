import React from 'react';
import { Link } from 'react-router-dom';
import { auth } from '../../fireBase/firebase';
 
import { ReactComponent as Logo } from '../../assets/crown.svg';
import './Header.scss';

const Header = ({ currentUser }) => {
  return (
    <div className='header'>
      <Link to='/'>
        < Logo className='logo' />
      </Link>
      <div className='options'>
        <Link className='option' to='/shop'>Shop</Link>
        <Link className='option' to='/shop'>Contact</Link>
        {
          currentUser ? <div className='option' onClick={() => auth.signOut()}> Sign Out</div> : <Link className='option' to='/signin'> Sign In </Link>  
        }
      </div>
    </div>
  )
} 


export default Header;