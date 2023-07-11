/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom";
export default function GameRows({ prop }) {
  const navigate = useNavigate()
  console.log(prop)
  return (
    <tr>
      <td>{prop.title}</td>
      <td>
        <img src={prop.coverImg} id="listed-game-image" alt="Game Cover" />
      </td>
    </tr>
  );
}


