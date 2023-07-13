import { useEffect, useState} from 'react';
import { BASE_COMMENTS_URL } from '../../api adapters';

export default function FetchComments(){
    const[theComments, setTheComments] = useState([]);

    useEffect(() =>{
        async function fetchTheComments(){
            try{
                const response = await fetch(`${BASE_COMMENTS_URL}`);
                const data = await response.json();
                setTheComments(data);
                
            } catch(error){
                console.log(error);
            }
        }
        fetchTheComments();
    }, []);

    return(
        <div>
            <h2>Comments</h2>
            {theComments.map((comment)=>(
                <div key={comment.commentId}>
                    <p>Username: {comment.username}</p>
                    <p>Text: {comment.text}</p>   
                </div>
            ))}
        </div>
    );
}