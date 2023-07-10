
export const BASE_USER_URL = 'http://localhost:3000/user'
export const BASE_GAME_URL = 'http://localhost:3000/games'
export const BASE_REVIEWS_URL ='http://localhost:3000/reviews'
export const BASE_COMMENTS_URL ='http://localhost:3000/comments'
export const TOKEN = localStorage.getItem('token')
import jwtDecode from 'jwt-decode'
export const registerUser = async (username, email, password) => {
    try{
        const response = await fetch(`${BASE_USER_URL}/register`,{
            method: "POST",
            headers:{
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                    username: username,
                    password: password,
                    email: email,
                    is_admin: false
            }),
        });
        const result = await response.json();
        return result;
    }catch(error){
        console.log(error);
    }
};


export const loginUser = async (username, password) => {
    try{
        const response = await fetch(`${BASE_USER_URL}/login`,{
            method: "POST",
            headers:{
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                    username: username,
                    password: password
            }),
        });
        const result = await response.json();
        const decodedToken = await jwtDecode(result.token)
        console.log(result.userData.is_admin)
        console.log(decodedToken)
        return result;
    }catch(error){
        console.log(error);
    }
};