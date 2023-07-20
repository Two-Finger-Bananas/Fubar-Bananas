/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { BASE_GAME_URL } from "../../api adapters";
import './fetchReviews.css'

export default function FetchReviewsByGame({ setFetch, Fetch }) {
    const [reviews, setReviews] = useState([])
    const navigate = useNavigate()
    const { id } = useParams()
    function reviewDetails(reviewId) {
        navigate(`/reviews/${reviewId}`)
    }
    useEffect(() => {
        async function fetchReviews() {
            try {
                const response = await fetch(`${BASE_GAME_URL}/reviews/${id}`)
                const data = await response.json()
                setReviews(data)
                setFetch(data) 
            } catch (error) {
                console.log(error)
            }  
        }
        fetchReviews()
    }, [Fetch])
        
    return (
        
        <div id="review-cards">
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
                    <p className="rating-title">Rating</p>
                    <p className="rating-text">{review.rating}</p>
                    </div>
                </div>
            )) : <p>{reviews.message}</p>
            }
        </div>
    )
}