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
import OneBooking from './components/oneBooking';
import EventActivities from './components/sideBarActivities';

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
              <Home />
            </Route>
            <Route path="/activities/:id">
              <OneActivity />
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
            <Route path="/Allbookings/:id">
              <div className="d-flex justify-content-center align-items-center">
                  <OneBooking/>
                  <EventActivities />
              </div>
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
