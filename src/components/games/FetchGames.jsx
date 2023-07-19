/* eslint-disable react/prop-types */
import { useState,useEffect } from "react";
import GameRows from "./fetchGameRows";
import { BASE_GAME_URL } from "../../api adapters";
import { useNavigate } from "react-router-dom";
import './FGR.css';
import './FG.css';




export default function FetchGames({ selectedGameId, setSelectedGameId }){
    const[gameInfo, setGameInfo] = useState([]);
    const [searchQuery, setSearchQuery] = useState("")
    const navigate = useNavigate()
    const is_admin = localStorage.getItem('is_admin')
    const [bodyBackground, setBodyBackgorund] = useState(null)
    const [currentImage, setCurrentImage] = useState(0);
    function addGamePage() {
        navigate('/games/create')
    }
    function gameDetailClick(gameId) {
        navigate(`/games/${gameId}`)
    }
    useEffect(() =>{
        async function fetchGame(){
            try{
                const response = await fetch(`${BASE_GAME_URL}`);
                const data = await response.json();
                setGameInfo(data);
            } catch(error){
                console.log(error);
            }
        }
        fetchGame();
    }, [])

    useEffect(() => {
        if(bodyBackground === null) {
            document.body.style.backgroundImage = 'url(https://res.cloudinary.com/dvto5eysb/image/upload/v1689700318/pexels-lucie-liz-3165335_tvjsu1.jpg)';
            document.body.style.backgroundPosition = 'center';
            document.body.style.backgroundSize = 'cover';
            document.body.style.backgroundAttachment = 'fixed';
        }
    }, [bodyBackground]) 
    //code for slideshow
useEffect(()=> {
    const imageShow = setInterval(()=>{
        setCurrentImage((theIndex)=> theIndex ===gameInfo.length - 1 ? 0: theIndex +1)
    }, 5000)
return () => {
    clearInterval(imageShow)
  };
}, [gameInfo]);

//test code for search bar


const filteredGames = gameInfo.filter((game) =>
game.title.toLowerCase().includes(searchQuery.toLowerCase())
);

//test end


    return (
        
        <div>
        <div className="slideshow-container">
          {gameInfo.map((game, idx) => (
            <div
              key={idx}
              className={`slideshow-image ${idx === currentImage ? 'active' : ''}`}
              style={{ backgroundImage: `url(${game.backgroundImg})`}}
            />
          ))}
        </div>
    
        
        <form id="search-bar-form">
            <label htmlFor="search-query">Search: </label>
            <input
            name="search-query"
            type="text"
            placeholder="Type Game Here"
            value={searchQuery}
            onChange={(event) => setSearchQuery(event.target.value)}
            />
        </form>


    <div id="game-card-container">
            
            <h2 id="gl-title" colSpan = "3">Game List</h2>
            <table>
 
           <tbody id="game-card-rows">
                { filteredGames.map((game, idx) =>(
                    <GameRows
                    key={idx}
                    game={game}
                    setGameInfo={setGameInfo}
                    onClick={() => gameDetailClick(game.gameId)}
                    setSelectedGameId={setSelectedGameId} 
                    selectedGameId={selectedGameId}
                  />
                ))}  
           </tbody>
           </table>
        <div>
        {
            is_admin === "true" ? <button onClick={addGamePage}>Add Game</button> : ""
        }
        </div>
        </div>
       
    </div>
        
    );
}
