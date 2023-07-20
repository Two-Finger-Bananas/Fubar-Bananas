import FetchCommentsByUser from "../comments/fetchCommentsByUser";
import FetchReviewsByUser from "../reviews/fetchReviewsByUser";


export default function Profile() {
    const userId = Number(localStorage.getItem('userId'))
    console.log(userId)
    return (
        <>
        <FetchReviewsByUser userId={userId} />
        <FetchCommentsByUser userId={userId} />
        
        </>
    )

}