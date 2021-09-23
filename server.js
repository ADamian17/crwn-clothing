/* External Modules */
const express = require("express");
const cors = require("cors");
const path = require("path"); 


const app = express();

const PORT = 4000;

if (process.env.NODE_ENV === 'production') require("dotenv").config()


app.listen(PORT, () =>
  console.log(`Listening for client requests on port ${PORT}`)
);