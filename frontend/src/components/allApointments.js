import useFetch from './useFetch';
import React from 'react';

const AllApointments = () => {

    const { data: events , loading, error } = useFetch('/eventsAgent');


    return ( 
        <section className="p-5 d-flex align-items-center justify-content-center main-appointments">
            { loading && loading }
            { events && events.map( element => { return <div className="col-10 card-event my-5"> <p> Location: {element.location} </p> <p> Traveller: {element.traveller.name}</p> <p> Members: {element.number}</p></div>} ) }
            { error && error }
        </section>
     );
}
 
export default AllApointments;