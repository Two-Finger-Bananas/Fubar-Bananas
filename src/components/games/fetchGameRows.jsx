/* eslint-disable react/prop-types */
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function GameRows({ game, setSelectedGameId }) {
  const [isShown, setIsShown] = useState(false);
  const navigate = useNavigate()
  function gameDetailClick(gameId) {
    navigate(`/games/${gameId}`)
    setSelectedGameId(gameId)
}
  const backgroundImage = {
      backgroundImage: `url(${game.coverImg})` 
    }
  
  return (
    <div  className='game-card' 
          style={backgroundImage} 
          onClick={() => gameDetailClick(game.gameId)}
          onMouseEnter={() => setIsShown(true)}
          onMouseLeave={() => setIsShown(false)}
          >
      {
        isShown ? <td id="hover-title">{game.title}</td> : null
      }
    </div>
  );
}


