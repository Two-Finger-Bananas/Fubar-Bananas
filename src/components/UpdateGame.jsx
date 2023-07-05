import { json } from "react-router-dom";
import { BASE_GAME_URL } from "../api adapters";
import { TOKEN } from "../api adapters";

export default function UpdateGame(props) {
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
    
}