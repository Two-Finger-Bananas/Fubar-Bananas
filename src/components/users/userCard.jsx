/* eslint-disable react/prop-types */
import { useState } from "react";
import FetchCommentsByUser from "../comments/fetchCommentsByUser";
import FetchReviewsByUser from "../reviews/fetchReviewsByUser";


export default function UserCard({ user }) {
    const [details, setDetails] = useState(false)
    return (
        <>
        {
            !details ? <h2 onClick={() => { setDetails(true)}}>Name: {user.username}</h2> :
            <div>
            <h1>User Info:</h1>
            <p onClick={() => {setDetails(false)}}>Close</p>
            <h2>Name: {user.username}</h2>
            <h3>Email:{user.email}</h3>
            <h3>User Id: {user.userId}</h3>
            <button>Edit</button>
            <button>Delete</button>
            <h1>Reviews</h1>
            <FetchReviewsByUser user={user} />
            <h1>Comments</h1>
            <FetchCommentsByUser user={user} />
            </div>
        }
        </>
    )
}