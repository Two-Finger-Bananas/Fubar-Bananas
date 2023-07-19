/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import { BASE_USERS_URL } from "../../api adapters";

export default function FetchReviewsByUser({ userId }) {
    const [reviews, setReviews] = useState([])
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
        <div>
            <h2>Reviews</h2>
            {
            reviews.length ? reviews.map((review)=>(
                <div key={review.reviewId}>
                    <p>Text: {review.text}</p>
                    <p>Rating: {review.rating}</p>
                    <p>Username: {review.username}</p>
                </div>
            )):<p>{reviews.message}</p>
            }
        </div>
            
    )
}