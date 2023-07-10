import { useState, useEffect } from "react";
import { TOKEN } from "../../api adapters";
import { BASE_REVIEWS_URL } from "../../api adapters";
import {useParams, useNavigate} from "react-router-dom";

export default function EditReview(){
    const {id} = useParams()
    const[text,setText] = useState(' ');
    async function editAReview(event){
        event.preventDefault()
        try{
   
            const response= await fetch(`${BASE_REVIEWS_URL}/${id}`,{
                method:"PATCH",
                headers:{
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${TOKEN}`
                },
                body: JSON.stringify({
                    text: text
                })
            })
            const result = await response.json()
            console.log(result)
            return result
        } catch(error){
            console.log(error)
        }
    }

    return(

        <form onSubmit={editAReview}>
            <label>
                Text
            <input
            type="text"
            value={text}
            onChange={(e)=> setText(e.target.value)}/>
            </label>
        <button id="edit-review-button" type="button" onClick={editAReview}>
            Edit
        </button>
        </form>
    );
}