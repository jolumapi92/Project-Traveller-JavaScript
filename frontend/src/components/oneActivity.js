import useFetch from './useFetch';
import {  useParams, useHistory } from "react-router-dom";

const OneActivity = () => {
    const history = useHistory();
    const { id } = useParams();
    const { data: activity, loading, error } = useFetch('/activities/' + id )

    const handleDelete = () => {
        fetch('/activities/'+ id, {
            method: "DELETE"
        }).then((response) => response.json()).then( data => {
            console.log(data.notification);
            if(data.notification === 'You need to be logged in'){
                history.push('/login');
            }
        })
    }
    
    return (         
        <div className="one-activity-component">
            {loading && <p> { loading } </p> }
            { activity && <h3> {activity.name} </h3> }
            { activity && <p> {activity.location} </p> }
            { activity && <p> {activity.category} </p> }
            { activity && <p> {activity.description} </p> }
            { error && <p> {error} </p>  }

            <button className="btn btn-danger" onClick={ handleDelete } > Borrar Actividad </button>
        </div>
     );
}
 
export default OneActivity;