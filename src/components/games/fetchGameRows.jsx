/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom";
export default function GameRows({ game, setSelectedGameId }) {
  const navigate = useNavigate()
  function gameDetailClick(gameId) {
    navigate(`/games/${gameId}`)
    setSelectedGameId(gameId)
}
  return (
   <tr>
      <td onClick={() => gameDetailClick(game.gameId)}>{game.title}</td>
      <td>
        <img src={game.coverImg} id="listed-game-image" alt="Game Cover" />
      </td>
    </tr>
  );
}


