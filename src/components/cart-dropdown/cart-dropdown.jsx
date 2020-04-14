import React from 'react';
import { connect } from 'react-redux';
import './cart-dropdown.scss';

import CustomButton from '../customeButtom/customeButtom';
import CartItem from '../cart-item/cart-item';

const CartDropdown = ({ cartItems }) => {
  return (
    <div className="cart-dropdown ">
      <div className="cart-items">
        {cartItems.map((cartItem) => (
          <CartItem key={cartItem.id} item={cartItem} />
        ))}
      </div>
      <CustomButton>GO CHECKOUT</CustomButton>
    </div>
  );
};

const mapStateToProps = ({ cart: { cartItems } }) => ({
  cartItems,
});

export default connect(mapStateToProps)(CartDropdown);
