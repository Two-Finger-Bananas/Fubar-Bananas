/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom";
import { BASE_GAME_URL } from "../../api adapters";
import {useState} from 'react';
import { TOKEN } from "../../api adapters";

export default function UpdateGame({ game, setUpdateGame }) {
    const [title, setTitle] = useState('');
    const [publishDate, setPublishDate] = useState('');
    const [genre,setGenre] = useState([]);
    const [gameDeveloper, setGameDeveloper] = useState('')
    const [platforms, setPlatforms] = useState([])
    const [players, setPlayers] = useState([])
    const [coverImg, setCoverImg] = useState('')
    // console.log(game)
    
    async function patchGame(event) {
        event.preventDefault()
        try {
        const response = await fetch(`${BASE_GAME_URL}/${game.gameId}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'Application/json',
                'Authorization': `Bearer ${TOKEN}`
            },
            body: JSON.stringify ({
                title: !title ? `${game.title}` : title,
                publishDate: !publishDate ? `${game.publishDate}` : publishDate,
                gameDeveloper: !gameDeveloper ? `${game.gameDeveloper}` : gameDeveloper,
                genre: !genre.length ? `${game.genre}` : genre,
                platforms: !platforms.length ? `${game.platforms}` : platforms,
                players: !players.length ? `${game.players}` : players,
                coverImg: !coverImg ? `${game.coverImg}` : coverImg
            })
        })
        const result = await response.json()
        setUpdateGame(false)
        return result
        } catch (error) {
            console.log(error)
        }
        
    }

    return(
        <div>
            <form onSubmit={patchGame}>
            <label>
          Title:
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </label>
        <br />
        <label>
          Publish Date:
          <input
            type="date"
            value={publishDate}
            onChange={(e) => setPublishDate(e.target.value)}
          />
        </label>
        <br />
        <label>
          Genre:
          <input
            type="text"
            value={genre}
            onChange={(e) => setGenre(e.target.value)}
          />
        </label>
        <label>
          Game Developer:
          <input
            type="text"
            value={gameDeveloper}
            onChange={(e) => setGameDeveloper(e.target.value)}
          />
        </label>
        <label>
          Platforms:
          <input
            type="text"
            value={platforms}
            onChange={(e) => setPlatforms(e.target.value)}
          />
        </label>
        <label>
          Players:
          <input
            type="text"
            value={players}
            onChange={(e) => setPlayers(e.target.value)}
          />
        </label>
        <label>
          Cover Image:
          <input
            type="text"
            value={coverImg}
            onChange={(e) => setCoverImg(e.target.value)}
          />
        </label>
        <br />
        <button type="submit">Update</button>
      </form>
    </div>
  );
}

