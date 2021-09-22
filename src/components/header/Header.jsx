import React from 'react';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { auth } from '../../fireBase/firebase';
import CartIcon from '../cart-icon/cart-icon';
import CartDropdown from '../cart-dropdown/cart-dropdown';
import { selectCartHidden } from '../../redux/cart/cart.selector';
import { selectCurrentUser } from '../../redux/user/user.selector';


import { signOutStart } from '../../redux/user/user.actions';

import { ReactComponent as Logo } from '../../assets/crown.svg';

import {
  HeaderContainer,
  LogoContainer,
  OptionLink,
  OptionsContainer
} from './Header.styled';

const Header = ({ currentUser, hidden, signOutStart }) => {
  return (
    <HeaderContainer>

      <LogoContainer to="/">
        <Logo className="logo" />
      </LogoContainer>

      <OptionsContainer>

        <OptionLink to="/shop">
          Shop
        </OptionLink>

        <OptionLink to="/shop">
          Contact
        </OptionLink>

        {currentUser ? (
          <OptionLink as="div" onClick={signOutStart}>
            Sign Out
          </OptionLink>
        ) : (
          <OptionLink to="/signin">
            Sign In
          </OptionLink>
        )}
        <CartIcon />
      </OptionsContainer>
      {hidden ? null : <CartDropdown />}
    </HeaderContainer>
  );
};

// NOTE other way to discontruction
const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden,
});

const mapDispatchToProps = dispatch => ({
  signOutStart: () => dispatch(signOutStart())
})

export default connect(mapStateToProps, mapDispatchToProps)(Header);
