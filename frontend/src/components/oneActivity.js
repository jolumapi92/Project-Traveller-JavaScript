import useFetch from './useFetch';
import {  useParams, useHistory } from "react-router-dom";
import React from 'react';
import { useEffect, useState } from 'react';

const OneActivity = () => {
    const history = useHistory();
    const { id } = useParams();
    const { data: activity, loading, error } = useFetch('/activities/' + id )
    const [backgroundImage, setBackgroundImage] = useState('mexico');

    const handleDelete = () => {
        fetch('/activities/'+ id, {
            method: "DELETE"
        }).then((response) => {
            if(response.status === 403){
              return response.json();
            }
            // history.push('/');
        }).then( data => {
            console.log(data);
            if(data && data.notification === 'You need to be logged in'){
                history.push('/login');
            }
        })
    }


    useEffect(() => {
        try {
            fetch(`https://api.unsplash.com/search/photos?page=1&query=${activity.location}`,{
            method: 'GET',
            headers: {
                'Authorization':  `Client-ID ${process.env.REACT_APP_API_URL}`
            }
            }).then((res) => res.json()).then(data => {
            console.log(data.results[0].urls.full)
            const imageFound = data.results[3].urls.full
            setBackgroundImage(imageFound);
        })  
         } catch (error) {
            
            }
        })
    
    return (         
        <div style={{backgroundImage: `url("${backgroundImage}")`, backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }} className="one-activity-component">
            {loading && <p> { loading } </p> }
            { activity && <h3> {activity.name} </h3> }
            { activity && <p> {activity.location} </p> }
            { activity && <p> {activity.category} </p> }
            { activity && <p> {activity.description} </p> }
            { error && <p> {error} </p>  }

            { !error && <button className="btn btn-danger" onClick={ handleDelete } > Borrar Actividad </button> }
        </div>
     );
}
 
export default OneActivity;
