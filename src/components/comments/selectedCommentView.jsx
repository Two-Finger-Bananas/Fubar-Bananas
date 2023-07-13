import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { BASE_COMMENTS_URL } from "../../api adapters";
import DeleteComment from "./deleteComments";
import EditComment from "./editComments";

export default function SelectedComment({ selectedReviewId }) {
    const navigate = useNavigate()
    const [indivComment, setIndivComment] = useState(null);
    const { id } = useParams()
    function goBack () {
        navigate(`/reviews/${selectedReviewId}`)
      }

    function updateComment() {
        navigate(`/comments/update/${id}`)
    }
    useEffect(() => {
        async function fetchSelectedComments() {
            try {
                const response = await fetch(`${BASE_COMMENTS_URL}/${id}`);
                const data = await response.json();
                setIndivComment(data)
            } catch (error) {
                console.log(error)
            }
        }
        if (id) {
            fetchSelectedComments()
        }
    }, [id])

    return (
        <div>
            {
                indivComment ? (
                    <div>
                        <table id="selected-comment">
                        <tbody>
                            <tr>
                                <td>{indivComment.username}</td>
                            </tr>
                            <tr>
                                <td>{indivComment.text}</td>
                            </tr>
                        </tbody> 
                        </table>
                        <div className="comment-Actions">
                            <button onClick={updateComment}>Edit</button>
                            <DeleteComment id="DeleteCommentButton" CommentId={id} />
                            <EditComment/>
                            <button onClick={goBack}>Go Back</button>
                            </div>
                    </div>
                ) : null
            }
        </div>
    )
}