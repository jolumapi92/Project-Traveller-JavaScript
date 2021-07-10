import React from 'react';
import useFetch from './useFetch';
import {  useParams } from "react-router-dom";
import { useState, useEffect } from 'react';

const MyJourneys = () => {

    const [incomingData, setIncomingData] = useState(null);
    const { idEvent } = useParams();

    const { data: elements, error, loading } = useFetch('/getAllJourneysFromAnEvent/' + idEvent)

    useEffect(() => {
        if(elements === null) {
            setIncomingData(null)
        } else {
            setIncomingData(elements)
        }
    })
    
    
   
    return ( 
        <section className="side-bar-tickeout-activities text-light">
            {loading  && <p>Please wait...</p> }
            <h1 className="border-bottom border-warning border-2 text-light">My Journey</h1>
            <div>
                <ol>
                    { incomingData && incomingData[0].activities.map( element => {return <li>{element.name}</li>  } ) }
                    { !incomingData && <p>Nothing found...</p> }
                </ol>
            </div>
            {error && error}
        </section>
     );
}
 
export default MyJourneys;