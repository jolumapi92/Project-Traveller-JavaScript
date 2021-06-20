const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
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

app.use(cors({ origin: true, credentials: true }));
app.use(bodyParser.json());
app.use(express.json())
app.use(cookieParser());


// ///////////////////////Routes for the application/////////////////////
const routerActivities = require('./Router/activities');
app.use(routerActivities);

const routerUsers = require('./Router/users');
app.use(routerUsers);

const routerTravellers = require('./Router/travellers');
app.use(routerTravellers);

const routerEvents = require('./Router/events');
app.use(routerEvents);

const routerJourney = require('./Router/journeys');
app.use(routerJourney);

app.listen(PORT)

if(process.env.NODE_ENV === 'production') {
  app.use(express.static('frontend/build'))
}

console.log(`Your app is up and running and listening on port: ${PORT}`)
