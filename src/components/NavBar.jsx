/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const NavBar = ({ isLoggedIn, setIsLoggedIn }) => {
  console.log(isLoggedIn);
  return (
    <div className="NavBar">
      {isLoggedIn ? (
        <>
          <Link className="NavBar-link" to="/">
            Home
          </Link>

          <Link className="Navbar-link" to="/games">
            Games
          </Link>
          
          <button
            id="logout"
            className="NavBar-link"
            onClick={() => {
              setIsLoggedIn(false);
              localStorage.removeItem("token");
            }}
          >
            Logout
          </button>
        </>
      ) : (
        <>
          <Link className="Navbar-link" to="/">
            Home
          </Link>
          <Link className="Navbar-link" to="/register">
            Register
          </Link>
          <Link className="Navbar-link" to="/login">
            Login
          </Link>
          <Link className="Navbar-link" to="/games">
            Games
          </Link>
        </>
      )}
    </div>
  );
};

export default NavBar;
