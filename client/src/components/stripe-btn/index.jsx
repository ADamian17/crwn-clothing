import React from 'react';
import axios from 'axios';


import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutBtn = ({ price }) => {

  const priceForStripe = price * 100;

  const handleToken = (token) => {
    axios.post({
      url: 'payment',
      method: 'post',
      data: {
        amount: priceForStripe,
        token
      }
    })
      .then((res) => console.log({ res }))
      .catch((error) => console.log(error))
  }

  return (
    <StripeCheckout
      label="Pay Now"
      name="CRWN Clothing Ltd."
      billingAddress
      shippingAddress
      image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlZvH6wqmQ5GhCyyhFwZHYfXwGxH7aAvmG4w&usqp=CAU"
      description={`Your Total is $${price}`}
      panelLabel="Pay now"
      token={handleToken}
      stripeKey={process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY} />
  )
};

export default StripeCheckoutBtn;