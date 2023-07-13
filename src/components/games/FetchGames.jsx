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
//test code for search bar


const filteredGames = gameInfo.filter((game) =>
game.title.toLowerCase().includes(searchQuery.toLowerCase())
);

//test end


    return (
        
    <div>
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


    <div id= "game-card">
        <table>
            <thead>
                <tr>
                    <th id="gl-title" colSpan = "3">Game List</th>
                </tr>
            </thead>
           <tbody>
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
        <button onClick={addGamePage}>Add Game</button>
        </div>
        </div>
       
    </div>
        
    );
}
