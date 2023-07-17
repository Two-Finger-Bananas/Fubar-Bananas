/* eslint-disable react/prop-types */
import { useState,useEffect } from "react";
import { BASE_GAME_URL } from "../../api adapters";

export default function AverageRating({ game }){
   
    const [avgRating, setAvgRating]= useState([])
    useEffect(() =>{
        async function fetchTheReviews(){
            try{
                const response = await fetch(`${BASE_GAME_URL}/reviews/${game.gameId}`);
                const data = await response.json();
                const rating = data.map((indivRating)=>indivRating.rating)
                console.log(rating)
            const sum = rating.reduce((SumSoFar, currNum)=> SumSoFar + currNum, 0)
           
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