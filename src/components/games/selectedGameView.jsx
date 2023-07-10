/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import DeleteGame from "./DeleteGame";
import FetchReviews from "../reviews/fetchReviews";
import { useNavigate } from "react-router-dom";
import { BASE_GAME_URL } from "../../api adapters";

export default function SelectedGame({ selectedGameId, setSelectedGameId, setSelectedReviewId, selectedReviewId}) {
  const navigate = useNavigate()
  const [indivGame, setIndivGame] = useState(null);

  function updateGame() {
    navigate(`/games/update/${selectedGameId}`)
  }

  function goBack () {
    setSelectedGameId(null)
    navigate('/games')
  }

  useEffect(() => {
    async function fetchSelectedGame() {
      try {
        const response = await fetch(`${BASE_GAME_URL}/${selectedGameId}`);
        const data = await response.json();
        setIndivGame(data);
      } catch (error) {
        console.log(error);
  
      }
    }

    if (selectedGameId) {
      fetchSelectedGame();
    }
  }, [selectedGameId]);

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
                <td>{indivGame.gameDevelopers}</td>
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
            <button onClick={updateGame}>Update</button>
            <DeleteGame id="DeleteGameButton" gameId={selectedGameId} />
            <button onClick={goBack}>Go Back</button>
            <FetchReviews gameId={selectedGameId} setSelectedReviewId={setSelectedReviewId} selectedReviewId={selectedReviewId}/>
          </div>
        </div>
      ) : null}
    </div>
  );
}