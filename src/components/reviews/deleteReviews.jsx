import { useState, useEffect } from "react";
import { BASE_REVIEWS_URL } from "../../api adapters";
import { TOKEN } from "../../api adapters";

export default function DeleteReview(props){
    async function deleteAReview(){
        try{
            const response = await fetch(`${BASE_REVIEWS_URL}/${props.reviewId}`,{
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
        <button id="delete-review-button" type="button" onClick={deleteAReview}>
            Delete Review
        </button>
    );
}