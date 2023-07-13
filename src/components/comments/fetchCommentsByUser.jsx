/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import { BASE_USERS_URL } from "../../api adapters";

export default function FetchCommentsByUser({ user }) {
    const [comments, setComments] = useState([])
    const [searchQuery, setSearchQuery] = useState("")

    useEffect(() => {
        async function fetchComments() {
            try {
                const response = await fetch(`${BASE_USERS_URL}/comments/${user.userId}`)
                const data = await response.json()
                setComments(data) 
            } catch (error) {
                console.log(error)
            }  
        }
        fetchComments()
    })

    const filteredComments = comments.filter((comment) =>
        comment.text.toLowerCase().includes(searchQuery.toLowerCase())
        );

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
            {filteredComments.map((comment)=>(
                <div key={comment.commentId}>
                    <p>Text: {comment.text}</p>
                    <p>Review: {comment.reviewId}</p>  
                </div>
            ))}
        </div>
    )
}