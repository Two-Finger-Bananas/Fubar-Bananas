/* eslint-disable react/prop-types */
import { useParams, useNavigate } from "react-router-dom";
import { BASE_COMMENTS_URL } from "../../api adapters";
import { useState } from "react";
import { TOKEN } from "../../api adapters";

export default function PostComment({ gameId,reviewId, setFetch }){
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
                    gameId:gameId,
                    reviewId:reviewId
                })
            })
        
            const result = await response.json()
            navigate(`/reviews/${id}`)
            setFetch(true)
            return result
        }catch (error){
            console.log(error)
        }

    }
    return(
        <div>
            <h2>Create a New Comment</h2>
            <form onSubmit={createComment}>
                <label>
                    Text:
                    <input type="text"
                    placeholder="Type comment here"
                    value={text}
                    onChange={(e)=> setText(e.target.value)}/> 
                </label>
                <button type='submit'> Create Comment </button>
                </form>
                </div>
    )
}