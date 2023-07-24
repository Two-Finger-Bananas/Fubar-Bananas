/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import { BASE_USERS_URL } from "../../api adapters";
import './comments.css'

export default function FetchCommentsByUser({ userId }) {
    const [comments, setComments] = useState([])
    console.log(comments)

    useEffect(() => {
        async function fetchComments() {
            try {
                const response = await fetch(`${BASE_USERS_URL}/comments/${userId}`)
                const data = await response.json()
                setComments(data)
                console.log(data)
            } catch (error) {
                console.log(error)
            }  
        }
        if(userId){
        fetchComments()
        }
    }, [userId]) 

    return (
        <div>
            { 
            comments.length ? comments.map((comment)=>(
                <div key={comment.commentId}>
                    <h2>Review ID: {comment.reviewId}</h2>
                    <p>{comment.text}</p>  
                </div>
            )) : <p>{comments.message}</p>
            }
        </div>
    )
}