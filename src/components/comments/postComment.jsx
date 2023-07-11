import { useParams, useNavigate } from "react-router-dom";
import { BASE_COMMENTS_URL } from "../../api adapters";
import { useState } from "react";
import { TOKEN } from "../../api adapters";

export default function postComment(){
    const {id} = useParams()
    const navigate = useNavigate()
    const [text, setText] = useState('');
    async function createComment(event){
        event.preventDefault()
        try{
            const response = await fetch(`${BASE_COMMENTS_URL}`, {
                method: 'POST',
                headers:{
                    'Content-Type': 'Application/json',
                    'Authorization': `Bearer ${TOKEN}`
                },
                body: JSON.stringify({
                    text: text,
                    username: localStorage.getItem('username'),
                    userId: localStorage.getItem('userId'),
                    reviewId: selectedReviewId
                })
            })
            const result = await response.json()
            console.log(result)
            navigate(`/reviews/${selectedreviewId}`)
            return result
        }catch (error){
            console.log(error)
        }

    }
    return(
        <div>
            <h2>Create a New Review</h2>
            <form onSubmit={createComment}>
                <label>
                    Text:
                    <input type="text"
                    value={text}
                    onChange={(e)=> setText(e.target.value)}/> 
                </label>
                <button tyoe='submit'> create comment </button>
                </form>
                </div>
    )
}