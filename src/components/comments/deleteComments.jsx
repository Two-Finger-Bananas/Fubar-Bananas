/* eslint-disable react/prop-types */
import { BASE_COMMENTS_URL } from "../../api adapters";
import { TOKEN } from "../../api adapters";

export default function DeleteComment({ comment, setFetch }){
    async function deleteAComment(){
        try{
            const response = await fetch(`${BASE_COMMENTS_URL}/${comment.commentId}`,{
            method: "DELETE",
            headers:{
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${TOKEN}`
            }
            })
            const results = await response.json()
            setFetch(false)
            return results
        } catch(error){
            console.log(error)
        }
        
    }

    return(
        <button id="delete-comment-button" type="button" onClick={deleteAComment}>
            Delete comment
        </button>
    );
}