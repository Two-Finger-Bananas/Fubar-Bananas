/* eslint-disable react/prop-types */
import { useState } from "react";
import FetchCommentsByUser from "../comments/fetchCommentsByUser";
import FetchReviewsByUser from "../reviews/fetchReviewsByUser";


export default function UserCard({ user }) {
    const [details, setDetails] = useState(false)
    return (
        <>
        {
            !details ? <h2 onClick={() => { setDetails(true)}}>{user.username}</h2> :
            <div>
            <h1>User Info:</h1>
            <p onClick={() => {setDetails(false)}}>Close</p>
            <h2>Name: {user.username}</h2>
            <h3>Email:{user.email}</h3>
            {user.is_admin ? <h3>Role: Admin</h3> : <h3>Role: User</h3>}
            <h3>User Id: {user.userId}</h3>
            <h1>Reviews</h1>
            <FetchReviewsByUser userId={user.userId} />
            <h1>Comments</h1>
            <FetchCommentsByUser userId={user.userId} />
            </div>
        }
        </>
    )
}