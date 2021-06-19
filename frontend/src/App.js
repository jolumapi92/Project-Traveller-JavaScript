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
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
