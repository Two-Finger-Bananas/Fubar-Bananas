import { useEffect, useState } from "react";
import { BASE_USER_URL } from "../../api adapters";
import { useNavigate } from "react-router-dom";

export default function FetchUsers() {
    const [users, setUsers] = useState([])
    const [searchQuery, setSearchQuery] = useState("")
    const navigate = useNavigate()
    useEffect(() => {
        async function fetchUsers() {
            try {
                const response = await fetch(BASE_USER_URL)
                const data = response.json()
                setUsers(data)
            } catch (error) {
                console.log(error)
            }
        }
        fetchUsers()
    }, [])
    
    const filteredUsers = users.filter((user) =>
    user.username.toLowerCase().includes(searchQuery.toLowerCase())
    );
    
    return (
        <div>
        <form id="search-bar-form">
        <label htmlFor="search-query">Search: </label>
        <input
          name="search-query"
          type="text"
          placeholder="Type User Here"
          value={searchQuery}
          onChange={(event) => setSearchQuery(event.target.value)}
        />
        </form>

        { filteredUsers.map((user) =>(
                <h2 key={user.userId} onClick={() => {navigate(`/user/${user.userId}`)}}>{user.username}</h2>
                ))}
        </div>
    )
}

