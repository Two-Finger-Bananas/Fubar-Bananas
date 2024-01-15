import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./navBar.css";

const NavBar = ({ isLoggedIn, setIsLoggedIn, setSearchQuery }) => {
  const is_admin = localStorage.getItem("is_admin");
  const [showNav, setShowNav] = useState(true);


  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };
/* <div
        className="ShowNavButton"
        onMouseEnter={() => setShowNav(true)}
        onMouseLeave={() => setShowNav(false)}
        aria-label="Toggle Navigation"
      >
        &#9776;
      </div>

      <div
        className="SideNavBar"
        onMouseEnter={() => setShowNav(true)}
        onMouseLeave={() => setShowNav(false)}
        style={{ display: showNav ? "block" : "none" }}
      >  was in the return poertion to make navbar pop in and out*/
      return (
]
      {
        is_admin === "true" && isLoggedIn ? <Link className="Navbar-link" to="/admin">Admin Dashboard</Link> : ""
      }

      {
        is_admin === "false" && isLoggedIn ? <Link className="Navbar-link" to="/profile">Profile</Link> : ""
      }
          
      {
        isLoggedIn ? <button id="logout" className="NavBar-link" onClick={() => {setIsLoggedIn(false); localStorage.removeItem("token"); localStorage.removeItem("username"); localStorage.removeItem("userId");
        localStorage.removeItem('is_admin')}}>Logout</button> : ""
      }

      {
        isLoggedIn ? "" :

        <>
          <div className="ShowNavButton" aria-label="Toggle Navigation">
            &#9776;
          </div>
    
          <div className="SideNavBar" style={{ display: showNav ? "block" : "none" }}>
            <div className="SideNavBar-items">
              <Link className="SideNavBar-link" to="/games">
                Games
              </Link>
              {is_admin === "true" && (
                <Link className="SideNavBar-link" to="/admin">
                  Admin Dashboard
                </Link>
              )}
              {is_admin === "false" && (
                <Link className="SideNavBar-link" to="/profile">
                  Profile
                </Link>
              )}
    
              {isLoggedIn ? (
                <>
                  <button
                    className="SideNavBar-link"
                    onClick={() => {
                      setIsLoggedIn(false);
                      localStorage.clear();
                    }}
                  >
                    Logout
                  </button>
                  <div className="SearchBar">
                    <label id="theLabel" htmlFor="search-query" aria-label="Search">
                      &#128269;
                    </label>
                    <input
                      name="search-query"
                      type="text"
                      placeholder="Search Games"
                      onChange={handleSearchChange}
                    />
                  </div>
                </>
              ) : (
                <>
                  <Link className="SideNavBar-link" to="/register">
                    Register
                  </Link>
                  <Link className="SideNavBar-link" to="/login">
                    Login
                  </Link>
                  <div className="SearchBar">
                    <label id="theLabel" htmlFor="search-query" aria-label="Search">
                      &#128269;
                    </label>
                    <input
                      name="search-query"
                      type="text"
                      placeholder="Search Games"
                      onChange={handleSearchChange}
                    />
                  </div>
                </>
              )}
            </div>
          </div>
        </>
      );
    };
    
    export default NavBar;