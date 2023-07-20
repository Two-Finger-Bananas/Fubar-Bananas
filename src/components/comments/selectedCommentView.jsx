/* eslint-disable react/prop-types */
import { useState } from "react";
import DeleteComment from "./deleteComments";
import EditComment from "./editComments";

export default function SelectedComment({ comment, setFetch }) {
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
            <div className="comment-box">
            <div className='comment-user'>
            <p>{comment.username}</p>
            </div>
            <div className='comment-text'>
            <p>{comment.text}</p>  
            </div>  
            </div>
            <button type="button" 
            onClick={() =>{setUpdateComment(true); setFetch(true)}}>Edit</button> 
            </>
            : <EditComment comment={comment} setUpdateComment={setUpdateComment} setFetch={setFetch} />
        }
        <DeleteComment comment={comment} setFetch={setFetch} /> 
        </>
        : 
        <>
        <div className="comment-box">
            <div className='comment-user'>
            <p>{comment.username}</p>
            </div>
            <div className='comment-text'>
            <p>{comment.text}</p>  
            </div>
        </div>
        </>
        }
            
            
    </div>
    )
}