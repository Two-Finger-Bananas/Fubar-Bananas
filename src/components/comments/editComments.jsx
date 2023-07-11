import { useState, useEffect } from "react";
import { TOKEN } from "../../api adapters";
import { BASE_COMMENTS_URL } from "../../api adapters";
import { useParams,useNavigate } from "react-router-dom";

export default function editComment(){
    const {id} = useParams();
    const [text, setText] = useState('');
    const navigate = useNavigate();

    async function editAComment(event){
        event.preventDefault()
        try{
            const response= await fetch(`${BASE_COMMENTS_URL}/update/${id}`,{
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
            navigate(`/comments/${id}`)
            return result
    } catch(error){
        console.log(error)
    }
}

return(
    <form onSubmit={editAComment}>
        <label>
           Text
           <input
           type="text"
           value={text}
           onChange={(e)=> setText(e.target.value)}/>
         </label>
           <button id="edit-comment-button" type="submit">
                Edit comment </button>
    </form>
)
}