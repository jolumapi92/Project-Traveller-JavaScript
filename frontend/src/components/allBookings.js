import useFetch from './useFetch';
import { Link } from 'react-router-dom';
import React from 'react';
import { useState, useEffect } from 'react';


const AllBookings = () => {
    const { data: events , loading, error } = useFetch('/eventsTraveller');
    const [reversedArrayEvents, setReversedArrayEvents] = useState(null);

    useEffect( async() => {
        try {
            const reversed = await events.reverse();
            console.log(reversed)
            setReversedArrayEvents(reversed)
        } catch (error) {
            
        }
    }, [events])
    

    // const handleClickTicket = async (id) => {
    //     setLoadingData('Loading...')
    //     setRetrieve(null)
    //     try {
    //         const datas = await axios.get('/getAllJourneysFromAnEvent/' + id)
    //         let locationData = datas.data[0].activities[0].location
    //         fetch(`https://api.unsplash.com/search/photos?page=1&query=${locationData}`, {
    //             method: 'GET',
    //             headers: {
    //                 'Authorization':  `Client-ID ${process.env.REACT_APP_API_URL}`
    //             }
    //             }).then((res) => res.json()).then(data => {
    //                 console.log(data)
    //                 const imageFromLocation1 = data.results[1].urls.small
    //                 const imageFromLocation2 = data.results[2].urls.small
    //                 const imageFromLocation3 = data.results[3].urls.small
    
    //                 setBackground1(imageFromLocation1);
    //                 setBackground2(imageFromLocation2);
    //                 setBackground3(imageFromLocation3);
    //             }) 
    //         setLoadingData(null)
    //         setRetrieve(datas)
    //         window.scrollTo(0, 0);
    //     } catch (error) {
    //         setLoadingData('Please subtmit your activities first')
    //         window.scrollTo(0, 0);
    //     }  
    // }

    return ( 
        <section className="p-5 d-flex align-items-center justify-content-center main-section-allbookings">
            { loading && loading }
            { reversedArrayEvents && reversedArrayEvents.map( element => { return <Link to={`/Allbookings/${element._id}`}><div className="card-event my-4"> <p className="destination-ticket"> Destination: <strong> {element.location} </strong> </p> <p className="agent-name"> agent assigned: {element.agent.username}</p> <p className="traveller-name"> Traveller: {element.traveller.name}</p> <p className="number-of-passengers"> Passengers: {element.number}</p> <p className="purchased-date">booked: {element.createdAt}</p> <p className="unique-id">Vagabond Code: {element._id}</p> <p className="boarding-pass">Boarding Pass</p> <p className="type-traveller">Premium Class</p> <Link to={`/MyJourney/${element._id}`}  className="button-journey"><button className="btn button-journey">Activities</button></Link> </div></Link>} ) }
            { error && error }
        </section>
     );
}
 
export default AllBookings;