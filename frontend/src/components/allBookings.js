import useFetch from './useFetch';
import { Link } from 'react-router-dom';
import React from 'react';


const AllBookings = () => {
    const { data: events , loading, error } = useFetch('/events');


    return ( 
        <section className="p-5 d-flex align-items-center justify-content-center main-section-allbookings">
            { loading && loading }
            { events && events.map( element => { return <Link to={`/Allbookings/${element._id}`}><div className="card-event my-5"> <p className="destination-ticket"> Destination: <strong> {element.location} </strong> </p> <p className="agent-name"> agent assigned: {element.agent.username}</p> <p className="traveller-name"> Traveller: {element.traveller.name}</p> <p className="number-of-passengers"> Passengers: {element.number}</p> <p className="purchased-date">booked: {element.createdAt}</p> <p className="unique-id">Vagabond Code: {element._id}</p> <p className="boarding-pass">Boarding Pass</p> <p className="type-traveller">Premium Class</p> <Link className="button-journey" to={`/MyJourney/${element._id}`}><button className="btn btn-info button-journey">Journey</button></Link> </div></Link>} ) }
            { error && error }
        </section>
     );
}
 
export default AllBookings;