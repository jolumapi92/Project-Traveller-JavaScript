import useFetch from './useFetch';
import { Link } from 'react-router-dom';
import React, { useEffect, useState } from 'react';

const ActivitiesIndex = () => {
    const { data: activities , loading, error } = useFetch('/activities');
    const [background, setBackground] = useState(null);

    try {
        const usingImages = () => {
            for (let index = 0; index < activities.length; index++) {
                let element = activities[index];
                console.log(element)
            }
        }
        usingImages();
    } catch (error) {
        
    }
 

    
    
    useEffect(() => {
    fetch('https://api.unsplash.com/search/photos?page=1&query=mexico',{
        method: 'GET',
        headers: {
            'Authorization':  `Client-ID ${process.env.REACT_APP_API_URL}`
        }
    }).then((res) => res.json()).then(data => {
        console.log(data.results[0].urls.full)
        const imageFound = data.results[3].urls.full
        setBackground(imageFound);
    })
    })

    return ( 
        <div className="home-component-main-index-activities p-5"> 
                { loading && <p> { loading } </p> }
                { activities &&  activities.map( element => <Link to={`/activities/${element._id}`}> <div className="card-activity-index-home"> <p className="activity-name">{ element.name }</p> </div> </Link> )}
                { error && <p> {error} </p> }
        </div>
     );
}
 
export default ActivitiesIndex;