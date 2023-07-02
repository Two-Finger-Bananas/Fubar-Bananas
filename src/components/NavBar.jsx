import React from "react";
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
          
          <button
            id="logout"
            className="Navbar-link"
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
          <Link className="Navbar-link" to="/FetchGames">
            Games
          </Link>
        </>
      )}
    </div>
  );
};

export default NavBar;
