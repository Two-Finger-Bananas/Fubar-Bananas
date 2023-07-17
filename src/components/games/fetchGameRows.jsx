/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom";
import AverageRating from "../reviews/AverageRating";

export default function GameRows({ game, setSelectedGameId }) {
  const navigate = useNavigate()
  function gameDetailClick(gameId) {
    navigate(`/games/${gameId}`)
    setSelectedGameId(gameId)
}
  return (
   <tr id="game-row">
      <td id="game-items" onClick={() => gameDetailClick(game.gameId)}>{game.title}</td>
      <td>
        <img src={game.coverImg} id="listed-game-image" alt="Game Cover" />
      </td>
    <td><AverageRating game={game} /></td>
    </tr>
  );
}


