import useFetch from './useFetch';
import { Link } from 'react-router-dom';
import React from 'react';



const Home = () => {
    const { data: activities , loading, error } = useFetch('/activities');
    

    return ( 
        <div className="home-component-main"> 
                { loading && <p> { loading } </p> }
                { activities &&  activities.map( element => <Link to={`/activities/${element._id}`}> <div  className="card-activity"> <p className="activity-name">{ element.name }</p> </div> </Link> )}
                { error && <p> {error} </p> }
        </div>
     );
}
 
export default Home;
