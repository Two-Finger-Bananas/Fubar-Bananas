/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { BASE_REVIEWS_URL } from "../../api adapters";
import DeleteReview from "./deleteReviews";
import FetchCommentsByReview from "../comments/fetchCommentsByReview";
import PostComment from "../comments/postComment";

export default function SelectedReview({ selectedGameId, Fetch, setFetch }) {
    const navigate = useNavigate()
    const [indivReview, setIndivReview] = useState(null);
    const { id } = useParams()
    const username = localStorage.getItem('username')
    function goBack () {
        navigate(`/games/${selectedGameId}`)  
      }

    function updateReview() {
        navigate(`/reviews/update/${id}`)
    }
    useEffect(() => {
        async function fetchSelectedReview() {
            try {
                const response = await fetch(`${BASE_REVIEWS_URL}/${id}`);
                const data = await response.json();
                setIndivReview(data)
            } catch (error) {
                console.log(error)
            }
        }
        if (id) {
            fetchSelectedReview()
        }
    }, [Fetch])
    return (
        <div id="comments">
            {
                indivReview ? (
                    <>
                    <div className="review-item">
                    <div className="name-box">
                    <h3>{indivReview.username}</h3>
                    </div>
                    <div className="text-box">
                    <p>{indivReview.text}</p>
                    </div>
                    <div className="rating-box">
                    <p className="rating-title">Rating</p>
                    <p className="rating-text">{indivReview.rating}</p>
                    </div>
                </div>
                <div className="Review-Actions">
                    {
                    username === indivReview.username ?
                    <> 
                    <button onClick={updateReview}>Edit</button>
                    <DeleteReview id="DeleteReviewButton" reviewId={id} selectedGameId={selectedGameId} /> 
                    </>: null
                    }
                    <button onClick={goBack}>Go Back</button>
                    {
                    username ?
                        <PostComment reviewId={id} gameId={id} setFetch={setFetch} />
                    : null
                    }
                    <FetchCommentsByReview review={indivReview} setFetch={setFetch} Fetch={Fetch} />
                </div>
                </>    
                ) : null
            }
        </div>
    )
}