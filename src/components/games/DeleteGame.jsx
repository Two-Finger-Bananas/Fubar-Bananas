/* eslint-disable react/prop-types */
import { BASE_GAME_URL } from "../../api adapters"
import { TOKEN } from "../../api adapters"
import { useNavigate } from "react-router-dom"

export default function DeleteGame(props) {
    const navigate = useNavigate()
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
           navigate('/games')
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