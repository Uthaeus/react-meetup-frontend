import { NavLink } from "react-router-dom";

function Navigation() {
  return (
    <div className="nav-container">
      <div className="nav-title-wrapper">
        <div className="nav-title">Community Meetups</div>
      </div>
      <div className="nav-links-wrapper">
        <NavLink
          to="/"
          end
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/meetups"
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
        >
          Meetups
        </NavLink>
      </div>
    </div>
  );
}

export default Navigation;
