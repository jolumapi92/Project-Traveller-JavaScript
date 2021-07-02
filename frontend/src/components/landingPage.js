import { Link } from 'react-router-dom';
import React, { Component }  from 'react';

const LandingPage = () => {
    return ( 
        <section>
            <h1>Smartest way to travel Mexico</h1>
            <Link to={'/allActivities'}> <button>Start Journey</button>  </Link>
        </section>
     );
}
 
export default LandingPage;