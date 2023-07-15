/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { BASE_REVIEWS_URL } from "../../api adapters";
import DeleteReview from "./deleteReviews";
import FetchCommentsByReview from "../comments/fetchCommentsByReview";

export default function SelectedReview({ selectedGameId }) {
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
    }, [id])

    return (
        <div>
            {
                indivReview ? (
                    <div>
                        <table id="selected-review">
                        <tbody>
                            <tr>
                                <td>Author: {indivReview.username}</td>
                            </tr>
                            <tr>
                                <td>Rating: {indivReview.rating}</td>
                            </tr>
                            <tr>
                                <td>{indivReview.text}</td>
                            </tr>
                        </tbody> 
                        </table>
                        <div className="Review-Actions">
                            {
                            username === indivReview.username ?
                            <> 
                            <button onClick={updateReview}>Edit</button>
                            <DeleteReview id="DeleteReviewButton" reviewId={id} /> 
                            </>: null
                            }
                            <button onClick={goBack}>Go Back</button>
                            <FetchCommentsByReview review={indivReview} />
                        </div>
                    </div>
                ) : null
            }
        </div>
    )
}