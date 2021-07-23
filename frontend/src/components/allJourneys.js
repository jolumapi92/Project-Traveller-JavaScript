import React from 'react';
import useFetch from './useFetch';
import {  useParams } from "react-router-dom";
import { useState, useEffect } from 'react';

const MyJourneys = () => {

    const [price, setPrice] = useState(null)
    const [incomingData, setIncomingData] = useState(null);
    const [points, setPoints] = useState(null);
    
    const { idEvent } = useParams();

    const { data: elements, error, loading } = useFetch('/getAllJourneysFromAnEvent/' + idEvent)

    useEffect(() => {
        if(elements === null) {
            setIncomingData(null)
        } else {
            setIncomingData(elements)
            let sum = 0;
            elements[0].activities.forEach( element => {
            sum += element.points; 
        })
        setPoints(sum)
        const finalPrice = sum * 15;
        setPrice(finalPrice)
        }
    })
    
    
   
    return ( 
        <section className="side-bar-tickeout-activities text-dark p-5">
            
            <h1 className="border-bottom border-warning border-2 text-light mt-1">My Journey</h1> 
                <div className="ticket-for-journey p-3">
                        {loading && <p className="text-dark">Loading</p> }
                        { incomingData && incomingData[0].activities.map( element => {return <p>{element.name}</p>  } ) }
                        { !incomingData && <p className="legend-not-found">Nothing found...Please select the activities you'd like to include. Click on your boarding pass!</p> }
                    <p className="points-legend-1">{points}</p>
                    { points && <p className="border-top border-warning border-1 points-legend">Puntos</p>}
                    { price && <p className=" price-legend-1"> Total </p>}
                    { price && <p className="border-top border-warning border-5 price-legend"> $ { price } USD </p>}
                    <div className="color-div-1"></div>
                    <div className="color-div-2"></div>
                    <div className="color-div-3"></div>
                </div>
            {error && error}
        </section>
     );
}
 
export default MyJourneys;