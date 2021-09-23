/* == External Modules == */
const express = require("express");
const path = require("path"); 

if (process.env.NODE_ENV === 'production') require("dotenv").config()

const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

const PORT = process.env.PORT || 4000;

const app = express();

/* == Middleware == */
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

/* == Routes == */
if(process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, 'client/build')));

  app.get('*', (req, res) => res.sendFile( path.join(__dirname, 'client/build', 'index.html') ))
}

app.post('/payment', (req, res) => {
  const body = {
    source: req.body.token.id,
    amount: req.body.amount,
    currency: 'usd'
  }

  stripe.charges.create(body, (error, stripeRes) => {
    if(error) return res.status(500).json({error});

    res.status(200).json({
      stripeRes
    })
  })
})

app.listen(PORT, () =>
  console.log(`Listening for client requests on port ${PORT}`)
);
