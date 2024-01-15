/* eslint-disable react/prop-types */
import {useState, useEffect} from "react";
import { loginUser } from "../../api adapters";
import {useNavigate} from "react-router-dom";
import './login.css'



const Login = ({ setIsLoggedIn, gameInfo }) => {
    
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [currentImage, setCurrentImage] = useState(0)
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

            navigate("/games");
        } catch (error){
            console.log(error);
        }
    };

    useEffect(() => {
        // Set background image when the component mounts
        document.body.style.backgroundImage = 'url(https://res.cloudinary.com/dvto5eysb/image/upload/v1689701726/stock-photo-joypad-hands-gaming-concept-computer_z1zzt6.jpg)';
        document.body.style.backgroundPosition = 'center';
        document.body.style.backgroundSize = 'cover';
        document.body.style.backgroundAttachment = 'fixed';
    
        // Clean up function to reset background when the component unmounts
        return () => {
          document.body.style.backgroundImage = '';
          document.body.style.backgroundPosition = '';
          document.body.style.backgroundSize = '';
          document.body.style.backgroundAttachment = '';
        };
      }, []);

    /*const [bodyBackground, setBodyBackgorund] = useState(null)
    useEffect(() => {
        if(bodyBackground === null) {
            document.body.style.backgroundImage = 'url(https://res.cloudinary.com/dvto5eysb/image/upload/v1689701726/stock-photo-joypad-hands-gaming-concept-computer_z1zzt6.jpg)';
            document.body.style.backgroundPosition = 'center';
            document.body.style.backgroundSize = 'cover';
            document.body.style.backgroundAttachment = 'fixed';
        }
    }, [bodyBackground])
    /*useEffect(() => {
        const imageShow = setInterval(() => {
          setCurrentImage((prevImage) => (prevImage === gameInfo.length - 1 ? 0 : prevImage + 1));
        }, 5000);
      
        return () => clearInterval(imageShow);
      }, [gameInfo]);*/
      
    return(
        <div className="content-wrapper">
       
       
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
        </div>
       
    )

}

export default Login;