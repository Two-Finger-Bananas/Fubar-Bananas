/* eslint-disable react/prop-types */
import { BASE_GAME_URL } from "../api adapters"
import { TOKEN } from "../api adapters"

export default function DeleteGame(props) {
    async function deleteGame() {
        try {
           const response = await fetch(`${BASE_GAME_URL}/${props.gameId}`, {
            method: "DELETE",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${TOKEN}`
            }
           }) 
           const result = await response.json()
           console.log(result)
           return result
        } catch (error) {
            console.log(error)
        }
    }

    // const currentUser = localStorage.getItem("username");

    return(
        <button id="Delete-Button" type="button" onClick={deleteGame}>
            Delete Game
        </button>
    );
}