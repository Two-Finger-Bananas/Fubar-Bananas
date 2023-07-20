/* eslint-disable react/prop-types */
import { useState } from "react";
import { TOKEN } from "../../api adapters";
import { BASE_COMMENTS_URL } from "../../api adapters";

export default function EditComment({ comment, setUpdateComment, setFetch }){
    const [text, setText] = useState('');
    async function editAComment(event){
        event.preventDefault()
        try{
            const response= await fetch(`${BASE_COMMENTS_URL}/${comment.commentId}`,{
                method:"PATCH",
                headers:{
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${TOKEN}`
                },
                body: JSON.stringify({
                    text: text,
            })
        })
        const result = await response.json()
        setUpdateComment(false)
        setFetch(false)
            return result
    } catch(error){
        console.log(error)
    }
}

return(
    <>
    <form onSubmit={editAComment}>
        <label>
           Text
           <input
           type="text"
           value={text}
           onChange={(e)=> setText(e.target.value)}/>
         </label>
           <button id="edit-comment-button" type="submit">Submit</button>
        <p>Review: {comment.reviewId}</p>  
        <p>user: {comment.username}</p>       
    </form>
    <button type="button" onClick={() => setUpdateComment(false)}>Cancel</button>
    </>
)
}