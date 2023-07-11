/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import DeleteGame from "./DeleteGame";
import FetchReviewsByGame from "../reviews/fetchReviewsByGame";
import { useNavigate } from "react-router-dom";
import { BASE_GAME_URL } from "../../api adapters";

export default function SelectedGame(game) {
  const navigate = useNavigate()
  const [indivGame, setIndivGame] = useState(null);

  function updateGame() {
    navigate(`/games/update/${game.gameId}`)
  }

  function postReviewPage() {
      navigate('/reviews')
  }
  function goBack () {
    navigate('/games')
  }

  useEffect(() => {
    async function fetchSelectedGame() {
      try {
        const response = await fetch(`${BASE_GAME_URL}/${game.gameId}`);
        const data = await response.json();
        setIndivGame(data);
      } catch (error) {
        console.log(error);
  
      }
    }

    if (game.gameId) {
      fetchSelectedGame();
    }
  }, [game.gameId]);

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
            <DeleteGame id="DeleteGameButton" gameId={game.gameId} />
            <button onClick={goBack}>Go Back</button>
            <button onClick={postReviewPage}>Create Review</button>
            <FetchReviewsByGame game={indivGame} />
          </div>
        </div>
      ) : null}
    </div>
  );
}