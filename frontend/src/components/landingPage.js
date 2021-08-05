import { Link } from 'react-router-dom';
import React  from 'react';

const LandingPage = () => {
    return ( 
        <section className="landing-page-vagabond">
            <h1 className="text-light landing-motto">Discover the secrets of Mexico</h1>
            <Link to={'/allActivities'}> <button className="btn btn-warning button-to-action">Start Journey</button>  </Link>
        </section>
     );
}
 
export default LandingPage;