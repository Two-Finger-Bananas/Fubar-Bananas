/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom";
import { BASE_REVIEWS_URL } from "../../api adapters";
import { TOKEN } from "../../api adapters";

export default function DeleteReview({ reviewId, selectedGameId, setFetch }){
    const navigate = useNavigate()
    async function deleteAReview() {
        try{
            const response = await fetch(`${BASE_REVIEWS_URL}/${reviewId}`,{
            method: "DELETE",
            headers:{
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${TOKEN}`
            }
            })
            const results = await response.json()
            navigate(`/games/${selectedGameId}`)
            setFetch(true)
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