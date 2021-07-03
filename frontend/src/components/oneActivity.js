import useFetch from './useFetch';
import {  useParams, useHistory } from "react-router-dom";
import React from 'react';
import { useEffect, useState } from 'react';

const OneActivity = () => {
    const history = useHistory();
    const { id } = useParams();
    const { data: activity, loading, error } = useFetch('/activities/' + id )
    const [backgroundImage, setBackgroundImage] = useState(null);
    const [backgroundImage1, setBackgroundImage1] = useState(null);
    const [backgroundImage2, setBackgroundImage2] = useState(null);

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
            console.log(data.results[3].urls.full)
            const imageFound = data.results[1].urls.full
            const imageFound1 = data.results[2].urls.full
            const imageFound2 = data.results[3].urls.full
            setBackgroundImage(imageFound);
            setBackgroundImage1(imageFound1);
            setBackgroundImage2(imageFound2);
        })  
         } catch (error) {
            
            }
        })
    
    return (         
        <div  className="one-activity-component">
            {loading && <p> { loading } </p> }
            { activity && <h3> {activity.name} </h3> }
            { activity && <p> {activity.description} </p> }
            <div className="d-flex justify-content-center align-items-center">
                { activity && <div style={{backgroundImage: `url("${backgroundImage}")`, backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }} className="frame-location-photo mx-5"> { activity && <p className="city-location"> <strong> {activity.location} </strong> </p> } </div> }
                { activity && <div style={{backgroundImage: `url("${backgroundImage1}")`, backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }} className="frame-location-photo mx-5"> { activity && <p className="city-location"> <strong> {activity.location} </strong> </p> } </div> }
                { activity && <div style={{backgroundImage: `url("${backgroundImage2}")`, backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }} className="frame-location-photo mx-5"> { activity && <p className="city-location"> <strong> {activity.location} </strong> </p> } </div> }
            </div>
            { activity && <p> {activity.category} </p> }
            
            { error && <p> {error} </p>  }
            { !error && <button className="btn btn-danger" onClick={ handleDelete } > Borrar Actividad </button> }
        </div>
     );
}
 
export default OneActivity;
