import { useState,useEffect } from "react";
import { BASE_REVIEWS_URL } from "../../api adapters";

export default function AverageRating({game}){
   
    const [avgRating, setAvgRating]= useState([])
    useEffect(() =>{
        async function fetchTheReviews(){
            try{
                const response = await fetch(`${BASE_REVIEWS_URL}`);
                const data = await response.json();
                
                const ARGame= data.filter((certainGame)=> certainGame.gameId===game.gameId)
                
                
                const rating = ARGame.map((indivRating)=>indivRating.rating)
                
            const sum = rating.reduce((SumSoFar, currNum)=> SumSoFar + currNum,0)
           
               const avgData = sum / rating.length;
                setAvgRating(avgData)
              
            } catch(error){
                console.error(error);
            }
        }
        fetchTheReviews();
    }, [avgRating]);
return(
    <div className="average-rating">
        <h3>Average Score</h3>
        
        <p> {avgRating} </p>

    </div>
)
}