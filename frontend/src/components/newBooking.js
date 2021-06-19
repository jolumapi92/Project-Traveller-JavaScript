import { useState } from 'react';
import { useHistory } from 'react-router-dom'

const NewBooking = () => {
    const history = useHistory();

    const [location, setLocation] = useState('');
    const [agent, setAgent] = useState('');
    const [number, setNumber] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        const booking = { location, agent, number };

        fetch('/activities', {
            method: "POST",
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(booking)
        }).then( () => {
            console.log('New booking added');
            history.push('/')
        }).catch((err)=> {
            console.log(err)
        })
    }


    return (
        <section className="p-5 d-flex align-items-center justify-content-center main-form-section"> 
            <h1>Journey</h1>
            <form onSubmit={ handleSubmit } className="col-6 form-new-bookin">
                <select>
                    <option value="" key="">Cuernavaca</option>
                    <option value="" key="">Acapulco</option>
                    <option value="" key="">Merida</option>
                    <option value="" key="">Cancun</option>
                    <option value="" key="">Veracruz</option>
                    <option value="" key="">Jalisco</option>
                </select>
                <select>
                    <option value="" key="">Tania</option>
                    <option value="" key="">Fernando</option>
                </select>
                <input
                type="number"
                placeholder="How many travellers"
                />
                <button className="btn btn-success">Start Journey</button>
            </form>
        </section>
     );
}
 
export default NewBooking;