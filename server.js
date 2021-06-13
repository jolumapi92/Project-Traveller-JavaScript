const express = require('express');
const app = express();
const mongoose = require('mongoose');

require('dotenv').config();

const PORT = process.env.PORT || 8000;

//////////////////DATABASE///////////////////////////////////

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

// ////////////Middlewares/////////////////////////////////

// Parses the object coming as a request


app.use(express.json())
app.use(cookieParser());


// ///////////////////////Routes for the application/////////////////////

app.get('/', (req, res) => {
  res.json({app: 'your app has been created succesfully', DataBase: 'The connection to the DataBase has also been established'})
})

app.listen(PORT)

console.log(`Your app is up and running and listening on port: ${PORT}`)
