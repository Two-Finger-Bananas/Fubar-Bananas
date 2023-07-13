/* eslint-disable react/prop-types */
import { useParams, useNavigate } from "react-router-dom";
import { BASE_REVIEWS_URL } from "../../api adapters";
import { useState } from "react";

export default function PostReview({ game, setNewReview }) {
    const [text, setText] = useState('');
    const [rating, setRating] = useState('');
    // console.log(game)
    // console.log(setNewReview)

    async function createReview(event){
        event.preventDefault()
        try{
            const TOKEN = localStorage.getItem('token')
            const response = await fetch(`${BASE_REVIEWS_URL}`, {
                method: 'POST',
                headers:{
                    'Content-Type': 'Application/json',
                    'Authorization': `Bearer ${TOKEN}`
                },
                body: JSON.stringify({
                    text: text,
                    rating: rating,
                    username: localStorage.getItem('username'),
                    userId: localStorage.getItem('userId'),
                    gameId: game.gameId
                })
            })
            const result = await response.json()
            return result
        }   catch (error){
            console.log(error)
        }

    }
    return(
        <div>
            <h2>Create a New Review</h2>
            <form onSubmit={createReview}>
                <label>
                    Text:
                    <input type="text"
                    value={text}
                    onChange={(e)=> setText(e.target.value)}/> 
                </label>
                <br />
            <button type="button" onClick={() => {setRating(1)}}>1</button>
            <button type="button" onClick={() => {setRating(2)}}>2</button>
            <button type="button" onClick={() => {setRating(3)}}>3</button>
            <button type="button" onClick={() => {setRating(4)}}>4</button>
            <button type="button" onClick={() => {setRating(5)}}>5</button>
            <button type="submit">Create Review</button>
            <button type="button" onClick={() => setNewReview(false)}>Cancel</button>
            </form>
        </div>
    );
    
}