import React from 'react';
import logo from '../logo_aircraft.svg'

const CheckoutPage = () => {
    return ( 
        <section className="background-section-checkout">
            <div className="checkout-container">
                <p className="header-checkout">#Vagabond</p>
                <img className="logo-nav-checkout" src={logo}/>
            </div>
        </section>
     );
}
 
export default CheckoutPage;