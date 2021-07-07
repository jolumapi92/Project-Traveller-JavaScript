import useFetch from './useFetch';
import { Link } from 'react-router-dom';
import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';


const AllBookings = () => {
    const { data: events , loading, error } = useFetch('/events');
    const [reversedArrayEvents, setReversedArrayEvents] = useState(null);

    useEffect( async() => {
        try {
            const reversed = await events.reverse();
            console.log(reversed)
            setReversedArrayEvents(reversed)
        } catch (error) {
            
        }
        
    }, [events])
        
            
       
            
   


    
   

    let [ retrieve, setRetrieve ] = useState(null);
    const [ loadingData, setLoadingData ] = useState(null);

    const [ background1, setBackground1 ] = useState(null);
    const [ background2, setBackground2 ] = useState(null);
    const [ background3, setBackground3 ] = useState(null);
    

    const handleClickTicket = async (id) => {
        setLoadingData('Loading...')
        setRetrieve(null)
        try {
            const datas = await axios.get('/getAllJourneysFromAnEvent/' + id)
            let locationData = datas.data[0].activities[0].location
            fetch(`https://api.unsplash.com/search/photos?page=1&query=${locationData}`, {
                method: 'GET',
                headers: {
                    'Authorization':  `Client-ID ${process.env.REACT_APP_API_URL}`
                }
                }).then((res) => res.json()).then(data => {
                    console.log(data)
                    const imageFromLocation1 = data.results[1].urls.small
                    const imageFromLocation2 = data.results[2].urls.small
                    const imageFromLocation3 = data.results[3].urls.small
    
                    setBackground1(imageFromLocation1);
                    setBackground2(imageFromLocation2);
                    setBackground3(imageFromLocation3);
                }) 
            setLoadingData(null)
            setRetrieve(datas)
            window.scrollTo(0, 0);
        } catch (error) {
            setLoadingData('Please subtmit your activities first')
            window.scrollTo(0, 0);
        }  
    }

    return ( 
        <section className="p-5 d-flex align-items-center justify-content-center main-section-allbookings">
            { loading && loading }
            { loadingData && loadingData }
            { retrieve && <div className="display-info-journey"> <h1 className="border-bottom border-warning border-3 header-journey-event-file">Journey</h1> { retrieve.data[0].activities.map( element => { return  <p>{ element.name }</p> } ) } <div className="d-flex justify-content-center align-items-center container-images-journey-popup">
                    <div className="image-for-journey" style={{backgroundImage: `url("${background1}")`, backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }} > </div> 
                    <div className="image-for-journey" style={{backgroundImage: `url("${background2}")`, backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }} > </div> 
                    <div className="image-for-journey" style={{backgroundImage: `url("${background3}")`, backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }} > </div> 
                 </div> </div> }
            { reversedArrayEvents && reversedArrayEvents.map( element => { return <Link to={`/Allbookings/${element._id}`}><div className="card-event my-5"> <p className="destination-ticket"> Destination: <strong> {element.location} </strong> </p> <p className="agent-name"> agent assigned: {element.agent.username}</p> <p className="traveller-name"> Traveller: {element.traveller.name}</p> <p className="number-of-passengers"> Passengers: {element.number}</p> <p className="purchased-date">booked: {element.createdAt}</p> <p className="unique-id">Vagabond Code: {element._id}</p> <p className="boarding-pass">Boarding Pass</p> <p className="type-traveller">Premium Class</p> <Link onClick={ () =>  { handleClickTicket(element._id) }  } className="button-journey"><button className="btn btn-info button-journey">Journey</button></Link> </div></Link>} ) }
            { error && error }
        </section>
     );
}
 
export default AllBookings;