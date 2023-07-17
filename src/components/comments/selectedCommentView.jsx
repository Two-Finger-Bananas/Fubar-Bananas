/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { BASE_COMMENTS_URL } from "../../api adapters";
import DeleteComment from "./deleteComments";
import EditComment from "./editComments";

export default function SelectedComment({ comment }) {
    const [updateComment, setUpdateComment] = useState(false)
    const username = localStorage.getItem('username')
    return (
        <div key={comment.commentId}>
         {
            username === comment.username ? 
            <>
        {
            !updateComment ? 
            <>
            <p>Text: {comment.text}</p>  
            <p>user: {comment.username}</p>      
            <button type="button" onClick={() => setUpdateComment(true)}>Edit</button> 
            </>
            : <EditComment comment={comment} setUpdateComment={setUpdateComment} />
        }
        <DeleteComment comment={comment} /> 
        </>
        : 
        <>
        <p>Text: {comment.text}</p>  
        <p>user: {comment.username}</p>
        </>
        }
            
            
    </div>
    )
}