import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { BASE_GAME_URL } from "../../api adapters";
import './fetchReviews.css';

export default function FetchReviewsByGame({ setReviewLimit={setReviewLimit} }) {
    const [reviews, setReviews] = useState([])
    const [searchQuery, setSearchQuery] = useState("")
    const navigate = useNavigate()
    const { id } = useParams()
    const username = localStorage.getItem('username')
    function reviewDetails(reviewId) {
        navigate(`/reviews/${reviewId}`)
    }
    useEffect(() => {
        async function fetchReviews() {
            try {
                const response = await fetch(`${BASE_GAME_URL}/reviews/${id}`)
                const data = await response.json()
                setReviews(data) 
            } catch (error) {
                console.log(error)
            }  
        }
        fetchReviews()
    }, [reviews])
    /*const filteredReviews = reviews.length ? reviews.filter((review) =>
        review.text.toLowerCase().includes(searchQuery.toLowerCase())
        ) : null*/
        
    return (
        <div id="review-cards">
            <h2>Reviews</h2>
            
            {reviews ? reviews.map((review)=>(
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
            )) : <p>{reviews.message}</p>}
        </div>
        
    )
}