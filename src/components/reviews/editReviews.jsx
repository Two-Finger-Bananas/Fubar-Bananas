import { useState, useEffect } from "react";
import { TOKEN } from "../../api adapters";
import { BASE_REVIEWS_URL } from "../../api adapters";
import {useParams, useNavigate} from "react-router-dom";

export default function EditReview(){
    const {id} = useParams()
    
    const [text, setText] = useState('');
    const [rating, setRating] = useState('')
    const navigate = useNavigate()
    console.log(rating)
    async function editAReview(event){
        event.preventDefault()
        try{
   
            const response= await fetch(`${BASE_REVIEWS_URL}/update/${id}`,{
                method:"PATCH",
                headers:{
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${TOKEN}`
                },
                body: JSON.stringify({
                    text: text,
                    rating: rating
                })
            })
            const result = await response.json()
            navigate(`/reviews/${id}`)
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
            <button type="button" onClick={() => setRating(1)}>1</button>
            <button type="button" onClick={() => setRating(2)}>2</button>
            <button type="button" onClick={() => setRating(3)}>3</button>
            <button type="button" onClick={() => setRating(4)}>4</button>
            <button type="button" onClick={() => setRating(5)}>5</button>
            <button id="edit-review-button" type="submit">Edit</button>
        </form>
    );
}