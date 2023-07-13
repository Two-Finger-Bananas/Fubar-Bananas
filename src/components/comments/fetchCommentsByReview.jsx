/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import { BASE_REVIEWS_URL } from "../../api adapters";

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
    }, [])

    const filteredComments = comments.length ? comments.filter((comment) =>
        comment.text.toLowerCase().includes(searchQuery.toLowerCase())
        ) : null
    return (
        <div>
            <h2>Comments</h2>
            <form id="search-bar-form">
                <label htmlFor="search-query">Search: </label>
                <input
                name="search-query"
                type="text"
                placeholder="Type Comment Here"
                value={searchQuery}
                onChange={(event) => setSearchQuery(event.target.value)}
                />
            </form>
            {comments.length ? filteredComments.map((comment)=>(
                <div key={comment.commentId}>
                    <p>Text: {comment.text}</p>
                    <p>Review: {comment.reviewId}</p>  
                </div>
            )) : <p>{comments.message}</p>}
        </div>
    )
}