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
        <section className="side-bar-tickeout-activities text-dark p-5">
            
            <h1 className="border-bottom border-warning border-2 text-light mt-1">My Journey</h1> 
                <div className="ticket-for-journey p-3">
                        {loading && <p className="text-dark">Loading</p> }
                        { incomingData && incomingData[0].activities.map( element => {return <p>{element.name}</p>  } ) }
                        { !incomingData && <p className="legend-not-found">Nothing found...Please select the activities you'd like to include. Click on your boarding pass!</p> }
                    
                    <p className="border-top border-warning border-1 points-legend">Puntos</p>
                    <p className="border-top border-warning border-5 price-legend">Total</p>
                    <div className="color-div-1"></div>
                    <div className="color-div-2"></div>
                    <div className="color-div-3"></div>
                </div>
            {error && error}
        </section>
     );
}
 
export default MyJourneys;