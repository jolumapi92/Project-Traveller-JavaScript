import React from 'react';
import logo from '../logo_aircraft.svg'
import useFetch from './useFetch';
import {  useParams } from "react-router-dom";

const CheckoutPage = () => {

    const { id } = useParams();
    const {data: infos, loading, error} = useFetch('/getAllJourneysFromAnEvent/' + id ) 


    return ( 
        <section className="background-section-checkout">
            <div className="checkout-container">
                <p className="border-warning border-bottom border-2 location-data-header">Location:</p>
                <p className="border-warning border-bottom border-2 details-data-header">Details:</p>
                {infos && <p className="agent-assigned">Assigned agent ID: {infos[0].event.agent} </p> }
                {infos && <p className="location-for-checkout">{infos[0].event.location} </p> }
                {infos && <p className="travellers-company">Travellers: {infos[0].event.number} </p> }
                {infos && <p className="event-id">Event ID: {infos[0].event._id} </p> }
                {infos && <p className="traveller-id">Traveller ID: {infos[0].event.traveller} </p> }
                {infos && <div className="main-div-activities">{infos[0].activities.map( activity => {return  <p> {activity.name} </p> } ) } </div> }
                <p className="border-warning border-bottom border-2 additional-data-header">Additional Data:</p>
                <p className="header-checkout">#Vagabond</p>
                <img className="logo-nav-checkout" src={logo}/>
                <div className="card-for-checkout">
                    <p>Points</p>
                    <p>20</p>
                    <p>Total</p>
                    <p>325</p>
                </div>
            </div>
        </section>
     );
}
 
export default CheckoutPage;