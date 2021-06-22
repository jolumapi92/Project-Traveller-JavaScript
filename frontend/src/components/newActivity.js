import { useState } from 'react';
import { useHistory } from 'react-router-dom' 

const CreateActivity = () => {
    const [name, setName] = useState('');
    const [location, setLocation] = useState('');
    const [category, setCategory] = useState('');
    const [description, setDescription] = useState('');

    const history = useHistory();
    const handleSubmit = (event) => {
        event.preventDefault();
        const activity = { name, location, category, description };

        fetch('/activities', {
            method: "POST",
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(activity)
        }).then( () => {
            console.log('New activity added');
            history.push('/')
        }).catch((err)=> {
            console.log(err)
        })
    }


    return ( 
        <div>
            <form onSubmit={ handleSubmit }>
                <input type="text"
                placeholder="Name of the activity"
                required
                value={name}
                onChange={ (event) => { setName(event.target.value) } }
                />
                <input type="text"
                placeholder="Location"
                required
                value={location}
                onChange={ (event) => { setLocation(event.target.value) } }
                />
                <input type="text"
                placeholder="Category"
                required
                value={category}
                onChange={ (event) => { setCategory(event.target.value) } }
                />
                <input type="text"
                placeholder="Description"
                required
                value={description}
                onChange={ (event) => { setDescription(event.target.value) } }
                />
                <button className="btn btn-primary">Registrar Actividad</button>
            </form>
        </div>
     );
}
 
export default CreateActivity;