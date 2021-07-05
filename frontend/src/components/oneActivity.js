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

    const [backgroundImage3, setBackgroundImage3] = useState(null);
    const [backgroundImage4, setBackgroundImage4] = useState(null);
    const [backgroundImage5, setBackgroundImage5] = useState(null);

    const [backgroundImage6, setBackgroundImage6] = useState(null);
    const [backgroundImage7, setBackgroundImage7] = useState(null);
    const [backgroundImage8, setBackgroundImage8] = useState(null);

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
            console.log(data)
            console.log(data.results[3].urls.full)
            const imageFound = data.results[1].urls.small
            const imageFound1 = data.results[2].urls.small
            const imageFound2 = data.results[3].urls.small
            const imageFound3 = data.results[4].urls.small
            const imageFound4 = data.results[5].urls.small
            const imageFound5 = data.results[6].urls.small
            const imageFound6 = data.results[7].urls.small
            const imageFound7 = data.results[8].urls.small
            const imageFound8 = data.results[9].urls.small

            setBackgroundImage(imageFound);
            setBackgroundImage1(imageFound1);
            setBackgroundImage2(imageFound2);

            setBackgroundImage3(imageFound3);
            setBackgroundImage4(imageFound4);
            setBackgroundImage5(imageFound5);

            setBackgroundImage6(imageFound6);
            setBackgroundImage7(imageFound7);
            setBackgroundImage8(imageFound8);
        })  
         } catch (error) {
            
            }
        })
    
    return (         
        <div  className="one-activity-component">
            {loading && <p> { loading } </p> }
            { activity && <h3 className="name-activity"> {activity.name} </h3> }
            { activity && <p className="description-activity"> {activity.description} </p> }
            <div className="d-flex justify-content-center align-items-center">
                { activity && <div style={{backgroundImage: `url("${backgroundImage}")`, backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }} className="frame-location-photo mx-5"> { activity && <p className="city-location"> <strong> {activity.location} </strong> </p> } </div> }
                { activity && <div style={{backgroundImage: `url("${backgroundImage1}")`, backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }} className="frame-location-photo mx-5"> { activity && <p className="city-location"> <strong> {activity.location} </strong> </p> } </div> }
                { activity && <div style={{backgroundImage: `url("${backgroundImage2}")`, backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }} className="frame-location-photo mx-5"> { activity && <p className="city-location"> <strong> {activity.location} </strong> </p> } </div> }
            </div>
            <div className="d-flex justify-content-center align-items-center">
                { activity && <div style={{backgroundImage: `url("${backgroundImage3}")`, backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }} className="frame-location-photo mx-5"> { activity && <p className="city-location"> <strong> {activity.location} </strong> </p> } </div> }
                { activity && <div style={{backgroundImage: `url("${backgroundImage4}")`, backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }} className="frame-location-photo mx-5"> { activity && <p className="city-location"> <strong> {activity.location} </strong> </p> } </div> }
                { activity && <div style={{backgroundImage: `url("${backgroundImage5}")`, backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }} className="frame-location-photo mx-5"> { activity && <p className="city-location"> <strong> {activity.location} </strong> </p> } </div> }
            </div>
            <div className="d-flex justify-content-center align-items-center">
                { activity && <div style={{backgroundImage: `url("${backgroundImage6}")`, backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }} className="frame-location-photo mx-5"> { activity && <p className="city-location"> <strong> {activity.location} </strong> </p> } </div> }
                { activity && <div style={{backgroundImage: `url("${backgroundImage7}")`, backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }} className="frame-location-photo mx-5"> { activity && <p className="city-location"> <strong> {activity.location} </strong> </p> } </div> }
                { activity && <div style={{backgroundImage: `url("${backgroundImage8}")`, backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }} className="frame-location-photo mx-5"> { activity && <p className="city-location"> <strong> {activity.location} </strong> </p> } </div> }
            </div>
            { activity && <p> {activity.category} </p> }
            { error && <p> {error} </p>  }
            { !error && <button className="btn btn-danger" onClick={ handleDelete } > Borrar Actividad </button> }
        </div>
     );
}
 
export default OneActivity;
