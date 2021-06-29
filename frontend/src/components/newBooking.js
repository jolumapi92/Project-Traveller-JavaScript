import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import React from 'react';

const NewBooking = () => {
    const history = useHistory();

    const [location, setLocation] = useState('Cuernavaca');
    const [agent, setAgent] = useState('60c7c4df6650ae270c4aba1a');
    const [number, setNumber] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        const booking = { location, agent, number };

        fetch('/postEventTraveller', {
            method: "POST",
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(booking)
        }).then( () => {
            console.log('New booking added');
            history.push('/Allbookings')
        }).catch((err)=> {
            console.log(err)
        })
    }


    return (
        <section className="p-5 d-flex align-items-center justify-content-center main-form-section"> 
            <h1>Journey</h1>
            <form onSubmit={ handleSubmit } className="col-6 form-new-bookin">
                <select
                value={location}
                required
                onChange={ (event) => { setLocation(event.target.value) } }
                >
                    <option value="Cuernavaca">Cuernavaca</option>
                    <option value="Acapulco">Acapulco</option>
                    <option value="Merida">Merida</option>
                    <option value="Cancun">Cancun</option>
                    <option value="Veracruz">Veracruz</option>
                    <option value="Jalisco">Jalisco</option>
                </select>
                <select
                value={agent}
                required
                onChange={ (event) => { setAgent(event.target.value) } }
                >
                    <option value="60c7c4df6650ae270c4aba1a">Alejandra</option>
                    <option value="60c7c5e383bd9227886f49ea">Mario</option>
                </select>
                <input
                type="number"
                required
                value={ number }
                onChange={ (event) => { setNumber(event.target.value) } }
                placeholder="How many travellers"
                />
                <button className="btn btn-success">Start Journey</button>
            </form>
        </section>
     );
}
 
export default NewBooking;