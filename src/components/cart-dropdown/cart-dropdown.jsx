import React from 'react';

import './cart-dropdown.scss';

import CustomButton from '../customeButtom/customeButtom';

const CartDropdown = () => {
  return (
    <div className="cart-dropdown ">
      <div className="cart-items" />
      <CustomButton>GO CHECKOUT</CustomButton>
    </div>
  );
};

export default CartDropdown;
