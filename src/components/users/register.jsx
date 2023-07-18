/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import { registerUser } from "../../api adapters";
import { useNavigate } from "react-router-dom";
import './register.css';

const Register = (props) => {
  const setIsLoggedIn = props.setIsLoggedIn;
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('')
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const result = await registerUser(username, email, password);
      // console.log(result);

      
      localStorage.setItem("userId", result.userData.userId)
      localStorage.setItem('is_admin', result.userData.is_admin)
      localStorage.setItem("username", username);
      localStorage.setItem("token", result.token);
      setIsLoggedIn(true);

      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  const [bodyBackground, setBodyBackgorund] = useState(null)
    useEffect(() => {
        if(bodyBackground === null) {
            document.body.style.backgroundImage = 'url(https://res.cloudinary.com/dvto5eysb/image/upload/v1689700760/pexels-alena-darmel-7862491_ajjcwf.jpg)';
            document.body.style.backgroundPosition = 'center';
            document.body.style.backgroundSize = 'cover';
            document.body.style.backgroundAttachment = 'fixed';
        }
    }, [bodyBackground])

  return (
    <div className="register-form">
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <label>
          <input
            className="reg-label"
            placeholder="Username"
            type="text"
            value={username}
            onChange={(e) => {
              setUsername(e.target.value);
            }}
          />
        </label>
        <br />
        <label>
          <input
            className="reg-label"
            placeholder="email"
            type="text"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </label>
        <br />
        <label>
          <input
            className="reg-label"
            placeholder="Password"
            type="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </label>
        <br />
        <button id="register-button" type="submit">
          <strong>Submit</strong>
        </button>
      </form>
    </div>
  );
};

export default Register;
