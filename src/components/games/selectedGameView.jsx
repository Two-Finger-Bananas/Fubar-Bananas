/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import DeleteGame from "./DeleteGame";
import FetchReviewsByGame from "../reviews/fetchReviewsByGame";
import { useNavigate, useParams } from "react-router-dom";
import { BASE_GAME_URL } from "../../api adapters";
import PostReview from "../reviews/PostReviews";
import UpdateGame from "./UpdateGame";
import AverageRating from "../reviews/AverageRating";


export default function SelectedGame() {
  const navigate = useNavigate()
  const [indivGame, setIndivGame] = useState(null);
  const [newReview, setNewReview] = useState(false)
  const [updateGame, setUpdateGame] = useState(false)
  const [reviewLimit, setReviewLimit] = useState(false)
  const [switchPage, setSwitchPage] = useState(false)
  const { id } = useParams()
  const is_admin = localStorage.getItem('is_admin')

  function goBack () {
    navigate('/games')
  }

  useEffect(() => {
    async function fetchSelectedGame() {
      try {
        const response = await fetch(`${BASE_GAME_URL}/${id}`);
        const data = await response.json();
        setIndivGame(data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchSelectedGame();
  }, []);

  return (
    <div>
      {
        indivGame ?
        <div>
          <div id="game-title">
            <img src={indivGame.backgroundImg} style={{width: '1000px', height: '600px'}} />
              <h1>{indivGame.title}</h1>
          </div>
          <div>
            <h2 className='page-buttons' type='button' onClick={() => setSwitchPage(false)} >Details</h2>
            <h2 className='page-buttons' type='button' onClick={() => setSwitchPage(true)} >Reviews</h2>
          </div>
        {
          !switchPage ?
          <>
          <div id="game-details">
            <h3>{indivGame.genre}</h3>
            <h3>{indivGame.platforms}</h3>
            <h3>{indivGame.gameDeveloper}</h3>
            <h3>{indivGame.players}</h3>
            <h3>Released on: {indivGame.publishDate}</h3>
          </div>
          
          <div className="Game-Actions">
            {
              is_admin ==='true' ? 
              <>
            {
             !updateGame ? <button onClick={() => setUpdateGame(true)}>Update</button> 
              : <UpdateGame game={indivGame} setUpdateGame={setUpdateGame} />
            }
            
            <DeleteGame id="DeleteGameButton" gameId={id} />
            </>
              :null
          }

            <button onClick={goBack}>Go Back</button>
            
          </div>
          </> :
          <>
            {
              reviewLimit === false ?
              <>
  
            {
                !newReview ? <button onClick={() => {setNewReview(true)}}>Create Review</button> :
                <PostReview game={indivGame} setNewReview={setNewReview} />
            } 
              </>: null
            }
            <div id='reviews'> 
              <AverageRating game={indivGame} />
              <FetchReviewsByGame setReviewLimit={setReviewLimit} />
            </div>
          </>
        }
        </div> : null
        }
    </div>
  );
}