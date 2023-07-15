import { useEffect, useState } from "react";
import { BASE_USER_URL } from "../../api adapters";
import { TOKEN } from "../../api adapters";


export default function DeleteUser(props){
    async function deleteAuser(){
        try{
            const response= await fetch(`${BASE_USER_URL}/${props.userId}`,{
                method:"DELETE",
                headers:{
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${TOKEN}`
                }
            })
            const results = await response.json()
            console.log(results)
            return results
        } catch(error){
            console.log(error)
        }
    }

    return(
        <button id="delete-user-button" type="button" onClick={deleteAuser}>
            Delete Account
        </button>
    );
}