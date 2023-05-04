import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router";

function Navigation() {
  const navigate = useNavigate();

  const logoutHandler = () => {
    fetch("http://localhost:4000/logout", {
      method: "DELETE",
      headers: {
        "Content-type": "application/json",
      },
    })
      .then((response) => {
        if (response.ok) {
          console.log("response ok", response);
          navigate("/");
          return response.json();
        }
        throw response;
      })
      .catch((error) => {
        console.log("error login", error);
      });
  };

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
        <NavLink
          to="/sign-up"
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
        >
          Sign Up
        </NavLink>
        <NavLink
          to="/login"
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
        >
          Login
        </NavLink>
        <div className="nav-link" onClick={logoutHandler}>Logout</div>
      </div>
    </div>
  );
}

export default Navigation;
