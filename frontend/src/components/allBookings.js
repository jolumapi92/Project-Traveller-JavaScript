

const AllBookings = ({events, loading, error}) => {


    return ( 
        <section className="p-5 d-flex align-items-center justify-content-center main-form-section">
            { loading && loading }
            { events && events.map( element => <div className="col-10 card-event my-5">Location: {element.location} Agent: {element.agent} Members: {element.number}</div> ) }
            { error && error }
        </section>
     );
}
 
export default AllBookings;