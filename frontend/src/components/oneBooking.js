import useFetch from './useFetch';
import {  useParams, useHistory } from "react-router-dom";
import React from 'react';


const OneBooking = () => {
    const history = useHistory();
    const { id } = useParams();
    const { data: booking, loading, error } = useFetch('/events/' + id)

    

    return ( 
        <div className="one-activity-component">
            {loading && <p> { loading } </p> }
            { booking && <p>Agent: {booking.agent.username.toUpperCase()} </p> }
            { booking && <p> Destination: {booking.location} </p> }
            { booking && <p> Number of travellers: {booking.number} </p> }
            { error && <p> {error} </p>  }
        </div>
     );
}
 
export default OneBooking;