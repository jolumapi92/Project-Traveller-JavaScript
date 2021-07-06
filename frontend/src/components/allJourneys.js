import React from 'react';
import useFetch from './useFetch';
import {  useParams } from "react-router-dom";

const MyJourneys = () => {
    const { idEvent } = useParams();
    const { data, error, loading } = useFetch('/getAllJourneysFromAnEvent/' + idEvent);
    console.log(data)

    return ( 
        <section>
            <h1>My Journey</h1>
        </section>
     );
}
 
export default MyJourneys;