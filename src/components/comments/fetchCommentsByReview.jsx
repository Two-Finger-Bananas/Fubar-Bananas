/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import { BASE_REVIEWS_URL } from "../../api adapters";
import SelectedComment from "./selectedCommentView";
import './comments.css'

export default function FetchCommentsByReview({ review, setFetch, Fetch }) {
    const [comments, setComments] = useState([])
    useEffect(() => {
        async function fetchComments() {
            try {
                const response = await fetch(`${BASE_REVIEWS_URL}/comments/${review.reviewId}`)
                const data = await response.json()
                setComments(data) 
            } catch (error) {
                console.log(error)
            }  
        }
        fetchComments()
    }, [Fetch])
    return (
        <div>
            <h2>Comments</h2>
            
            {
            comments.length ? comments.map((comment, idx)=>(
                <SelectedComment key={idx} comment={comment} setFetch={setFetch} />
            )) : <p>{comments.message}</p>
            }
        </div>
    )
}