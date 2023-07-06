/* eslint-disable react/prop-types */
import { useState,useEffect } from "react";
import GameRows from "./fetchGameRows";
import { BASE_GAME_URL } from "../api adapters";



export default function FetchGames({setSelectedGameId}){
    const[gameInfo, setGameInfo] = useState([]);
   
 
 const [searchQuery, setSearchQuery] = useState("")

    useEffect(() =>{
        async function fetchGame(){
            try{
                const response = await fetch(`${BASE_GAME_URL}`);
                const data = await response.json();
                setGameInfo(data);
                
            } catch(error){
                console.error(error);
            }
        }
        fetchGame();
    }, [])
//test code for search bar


const filteredGames = gameInfo.filter((VG) =>
VG.title.toLowerCase().includes(searchQuery.toLowerCase())
);

const gameDetailClick = (gameId) => {
setSelectedGameId(gameId);
};




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
                
                
                { filteredGames.map((VG) =>(
                    <GameRows
                    key={VG.gameId}
                    VG={VG}
                    setSelectedGameId={setSelectedGameId}
                    setGameInfo={setGameInfo}
                    onClick={() => gameDetailClick(VG.gameId)}
                  />
                  
                ))}  
            </tbody>
        </table>
        </div>
       
        </div>
        
    );
}
