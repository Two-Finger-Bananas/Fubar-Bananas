import { useState, useEffect } from "react";
import { BASE_COMMENTS_URL } from "../../api adapters";
import { TOKEN } from "../../api adapters";

export default function DeleteComment(props){
    async function deleteAComment(){
        try{
            const response = await fetch(`${BASE_COMMENTS_URL}/${props.commentId}`,{
            method: "DELETE",
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
        <button id="delete-comment-button" type="button" onClick={deleteAComment}>
            Delete comment
        </button>
    );
}