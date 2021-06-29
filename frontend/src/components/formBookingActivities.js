import { useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import useFetch from './useFetch';
import React from 'react';

const FormBookingEvent = () => {
    const history = useHistory();
    const { id } = useParams();
    const idEvent = id
    const { data: activities, loading, error } = useFetch('/eventActivities/' + id);
    const [collectedActivities, setCollectedActivities] = useState([]);

    const handleSubmit = (event) => {
        event.preventDefault();
        const activities = { collectedActivities, idEvent };

        fetch('/startingJourney', {
            method: "POST",
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(activities)
        }).then( () => {
            console.log('New activity added');
            history.push('/')
        }).catch((err)=> {
            console.log(err)
        })
    }

    const handleChange = (e) => {
        let options = e.target.options;
        let selectedOptions = [];

        for(let i = 0; i < options.length; i++) {
            if( options[i].selected ) {
                selectedOptions.push(options[i].value);
            }
        }

        setCollectedActivities(selectedOptions);
    }


    return ( 
        <div className="footer-selecting-activities">
            <form onSubmit={handleSubmit}>
                <select multiple='true' onChange={handleChange}>
                    { activities && activities.map( activity => {return <option value={activity._id}>{activity.name}</option> }) }
                </select>
                <button className="btn btn-warning">Save Activities</button>
            </form>
            <h4>Please submit your activities</h4>
        </div>
     );
}
 
export default FormBookingEvent;