import { useEffect, useState} from 'react';
import { BASE_REVIEWS_URL } from '../../api adapters';
import { useNavigate } from 'react-router-dom';


export default function FetchReviews({setSelectedReviewId, selectedReviewId}){
    const[TheReviews, setTheReviews] = useState([]);
    const navigate = useNavigate()
    function reviewDetails(reviewId) {
        navigate(`/reviews/${reviewId}`)
    }
    
    useEffect(() =>{
        async function fetchTheReviews(){
            try{
                const response = await fetch(`${BASE_REVIEWS_URL}`);
                const data = await response.json();
                setTheReviews(data);
                
            } catch(error){
                console.error(error);
            }
        }
        fetchTheReviews();
    }, []);

    return(
        <div><h2>Reviews</h2>
            {TheReviews.map((review)=>(
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