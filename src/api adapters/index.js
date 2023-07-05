
export const BASE_USER_URL = 'http://localhost:3000/user'
export const BASE_GAME_URL = "localhost:3000/games"
export const TOKEN = localStorage.getItem('token')
export const registerUser = async (username, password) => {
    try{
        const response = await fetch(`${BASE_URL}/register`,{
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
        console.log(result)
        return result;
    }catch(error){
        console.log(error);
    }
};


export const loginUser = async (username, password) => {
    try{
        const response = await fetch(`${BASE_URL}/login`,{
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
        return result;
    }catch(error){
        console.log(error);
    }
};