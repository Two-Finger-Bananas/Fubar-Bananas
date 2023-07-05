import { json } from "react-router-dom";
import { BASE_GAME_URL } from "../api adapters";
import React, {useState} from 'react';
import { TOKEN } from "../api adapters";

export default function UpdateGame(props) {
    const [title, setTitle] = useState(props.title);
    const [publishDate, setPublishDate] = useState(props.publishDate);
    const [genre,setGenre] = useState(props.genre);
    const handleSubmit= async (e) => {
        e.preventDefault();
       
    }
    async function patchGame() {
        try {
        const response = await fetch(`${BASE_GAME_URL}/${props.id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'Application/json',
                'Authorization': `Bearer ${TOKEN}`
            },
            body: JSON.stringify ({
                title: props.title,
                publishDate: props.publishDate,
                gameDeveloper: props.gameDeveloper,
                genre: props.genre,
                platforms: props.platforms,
                players: props.players,
                coverImg: props.coverImg
            })
        })
        const result = await response.json()
        console.log(result)
        return result
        } catch (error) {
            console.log(error)
        }
    }
    

    return(
        <div>
            <form onSubmit={handleSubmit}>
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
        <br />
        <button type="submit">Update</button>
      </form>
    </div>
  );
}

