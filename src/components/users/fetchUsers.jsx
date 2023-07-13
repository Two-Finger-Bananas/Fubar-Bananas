import { useEffect, useState } from "react";
import { BASE_USER_URL } from "../../api adapters";
import UserCard from "./userCard";

export default function FetchUsers() {
    const [users, setUsers] = useState([])
    const [searchQuery, setSearchQuery] = useState("")
    useEffect(() => {
        async function fetchUsers() {
            try {
                const response = await fetch(BASE_USER_URL)
                const data = await response.json()
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
        <h1>Users</h1>
        { 
        filteredUsers.map((user, idx) =>(<UserCard key={idx} user={user} />))
        }
        </div>
    )
}

