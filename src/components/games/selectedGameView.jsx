/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import DeleteGame from "./DeleteGame";
import FetchReviewsByGame from "../reviews/fetchReviewsByGame";
import { useNavigate, useParams } from "react-router-dom";
import { BASE_GAME_URL } from "../../api adapters";
import PostReview from "../reviews/PostReviews";
import UpdateGame from "./UpdateGame";

export default function SelectedGame({ selectedGameId, setSelectedGameId }) {
  const navigate = useNavigate()
  const [indivGame, setIndivGame] = useState(null);
  const [newReview, setNewReview] = useState(false)
  const [updateGame, setUpdateGame] = useState(false)
  const { id } = useParams()
  // function updateGame() {
  //   navigate(`/games/update/${id}`)
  // }

  function postReviewPage() {
      navigate('/reviews')
  }
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

    if (id) {
      fetchSelectedGame();
    }
  }, [updateGame]);

  return (
    <div>
      {indivGame ? (
        <div>
          <table id="selected-game">
            <tbody>
              <tr>
                <td>{indivGame.coverImg}</td>
              </tr>
              <tr>
                <td>{indivGame.title}</td>
              </tr>
              <tr>
                <td>{indivGame.genre}</td>
              </tr>
              <tr>
              <td>{indivGame.platforms}</td>
              </tr>
              <tr>
                <td>{indivGame.gameDeveloper}</td>
              </tr>
              <tr>
                <td>{indivGame.players}</td>
              </tr>
              <tr>
                <td>Released on: {indivGame.publishDate}</td>
              </tr>
            </tbody>
          </table>
          <div className="Game-Actions">
            { !updateGame ? <button onClick={() => setUpdateGame(true)}>Update</button> 
              : <UpdateGame game={indivGame} setUpdateGame={setUpdateGame} />
            }
            <DeleteGame id="DeleteGameButton" gameId={id} />
            <button onClick={goBack}>Go Back</button>
            {
              !newReview ? <button onClick={() => {setNewReview(true)}}>Create Review</button> :
              <PostReview game={indivGame} setNewReview={setNewReview} />
            }
            <FetchReviewsByGame game={indivGame} setSelectedGameId={setSelectedGameId} selectedGameId={selectedGameId} />
          </div>
        </div>
      ) : null}
    </div>
  );
}