const express = require('express');
const app = express();
const mongoose = require('mongoose');

require('dotenv').config();

// Connecting to the Data Base /////////////

mongoose.connect(process.env.DATABASE,
  { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true }
);

const db = mongoose.connection;
db.on('error', (err) => {
  console.log('Error connecting to database', err)
})
db.once('open', () => {
  console.log('Connection successful: Your app is now connected to the Data Base')
})

//////////////////DATABASE///////////////////////////////////
