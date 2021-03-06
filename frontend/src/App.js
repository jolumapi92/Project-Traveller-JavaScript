import './App.css';
import Navbar from './components/navbar.js';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LoginForm from './components/loginForm';
import Home from './components/home';
import OneActivity from './components/oneActivity';
import CreateActivity from './components/newActivity';
import LoginTraveller from './components/loginTraveller';
import NewBooking from './components/newBooking';
import AllBookings from './components/allBookings';
import AllApointments from './components/allApointments';
import EventActivities from './components/sideBarActivities';
import FormBookingEvent from './components/formBookingActivities';
import React  from 'react';
import LandingPage from './components/landingPage';
import MyJourneys from './components/allJourneys';
import ActivitiesIndex from './components/indexActivities';
import CheckoutPage from './components/CheckoutPage';

function App() {
  
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="main-content">
          <Switch>
            <Route exact path="/login">
              <LoginForm />
            </Route>
            <Route exact path="/">
              <LandingPage />
            </Route>
            <Route exact path="/allActivities">
              <ActivitiesIndex />
            </Route>
            <Route path="/activities/:id">
              <div className="d-flex">
                <OneActivity />
                <Home />
              </div>
            </Route>
            <Route path="/createActivity">
              <CreateActivity />
            </Route>
            <Route exact path="/travellerLogin">
              <LoginTraveller />
            </Route>
            <Route exact path="/bookings">
              <NewBooking/>
            </Route>
            <Route exact path="/Allbookings">
              <AllBookings />
            </Route>
            <Route exact path="/AllbookingsAgents">
              <AllApointments />
            </Route>
            <Route exact path="/MyJourney/:idEvent">
              <div className="d-flex justify-content-center background-of-ticket">
                <AllBookings />
                <MyJourneys />
              </div>
            </Route>
            <Route path="/Allbookings/:id">
              <div className="d-flex justify-content-center align-items-center">
                  <EventActivities />
                  <FormBookingEvent />
              </div>
            </Route>
            <Route exact path="/CheckoutAndPayment/:id">
              <CheckoutPage />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
