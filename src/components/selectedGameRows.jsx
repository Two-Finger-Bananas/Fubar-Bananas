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
                <td>{indivGame.title}</td>
              </tr>
              <tr>
                <td>{indivGame.description}</td>
              </tr>
              <tr>
                <td></td>
              </tr>
            </tbody>
          </table>
          <button onClick={() => setSelectedGameId(null)}>Go Back</button>
        </div>
      ) : null}
    </div>
  );
}
