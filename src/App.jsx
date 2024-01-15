import { useState, useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Login from './components/users/login';
import Register from './components/users/register';
import NavBar from './components/NavBar';

import FetchGames from './components/games/FetchGames';
import SelectedGame from './components/games/selectedGameView';
import UpdateGame from './components/games/UpdateGame';
import PostGame from './components/games/postGames';
import EditReview from './components/reviews/editReviews';
import PostReview from './components/reviews/PostReviews';
import SelectedReview from './components/reviews/selectedReviewPage';
import './App.css';
import UserCard from './components/users/userCard';
import AdminDashboard from './components/users/adminDash';
import Profile from './components/users/profile';

function App() {
  const [ isLoggedIn, setIsLoggedIn ] = useState(false);
  const [ selectedGameId, setSelectedGameId ] = useState(null)
  const [avgRating, setAvgRating]= useState([])
  const [Fetch, setFetch] = useState(false)
  const[gameInfo, setGameInfo] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    if (location.pathname === '/') {
      navigate('/games');
    }
  }, [location.pathname, navigate]);

  return (
    <>
            <div className="App">
              <NavBar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} gameInfo={gameInfo} setSearchQuery={setSearchQuery}/>
              <Routes>
                
                <Route path="/register" element={<Register setIsLoggedIn={setIsLoggedIn} />} />
                <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} gameInfo={gameInfo} />} />
                <Route  path="/games" element={<FetchGames setSelectedGameId={setSelectedGameId} selectedGameId={selectedGameId}  gameInfo={gameInfo} setGameInfo={setGameInfo} searchQuery={searchQuery} setSearchQuery={setSearchQuery} />} />
                <Route path="/games/:id" element={<SelectedGame setSelectedGameId={setSelectedGameId} selectedGameId={selectedGameId} avgRating={avgRating} setAvgRating={setAvgRating} setFetch={setFetch} Fetch={Fetch} />} />
                <Route path="/games/update/:id" element={<UpdateGame />} />
                <Route path="/games/create" element={<PostGame />} />
                <Route path="/reviews/update/:id" element={<EditReview />} />
                <Route path="/reviews/:id" element={<SelectedReview setSelectedGameId={setSelectedGameId} selectedGameId={selectedGameId} setFetch={setFetch} Fetch={Fetch} />} />
                <Route path="/reviews" element={<PostReview />} />
                <Route path="/user/:id" element={<UserCard />} />
                <Route path="/admin" element={<AdminDashboard />} />
                <Route path="/profile" element={<Profile />} />
              </Routes>
              
             
            </div>
    </>
  );
}

export default App;
