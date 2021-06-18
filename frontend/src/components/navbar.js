import { Link, useHistory } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';

const Navbar = () => {

    const history = useHistory();
    const [user,  setUser] = useState(null);
    const [traveller, setTraveller] = useState(null);

    useEffect(() => {
        try {
            axios({
                method: "GET",
                url: "/cookie"
            })
            .then( res => {
                console.log(res.data);
                if(res.data.admin === true){
                    setUser(res.data);
                }
            })
        } catch (error) {
            console.log(error)
        }

        try {
            axios({
                method: "GET",
                url: "/getCookie"
            })
            .then( res => {
                console.log(res.data);
                if(res.data.admin === false){
                    setTraveller(res.data);
                }
            })
        } catch (error) {
            console.log(error)
        }


    }, []);

    const deleteSession = () => {
        axios({
            method: "GET",
            withCredentials: true,
            url: '/logOut',
         }).then( () => {
            setUser(null)
            history.push('/');
         });
    }

    const deleteSessionTraveller = () => {
        axios({
            method: "GET",
            withCredentials: true,
            url: '/logoutTraveler',
         }).then( () => {
            setTraveller(null)
            history.push('/');
         });
    }

    return ( 
        <nav className="navbar navbar-expand-lg navbar-light" id="mainNav">
            <div className="container px-4 px-lg-5">
                <Link to="/"><h4>Concierge Traveller</h4></Link>
                <div className="collapse navbar-collapse" id="navbarResponsive">
                    <ul className="navbar-nav ms-auto">
                        { !user && !traveller && <Link to="/travellerLogin" ><button className="btn btn-warning">Login</button></Link>}
                        { traveller && <Link to="/bookings" ><button className="btn btn-warning mx-3">Book</button></Link> }
                        { user && <Link to="/createActivity" ><button className="btn btn-warning mx-3">Crear Actividad</button></Link>}
                        { user && <button onClick={deleteSession}  className="btn btn-warning">Logout</button> }
                        { traveller && <button onClick={deleteSessionTraveller}  className="btn btn-warning">Logout</button> }
                    </ul>
                </div>
            </div>
        </nav>
     );
}
 
export default Navbar;