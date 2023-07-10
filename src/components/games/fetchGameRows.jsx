/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom";
export default function GameRows({ VG, setSelectedGameId }) {
  const navigate = useNavigate()
  return (
    <tr
      onClick={() => {
        setSelectedGameId(VG.gameId);
        navigate(`/games/${VG.gameId}`)
      }}
    >
      <td>{VG.title}</td>
      <td>
        <img src={VG.coverImg} id="listed-game-image" alt="Game Cover" />
      </td>
    </tr>
  );
}


