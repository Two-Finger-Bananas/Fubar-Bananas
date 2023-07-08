import React, { useEffect, useState} from 'react';
import { BASE_REVIEWS_URL } from '../../api adapters';

export default function FetchReviews({}){
    const[TheReviews, setTheReviews] = useState([]);
   
 
 const [searchQuery, setSearchQuery] = useState("")

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
                <div key={review.reviewID}>
                    
                    <p>Text: {review.text}</p>
          <p>Rating: {review.rating}</p>
          <p>Username: {review.username}</p>
          </div>
            ))}
        </div>
    )
}