import React, { useEffect, useState} from 'react';
import { BASE_REVIEWS_URL } from '../../api adapters';
import DeleteReview from './deleteReviews';
import EditReview from './editReviews';


export default function FetchReviews({}){
    const[TheReviews, setTheReviews] = useState([]);

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
          <DeleteReview />
          <EditReview/>
          </div>
            ))}
        </div>
    )
}