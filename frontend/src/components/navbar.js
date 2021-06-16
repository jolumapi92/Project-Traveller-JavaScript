import { Link, useHistory } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';

const Navbar = () => {

    const history = useHistory();
    const [user,  setUser] = useState();

    useEffect(() => {
        try {
            axios({
                method: "GET",
                url: "/cookie"
            })
            .then( res => {
                console.log(res.data);
                setUser(res.data);
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

    return ( 
        <nav className="navbar navbar-expand-lg navbar-light" id="mainNav">
            <div className="container px-4 px-lg-5">
                <Link to="/"><h4>Concierge Traveller</h4></Link>
                <div className="collapse navbar-collapse" id="navbarResponsive">
                    <ul className="navbar-nav ms-auto">
                        { !user && <Link to="/login" ><button className="btn btn-warning">Login</button></Link>}
                        { user && <Link to="/createActivity" ><button className="btn btn-warning mx-3">Crear Actividad</button></Link>}
                        { user && <a onClick={deleteSession} ><button className="btn btn-warning">Logout</button></a> }
                    </ul>
                </div>
            </div>
        </nav>
     );
}
 
export default Navbar;