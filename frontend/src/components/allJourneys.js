import React from 'react';
import useFetch from './useFetch';
import {  useParams } from "react-router-dom";

const MyJourneys = () => {
    const { idEvent } = useParams();
    const { data: elements, error, loading } = useFetch('/getAllJourneysFromAnEvent/' + idEvent)
    

    return ( 
        <section>
            <h1>My Journey</h1>
            <div>
                <ul>
                    {elements && <li>{elements[0].activities[0].name}</li> }
                </ul>
            </div>
        </section>
     );
}
 
export default MyJourneys;