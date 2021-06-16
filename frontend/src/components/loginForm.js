import axios from 'axios';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';


const LoginForm = () => {

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
                url: '/userLogin',
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
                <h1 className="mb-5">Log in</h1>
                <div>
                    <input className="box-input" placeholder="email" onChange={ event => setEmailLog(event.target.value) }/>
                </div>
                <div>
                    <input className="box-input" type="password" placeholder="password" onChange={ event => setPasswordLog(event.target.value) }/>
                </div>
                <button className="btn btn-primary mt-5" onClick={login}>Iniciar</button>
            </div>
        </div>
     );
}
 
export default LoginForm;