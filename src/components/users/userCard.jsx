

export default function UserCard(user) {
    return (
        <div>
        <h1>User Info:</h1>
        <h2>Name: {user.username}</h2>
        <h3>Email:{user.email}</h3>
        <h3>User Id: {user.userId}</h3>
        <button>Edit</button>
        <button>Delete</button>
        <h1>Reviews</h1>
        
        <h1>Comments</h1>
        </div>
    )
}