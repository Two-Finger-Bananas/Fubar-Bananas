
export const BASE_URL='http://localhost:3000/games'

export const registerUser = async (username, password) => {
    try{
        const response = await fetch(`${BASE_URL}/register`,{
            method: "POST",
            headers:{
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                user:{
                    username: username,
                    password: password,
                },
            }),
        });
        const result = await response.json();
        return result.data;
    }catch(error){
        console.log(error);
    }
};


export const loginUser = async (username, password) => {
    try{
        const response = await fetch(`${BASE_URL}/user`,{
            method: "POST",
            headers:{
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                user:{
                    username: username,
                    password: password,
                },
            }),
        });
        const result = await response.json();
        return result.data;
    }catch(error){
        console.log(error);
    }
};