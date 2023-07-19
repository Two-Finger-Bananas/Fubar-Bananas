/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { BASE_USERS_URL } from "../../api adapters";
import '../games/FGR.css';
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
            <h2>Reviews</h2>
            
            {
            reviews.length ? reviews.map((review)=>(
                <div key={review.reviewId} className="review-items" onClick={() => reviewDetails(review.reviewId)}>
                    <div className="name">
                    <h2>{review.username}</h2>
                    </div>
                    <div className="text">
                    <p>{review.text}</p>
                    </div>
                    <div className="rating">
                    <p>Rating</p>
                    <p className="rating-text">{review.rating}</p>
                    </div>
                </div>
            )) : <p>{reviews.message}</p>
            }
        </div>
    )
}