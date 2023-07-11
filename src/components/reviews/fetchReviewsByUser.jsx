import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { BASE_USER_URL } from "../../api adapters";

export default function FetchReviewsByUser(user) {
    const [reviews, setReviews] = useState([])
    const [searchQuery, setSearchQuery] = useState("")
    const navigate = useNavigate()

    function reviewDetails(reviewId) {
        navigate(`/reviews/${reviewId}`)
    }

    useEffect(() => {
        async function fetchReviews() {
            try {
                const response = await fetch(`${BASE_USER_URL}/reviews/${user.userId}`)
                const data = response.json()
                setReviews(data) 
            } catch (error) {
                console.log(error)
            }  
        }
        fetchReviews()
    })
    const filteredReviews = reviews.filter((review) =>
        review.text.toLowerCase().includes(searchQuery.toLowerCase())
        );
    return (
        <div>
            <h2>Reviews</h2>
            <form id="search-bar-form">
                <label htmlFor="search-query">Search:</label>
                <input
                name="search-query"
                type="text"
                placeholder="Type Review Here"
                value={searchQuery}
                onChange={(event) => setSearchQuery(event.target.value)}
                />
            </form>
            {filteredReviews.map((review)=>(
                <div key={review.reviewId}>
                    <p>Text: {review.text}</p>
                    <p>Rating: {review.rating}</p>
                    <p>Username: {review.username}</p>
                    <button onClick={() => reviewDetails(review.reviewId)}>Details</button>
                </div>
            ))}
        </div>
    )
}