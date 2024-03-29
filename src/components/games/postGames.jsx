/* eslint-disable no-unused-vars */
import { useNavigate } from "react-router-dom";
import { BASE_GAME_URL } from "../../api adapters";
import {useState} from 'react';
import { TOKEN } from "../../api adapters";

export default function PostGame() {
    const navigate = useNavigate()
    const [title, setTitle] = useState('');
    const [publishDate, setPublishDate] = useState('');
    const [genre,setGenre] = useState('');
    const [gameDeveloper, setGameDeveloper] = useState('')
    const [platforms, setPlatforms] = useState('')
    const [players, setPlayers] = useState('')
    const [coverImg, setCoverImg] = useState('')
    const [backgroundImg, setBackgroundImg] = useState('')

    async function createGame(event) {
        event.preventDefault()
        try {
        const response = await fetch(`${BASE_GAME_URL}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'Application/json',
                'Authorization': `Bearer ${TOKEN}`
            },
            body: JSON.stringify ({
                title: title,
                publishDate: publishDate,
                gameDeveloper: gameDeveloper,
                genre: genre,
                platforms: platforms,
                players: players,
                coverImg: coverImg,
                backgroundImg: backgroundImg
            })
        })
        if(!response.ok){
          throw new Error(`Failed to create game. Status: ${response.status}`)
        }
        const result = await response.json()
        console.log(result)
        navigate('/games')
        return result
        } catch (error) {
            console.log(error)
        }
      }
        return (
            <div>
              <h2>Create a New Game Listing</h2>
              <form onSubmit={createGame}>
                <label>
                  Title:
                  <input type="text"
                   value={title} 
                  onChange={(e) => setTitle(e.target.value)} />
                </label>
                <br />
                <label>
                  Publish Date:
                  <input type="text" 
                  value={publishDate} 
                  onChange={(e) => setPublishDate(e.target.value)} />
                </label>
                <br />
                <label>
                  Game Developer:
                  <input type="text" 
                  value={gameDeveloper} 
                  onChange={(e) => setGameDeveloper(e.target.value)} />
                </label>
                <br />
                <label>
                  Genre:
                  <input type="text" 
                  value={genre} 
                  onChange={(e) => setGenre(e.target.value)} />
                </label>
                <br />
                <label>
                  Platforms:
                  <input type="text" 
                  value={platforms}
                   onChange={(e) => setPlatforms(e.target.value)} />
                </label>
                <br />
                <label>
                  Players:
                  <input type="text" 
                  value={players}
                   onChange={(e) => setPlayers(e.target.value)} />
                </label>
                <br />
                <label>
                  Cover Image:
                  <input type="text" 
                  value={coverImg} 
                  onChange={(e) => setCoverImg(e.target.value)} />
                </label>
                <label>
                Background Image:
                <input
                type="text"
                value={backgroundImg}
                onChange={(e) => setBackgroundImg(e.target.value)} />
                </label>
                <br />
                <button type="submit">Create Game</button>
                <button type="button" onClick={()=>{navigate('/games')}}>Go Back</button>
              </form>
            </div>
          );
        }
    