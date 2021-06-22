import { Link, useHistory } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import useFetch from './useFetch'

const Navbar = () => {   
    const { data: events } = useFetch('/events');
    const { data: agentEvents } = useFetch('/eventsAgent');

    const history = useHistory();
    const [user,  setUser] = useState(null);
    const [traveller, setTraveller] = useState(null);
    const [loading, setLoading] = useState(null);

    useEffect(() => {
        
            setLoading('loading....')
            axios({
                method: "GET",
                url: "/cookie"
            })
            .then( res => {
                if(res.data.notification === 'user not found'){
                    setLoading(null);
                    setUser(null)
                } else if(res.data.admin === true)
                {
                    setLoading(null);
                    setUser(res.data.user);
                }
            }).catch( (err) => {
                 setLoading(null);
                 console.log(err.response)
                })
        

        
            axios({
                method: "GET",
                url: "/getCookie"
            })
            .then( res => {
                if(res.data.notification === 'user not found'){
                    setTraveller(null);
                } else if(res.data.admin === false) {
                    setLoading(null);
                    setTraveller(res.data.user)
                }
                
            }).catch( (err) => { 
                setLoading(null);
                console.log(err.response)
            })
        


    }, []);

    const deleteSession = () => {
        axios({
            method: "GET",
            withCredentials: true,
            url: '/logOut',
         }).then( () => {
            setUser(null)
            setLoading(null)
            history.push('/');
         });
    }

    const deleteSessionTraveller = () => {
        axios({
            method: "GET",
            withCredentials: true,
            url: '/logoutTraveler',
         }).then( () => {
            setTraveller(null);
            setLoading(null);
            history.push('/');
         });
    }

    return ( 
        <nav className="navbar navbar-expand-lg navbar-light py-3" id="mainNav">
            <div className="container px-4 px-lg-5">
                { !user && !traveller && <Link to="/"><h4 className="border-bottom border-warning border-1">Concierge Traveller</h4></Link> }
                { user && <Link to="/"><h4 className="border-bottom border-warning border-1">Concierge Traveller: { user } </h4></Link> }
                { traveller && <Link to="/"><h4 className="border-bottom border-warning border-1" >Concierge Traveller: { traveller } </h4></Link> }
                <div className="collapse navbar-collapse" id="navbarResponsive">
                    <ul className="navbar-nav ms-auto">
                        { loading && <button className="btn btn-danger mx-3">Loading...please wait</button> }
                        { !user && !traveller && <Link to="/travellerLogin" ><button className="btn btn-warning">Login</button></Link>}
                        { traveller && events && <Link to='/Allbookings'>  <button className="btn btn-info mx-3">Journey</button></Link> }
                        { traveller && events && <Link to='/Allbookings'>  <button className="btn btn-warning ">My bookings</button></Link> }
                        { traveller && <Link to="/bookings" ><button className="btn btn-warning mx-3">Book</button></Link> }
                        { user && agentEvents && <Link to="/AllbookingsAgents" ><button className="btn btn-warning">Appointments</button></Link>}
                        { user && <Link to="/createActivity" ><button className="btn btn-warning mx-3">New Activity</button></Link>}
                        { user && <button onClick={deleteSession}  className="btn btn-warning">Logout</button> }
                        { traveller && <button onClick={deleteSessionTraveller}  className="btn btn-warning">Logout</button> }
                    </ul>
                </div>
            </div>
        </nav>
     );
}
 
export default Navbar;
