import useFetch from './useFetch';
import {  useParams, useHistory } from "react-router-dom";

const EventActivities = () => {
    const { id } = useParams();
    const { data: activities, loading, error } = useFetch('/eventActivities/' + id);

    return ( 
        <div className="side-bar-activities">
            <h3 className="border-bottom border-warning border-4">Activities</h3> 
            <p>These are all the activities you can choose from according to the location you selected.</p> 
            {loading && loading }
            { activities && activities.map(activity => {return <div> <p> <strong>Concept:</strong> {activity.name} </p> <p> <strong>Category:</strong>  {activity.description}</p> <p> <strong>Category:</strong> {activity.category}</p> </div> }) }
            {error && error}
        </div>
     );
}
 
export default EventActivities;