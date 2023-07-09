/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const NavBar = ({ isLoggedIn, setIsLoggedIn }) => {
  // console.log(isLoggedIn);
  return (
    <div className="NavBar">
    
          
      <Link className="NavBar-link" to="/">Home</Link>
          

      <Link className="Navbar-link" to="/games">Games</Link>
          
      {
        isLoggedIn ? <button id="logout" className="NavBar-link" onClick={() => {setIsLoggedIn(false); localStorage.removeItem("token"); localStorage.removeItem("username")}}>Logout</button> : ""
      }

      {
        isLoggedIn ? "" :
        <>
        <Link className="Navbar-link" to="/register">Register</Link>

        <Link className="Navbar-link" to="/login">Login</Link>
        </>
      }  
      
    </div>
  );
};

export default NavBar;
