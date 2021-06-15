const Navbar = () => {
    return ( 
        <nav className="navbar navbar-expand-lg navbar-light" id="mainNav">
            <div className="container px-4 px-lg-5">
                <h4>Concierge Traveller</h4>
                <button className="btn btn-warning">Login</button>
                <div className="collapse navbar-collapse" id="navbarResponsive">
                    <ul className="navbar-nav ms-auto">
                        {/* { email && <li className="nav-item"><Link className="nav-link" to="/patients">Pacientes</Link></li>}
                        { email && <li className="nav-item"><Link className="nav-link" to="/patients.create">Inscribir</Link></li>}
                        { !email && <li className="nav-item"><Link className="nav-link" to="/logUser">Log in</Link></li>}
                        { email && <li className="nav-item"><a onClick={deleteSession} className="nav-link">Log out</a></li>} */}
                    </ul>
                </div>
            </div>
        </nav>
     );
}
 
export default Navbar;