import React from 'react';
import useFetch from './useFetch';
import {  useParams } from "react-router-dom";
import { useState, useEffect } from 'react';
import { load } from 'dotenv';

const MyJourneys = () => {

    const [incomingData, setIncomingData] = useState(null);
    const { idEvent } = useParams();

    const { data: elements, error, loading } = useFetch('/getAllJourneysFromAnEvent/' + idEvent)
   
   
    
   
    return ( 
        <section className="side-bar-tickeout-activities">
            {loading  && <p>Please wait...</p> }
            <h1 className="border-bottom border-warning border-3">My Journey</h1>
            <div>
                <ol>
                    { elements && elements[0].activities.map( element => {return <li>{element.name}</li>  } ) }
                </ol>
                { !elements && <p>Nothing here. Please click on your boarding pass to select your activities.</p> } 
            </div>
            {error && error}
        </section>
     );
}
 
export default MyJourneys;