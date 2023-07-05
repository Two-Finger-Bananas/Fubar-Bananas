import { BASE_USER_URL } from "../api adapters"
import { TOKEN } from "../api adapters"

export default function DeleteGame(props) {
    async function deleteGame() {
        try {
           const response = await fetch(`${BASE_USER_URL}/${props.id}`, {
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
}