import { useState, useEffect } from "react";

export const BASE_URL = 'http://localhost:3000/games';

export default function SelectedGame({ selectedGameId, setSelectedGameId }) {
  const [indivGame, setIndivGame] = useState(null);

  useEffect(() => {
    async function fetchSelectedGame() {
      try {
        const response = await fetch(`${BASE_URL}/${selectedGameId}`);
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
          <button onClick={() => setSelectedGameId(null)}>Go Back</button>
        </div>
      ) : null}
    </div>
  );
}
