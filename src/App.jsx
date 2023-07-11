import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from './components/users/login';
import Register from './components/users/register';
import NavBar from './components/NavBar';
import Home from './components/Home';
import FetchGames from './components/games/FetchGames';
import SelectedGame from './components/games/selectedGameView';
import UpdateGame from './components/games/UpdateGame';
import PostGame from './components/games/postGames';
import EditReview from './components/reviews/editReviews';
import PostReview from './components/reviews/PostReviews';
import SelectedReview from './components/reviews/selectedReviewPage';
import './App.css';
import UserCard from './components/users/userCard';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <>
            <div className="App">
              <NavBar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/register" element={<Register setIsLoggedIn={setIsLoggedIn} />} />
                <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
                <Route  path="/games" element={<FetchGames />} />
                <Route path="/games/:id" element={<SelectedGame />} />
                <Route path="/games/update/:id" element={<UpdateGame />} />
                <Route path="/games/create" element={<PostGame />} />
                <Route path="/reviews/update/:id" element={<EditReview />} />
                <Route path="/reviews/:id" element={<SelectedReview />} />
                <Route path="/reviews" element={<PostReview />} />
                <Route path="/user/:id" element={<UserCard />} />
              </Routes>
            </div>
    </>
  );
}

export default App;
