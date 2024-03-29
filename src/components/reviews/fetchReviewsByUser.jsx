/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { BASE_USERS_URL } from "../../api adapters";


export default function FetchReviewsByUser({ userId }) {
    const [reviews, setReviews] = useState([])
    const [searchQuery, setSearchQuery] = useState("")
    console.log(reviews)

    useEffect(() => {
        async function fetchReviews() {
            try {
                const response = await fetch(`${BASE_USERS_URL}/reviews/${userId}`)
                const data = await response.json()
                setReviews(data) 
            } catch (error) {
                console.log(error)
            }  
        }
        if(userId) {
        fetchReviews()
        }
        
    }, [userId])
    return (
        <div id="review-cards">

            
            {
            reviews.length ? reviews.map((review)=>(
                <div key={review.reviewId}  onClick={() => reviewDetails(review.reviewId)}>
                    <div>
                    <h2>Game ID: {review.gameId}</h2>
                    </div>
                    <div>
                    <p>{review.text}</p>
                    </div>
                    <div>
                    <p>Rating</p>
                    <p className="rating-text">{review.rating}</p>
                    </div>
                </div>
            )) : <p>{reviews.message}</p>
            }
        </div>
    )
}