import React, { useState } from "react";
import { registerUser } from "../api adapters";
import { useNavigate } from "react-router-dom";

const Register = (props) => {
  const setIsLoggedIn = props.setIsLoggedIn;
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const result = await registerUser(username, password);
      console.log(result);

      localStorage.setItem("token", result.token);
      setIsLoggedIn(true);

      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="register-form">
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
