import axios from 'axios';
import { useState } from 'react';
import { useHistory, Link } from 'react-router-dom';
import React from 'react';

const LoginTraveller = () => {

    const [ email, setEmailLog ] = useState('');
    const [ keyword, setPasswordLog ] = useState('');

    const history = useHistory();


    const login = () => {
        try {
            console.log(keyword)
            console.log(email)
            axios({
                method: "POST",
                data: {
                    email: email,
                    password: keyword
                },
                withCredentials: true,
                url: '/travellerLogin',
            }).then( res => {
                const data = res.data
                if(data){
                    history.push('/');
                    window.location.reload();
                }
            })
        } catch (error) {
            console.log(error)
        }
    }



    return ( 
        <div className="login-component">
            <div className="form-login">
                <h1 className="traveller-header">Traveller</h1>
                <h1 className="mb-5">Log in</h1>
                <div>
                    <input className="box-input" placeholder="email" onChange={ event => setEmailLog(event.target.value) }/>
                </div>
                <div>
                    <input className="box-input" type="password" placeholder="password" onChange={ event => setPasswordLog(event.target.value) }/>
                </div>
                <button className="btn mt-5 primary-button" onClick={login}>Enter</button>
                <Link className="text-light enter-button" to="/login">Concierge</Link>
            </div>
        </div>
     );
}
 
export default LoginTraveller
;