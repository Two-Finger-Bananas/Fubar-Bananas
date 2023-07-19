/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import { BASE_REVIEWS_URL } from "../../api adapters";
import SelectedComment from "./selectedCommentView";

export default function FetchCommentsByReview({ review }) {
    const [comments, setComments] = useState([])
    const [searchQuery, setSearchQuery] = useState("")
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
    }, [comments])

    /*const filteredComments = comments.length ? comments.filter((comment) =>
        comment.text.toLowerCase().includes(searchQuery.toLowerCase())
        ) : null*/
    return (
        <div>
            <h2>Comments</h2>
            
            {comments.length ? comments.map((comment, idx)=>(
                <SelectedComment key={idx} comment={comment} />
            )) : <p>{comments.message}</p>}
        </div>
    )
}