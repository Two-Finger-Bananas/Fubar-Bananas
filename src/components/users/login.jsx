/* eslint-disable react/prop-types */
import {useState} from "react";
import { loginUser } from "../../api adapters";
import {useNavigate} from "react-router-dom";
import './login.css'


const Login = (props) => {
    const setIsLoggedIn = props.setIsLoggedIn;
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const navToRegister = () => {
        navigate("/register");
    };
    const handleSubmit = async (e) => {
        e.preventDefault();

        try{
            const result = await loginUser(username,password);

            localStorage.setItem("username", result.userData.username);
            localStorage.setItem("userId", result.userData.userId)
            localStorage.setItem('is_admin', result.userData.is_admin)
            localStorage.setItem("token", result.token);
            setIsLoggedIn(true);

            navigate("/");
        } catch (error){
            console.log(error);
        }
    };
    return(
        <div className="login-page-background">
        <div className="login-form">
            <div id="title-of-login-box">
            <h2> Log Into Your Account</h2>
            </div>
            <form onSubmit={handleSubmit}>
                <label>
                    <input
                    className="box-label"
                    placeholder="username"
                    type="text"
                    value={username}
                    onChange={(e)=>{
                        setUsername(e.target.value);
                    }}
                    />
                </label>
                <br/>
                <label>
                    <input
                    className="box-label"
                    placeholder="password"
                    type="password"
                    value={password}
                    onChange={(e)=>{
                        setPassword(e.target.value);
                    }}
                    />
                </label>
                <br/>
                <button id="submit-button" type="submit">
                    <strong>Submit</strong>
                </button>
                <button onClick={navToRegister}>Need to register?</button>
            </form>
        </div>
        </div>
    )

}

export default Login;