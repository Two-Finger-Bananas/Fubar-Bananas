import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { BASE_GAME_URL } from "../../api adapters";

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
    const filteredReviews = reviews.length ? reviews.filter((review) =>
        review.text.toLowerCase().includes(searchQuery.toLowerCase())
        ) : null
        
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
            {filteredReviews ? filteredReviews.map((review)=>(
                <div key={review.reviewId}>
                    <p>Text: {review.text}</p>
                    <p>Rating: {review.rating}</p>
                    {
                    username === !review.username ? 
                    <>
                    <script onLoad={() => setReviewLimit(true)}></script>
                    <p>Username: {review.username}</p>
                    </>
                    : <p>Username: {review.username}</p>
                    }
                    <button onClick={() => reviewDetails(review.reviewId)}>Details</button>
                </div>
            )) : <p>{reviews.message}</p>}
        </div>
    )
}