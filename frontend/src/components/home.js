import useFetch from './useFetch';
import { Link } from 'react-router-dom';


const Home = () => {
    const { data: activities , loading, error } = useFetch('/activities');


    return ( 
        <div className="">
            <h1 className="my-5">Welcome to Concierge Traveller</h1>
            <div className="d-flex justify-content-center align-items-center home-component">
                { loading && <p> { loading } </p> }
                { activities &&  activities.map( element => <Link to={`/activities/${element._id}`}> <div className="card-activity"> { element.name } </div> </Link> )}
                { error && <p> {error} </p> }
            </div>
        </div>
     );
}
 
export default Home;