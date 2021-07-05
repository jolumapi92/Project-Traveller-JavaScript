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
        <div className="footer-selecting-activities p-5">
            <h4 className="header-title-form border-bottom border-warning border-3">Submit your activities</h4>
            <p className="instructions-form-activities-event">Select the activities you want your journey to have</p>
            <form className="form-for-selecting-activities" onSubmit={handleSubmit}>
                <select multiple='true' onChange={handleChange}>
                    { activities && activities.map( activity => {return <option value={activity._id}>{activity.name}</option> }) }
                </select>
                <br/>
                <button className="btn btn-warning mt-3">Save Activities</button>
            </form>
        </div>
     );
}
 
export default FormBookingEvent;