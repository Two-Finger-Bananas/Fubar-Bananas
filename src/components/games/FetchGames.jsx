import React, { useState, useEffect } from "react";
import GameRows from "./fetchGameRows";
import { BASE_GAME_URL } from "../../api adapters";
import { useNavigate } from "react-router-dom";
import "./FG.css";
import SlideShow from "./slideShow";

export default function FetchGames({
  selectedGameId,
  setSelectedGameId,
  setGameInfo,
  gameInfo,
  searchQuery,
  
}) {
  
  const navigate = useNavigate();
  const is_admin = localStorage.getItem("is_admin");
  const [bodyBackground, setBodyBackground] = useState(null);
  const [currentImage, setCurrentImage] = useState(0);

  function addGamePage() {
    navigate("/games/create");
  }

  function gameDetailClick(gameId) {
    navigate(`/games/${gameId}`);
  }

  useEffect(() => {
    async function fetchGame() {
      try {
        const response = await fetch(`${BASE_GAME_URL}`);
        const data = await response.json();
        setGameInfo(data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchGame();
  }, []);

  useEffect(() => {
    if (bodyBackground === null) {
      document.body.style.backgroundImage =
        'url(https://res.cloudinary.com/dlpwremao/image/upload/v1705271936/bgi_zdn198.jpg)';
      document.body.style.backgroundPosition = "center";
      document.body.style.backgroundSize = "cover";
      document.body.style.backgroundAttachment = "fixed";
    }
  }, [bodyBackground]);

 

  const filteredGames = gameInfo.filter((game) =>
    game.title.toLowerCase().includes(searchQuery.toLowerCase())
  ); 

  return (
    <>
     <SlideShow gameInfo={gameInfo}/>

      <div id="game-list-title"> </div>

      {/*
      <form id="search-bar-form">
        <label id="theLabel" htmlFor="search-query">&#128269;</label>
        <input
          name="search-query"
          type="text"
          placeholder="Type Game Here"
          value={searchQuery}
          onChange={(event) => setSearchQuery(event.target.value)}
        />
        </form> */}

      <div id="game-card-container">
        
          {filteredGames.map((game, idx) => (
            <GameRows
              key={idx}
              game={game}
              setGameInfo={setGameInfo}
              onClick={() => gameDetailClick(game.gameId)}
              setSelectedGameId={setSelectedGameId}
              selectedGameId={selectedGameId}
            />
          ))}

          </div>
        <div className="addGame">
        {
            is_admin === "true" ? <button onClick={addGamePage}>Add Game</button> : ""
        }
        </div>
       
       
   </>
        
    );
}
