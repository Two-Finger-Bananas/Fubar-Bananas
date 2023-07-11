/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom";
export default function GameRows({ game }) {
  const navigate = useNavigate()
  console.log(game);
  return (
   <tr>
      <td>{game.title}</td>
      <td>
        <img src={game.coverImg} id="listed-game-image" alt="Game Cover" />
      </td>
    </tr>
  );
}


