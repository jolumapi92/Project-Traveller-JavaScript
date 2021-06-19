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
import useFetch from './components/useFetch';


function App() {
  const { data: events , loading, error } = useFetch('/events');
  
  return (
    <Router>
      <div className="App">
        <Navbar events={events} />
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
              <AllBookings events={events} loading={loading} error={error} />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
