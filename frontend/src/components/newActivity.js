import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import React from 'react';

const CreateActivity = () => {
    const [name, setName] = useState('');
    const [location, setLocation] = useState('');
    const [category, setCategory] = useState('');
    const [description, setDescription] = useState('');
    const [points, setPoints] = useState('');

    const history = useHistory();
    const handleSubmit = (event) => {
        event.preventDefault();
        const activity = { name, location, category, description, points };

        fetch('/activities', {
            method: "POST",
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(activity)
        }).then( () => {
            console.log('New activity added');
            history.push('/allActivities')
        }).catch((err)=> {
            console.log(err)
        })
    }


    return ( 
        <div className="d-flex justify-content-center align-items-center manager-new-activity">
            <h1>Create a new entry for activity</h1>
            <form  className="mb-5" onSubmit={ handleSubmit }>
                <input type="text"
                placeholder="Name of the activity"
                required
                value={name}
                onChange={ (event) => { setName(event.target.value) } }
                />
                <br/>
                <input type="text"
                placeholder="Location"
                required
                value={location}
                onChange={ (event) => { setLocation(event.target.value) } }
                />
                <br/>
                <input type="text"
                placeholder="Category"
                required
                value={category}
                onChange={ (event) => { setCategory(event.target.value) } }
                />
                <br/>
                <input type="text"
                placeholder="Description"
                required
                value={description}
                onChange={ (event) => { setDescription(event.target.value) } }
                />
                <br/>
                <input type="number"
                placeholder="Points"
                required
                value={points}
                onChange={ (event) => { setPoints(event.target.value) } }
                />
                <br/>
                <button className="btn btn-warning mt-3">Create</button>
            </form>
        </div>
     );
}
 
export default CreateActivity;