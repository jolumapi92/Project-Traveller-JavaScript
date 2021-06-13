const express = require('express');
const app = express();
const mongoose = require('mongoose');

require('dotenv').config();

const PORT = process.env.PORT || 8000;

// Connecting to the Data Base ////////////

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

app.get('/', (req, res) => {
  res.json({app: 'your app has been created succesfully'})
})

app.listen(PORT)

console.log(`Your app is up and running and listening on port: ${PORT}`)
