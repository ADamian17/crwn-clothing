import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { useHistory } from 'react-router-dom'

import CustomButton from '../customeButtom/customeButtom';
import CartItem from '../cart-item/cart-item';

import { selectCartItems } from '../../redux/cart/cart.selector';
import { toggleCartHidden } from '../../redux/cart/cart.actions';

import './cart-dropdown.scss';

const CartDropdown = (props) => {

  const history = useHistory()
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);

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
      }}>
        GO CHECKOUT
      </CustomButton>
    </div>
  );
};

export default CartDropdown;
