/* == External Modules == */
const express = require("express");
const path = require("path"); 

if (process.env.NODE_ENV === 'production') require("dotenv").config()
const app = express();

const PORT = process.env.PORT || 4000;

/* == Middleware == */
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

/* == Routes == */
if(process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, 'client/build')));

  app.get('*', (req, res) => res.sendFile( path.join(__dirname, 'client/build', 'index.html') ))
}

app.listen(PORT, () =>
  console.log(`Listening for client requests on port ${PORT}`)
);
