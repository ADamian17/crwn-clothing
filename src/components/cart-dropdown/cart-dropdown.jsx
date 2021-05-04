import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect'
import { withRouter } from 'react-router-dom'


import './cart-dropdown.scss';

import CustomButton from '../customeButtom/customeButtom';
import CartItem from '../cart-item/cart-item';
import { selectCartItems } from '../../redux/cart/cart.selector';
import { toggleCartHidden } from '../../redux/cart/cart.actions';

const CartDropdown = ({ cartItems, history, dispatch }) => {

  return (
    <div className="cart-dropdown ">
      <div className="cart-items">
        {
          cartItems.length ?
            (
              cartItems.map((cartItem) => (
                <CartItem key={cartItem.id} item={cartItem} />
              ))

            ) :
            (
              <span className="empty-message">Your cart is empty</span>
            )
        }
      </div>
      <CustomButton onClick={() => {
        history.push('/checkout')
        dispatch(toggleCartHidden())
      }}>GO CHECKOUT</CustomButton>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
});

export default withRouter(connect(mapStateToProps)(CartDropdown));
