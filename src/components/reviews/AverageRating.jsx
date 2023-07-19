/* eslint-disable react/prop-types */
import { useEffect } from "react";
import { BASE_GAME_URL } from "../../api adapters";

export default function AverageRating({ setAvgRating, avgRating, game }){
    useEffect(() =>{
        async function fetchTheReviews(){
            try{
                const response = await fetch(`${BASE_GAME_URL}/reviews/${game.gameId}`);
                const data = await response.json();
                const rating = data.map((indivRating)=>indivRating.rating)
                const sum = rating.reduce((SumSoFar, currNum)=> SumSoFar + currNum, 0)
                const avgData = sum / rating.length;
                setAvgRating(avgData.toFixed(1))
            } catch(error){
                console.error(error);
            }
        }
        fetchTheReviews();
    }, [avgRating]);
return(
    <div id="average-rating">
        <h3 id="score">Average Score</h3>
        
        <p id="rating"> {avgRating} </p>

    </div>
)
}