import { NavLink } from "react-router-dom";

function Navigation() {

    return (
        <div className="nav-container">
            <div className="nav-title">Meetup App</div>
            <div className="nav-links-wrapper">
                <NavLink to="/" end>Home</NavLink>
                <NavLink to="/meetups">Meetups</NavLink>
            </div>
        </div>
    );
}

export default Navigation;