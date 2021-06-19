import useFetch from './useFetch';


const AllBookings = () => {
    const { data: events , loading, error } = useFetch('/events');


    return ( 
        <section className="p-5 d-flex align-items-center justify-content-center main-form-section">
            { loading && loading }
            { events && events.map( element => { return <div className="col-10 card-event my-5"> <p> Location: {element.location} </p> <p> Agent: {element.agent.username}</p> <p> Members: {element.number}</p></div>} ) }
            { error && error }
        </section>
     );
}
 
export default AllBookings;