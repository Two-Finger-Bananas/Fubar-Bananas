import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from './components/login';
import Register from './components/register';
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

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [selectedGameId, setSelectedGameId] = useState(null);
  const [selectedReviewId, setSelectedReviewId] = useState(null);
  const [selectedCommentId, setSelecetedCommentId]=useState(null);
  return (
    <>
            <div className="App">
              <NavBar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/register" element={<Register setIsLoggedIn={setIsLoggedIn} />} />
                <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
                <Route  path="/games" element={<FetchGames setSelectedGameId={setSelectedGameId} />} />
                <Route path="/games/:id" element={<SelectedGame selectedGameId={selectedGameId} setSelectedGameId={setSelectedGameId} setSelectedReviewId={setSelectedReviewId} selectedReviewId={selectedReviewId} />} />
                <Route path="/games/update/:id" element={<UpdateGame />} />
                <Route path="/games/create" element={<PostGame />} />
                <Route path="/reviews/update/:id" element={<EditReview />} />
                <Route path="/reviews/:id" element={<SelectedReview selectedReviewId={selectedReviewId} setSelectedReviewId={setSelectedReviewId} selectedGameId={selectedGameId} />} />
                <Route path="/reviews" element={<PostReview />} />
              </Routes>
            </div>
    </>
  );
}

export default App;
