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
                {infos && <p>ID Assigned agent: {infos[0].event.agent} </p> }
                {infos && <p>Location: {infos[0].event.location} </p> }
                {infos && <p>Travellers: {infos[0].event.number} </p> }
                {infos && <p>Event ID: {infos[0].event._id} </p> }
                {infos && <p>Traveller ID: {infos[0].event.traveller} </p> }
                {infos && <p>Activities: {infos[0].activities.map( activity => {return  <p> {activity.name} </p> } ) } </p> }
                <p className="border-warning border-bottom border-2 additional-data-header">Additional Data:</p>
                <p className="header-checkout">#Vagabond</p>
                <img className="logo-nav-checkout" src={logo}/>
            </div>
        </section>
     );
}
 
export default CheckoutPage;