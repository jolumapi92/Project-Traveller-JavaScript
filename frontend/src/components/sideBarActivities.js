import useFetch from './useFetch';
import {  useParams, useHistory } from "react-router-dom";
import React from 'react';

const EventActivities = () => {
    const { id } = useParams();
    const { data: activities, loading, error } = useFetch('/eventActivities/' + id);

    return ( 
        <div className="side-bar-activities">
            <h3 className="border-bottom border-warning border-4">Activities</h3> 
            <p>These are all the activities you can choose from according to the location you selected.</p> 
            {loading && loading }
            <div className="all-activities-container">
                { activities && activities.map(activity => {return <div className="activities-from-location"> <p> <strong>Concept:</strong> {activity.name} </p> <p> <strong>Description:</strong>  {activity.description}</p> <p> <strong>Category:</strong> {activity.category}</p> </div> }) }
            </div>
            {error && error}
        </div>
     );
}
 
export default EventActivities;