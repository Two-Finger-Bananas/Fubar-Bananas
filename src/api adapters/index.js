
// export const BASE_USER_URL = 'http://localhost:3000/user'
// export const BASE_USERS_URL = 'http://localhost:3000/users'
// export const BASE_GAME_URL = 'http://localhost:3000/games'
// export const BASE_REVIEWS_URL ='http://localhost:3000/reviews'
// export const BASE_COMMENTS_URL ='http://localhost:3000/comments'

export const BASE_USER_URL = 'https://fubar-gaming-backend.netlify.app/user'
export const BASE_USERS_URL = 'https://fubar-gaming-backend.netlify.app/users'
export const BASE_GAME_URL = 'https://fubar-gaming-backend.netlify.app/games'
export const BASE_REVIEWS_URL ='https://fubar-gaming-backend.netlify.app/reviews'
export const BASE_COMMENTS_URL ='https://fubar-gaming-backend.netlify.app/comments'


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
        return result;
    }catch(error){
        console.log(error);
    }
};