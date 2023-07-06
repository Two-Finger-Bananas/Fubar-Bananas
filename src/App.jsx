import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from './components/login';
import Register from './components/register';
import NavBar from './components/NavBar';
import Home from './components/Home';
import FetchGames from './components/FetchGames';
import SelectedGame from './components/selectedGameView';
import UpdateGame from './components/UpdateGame';
import PostGame from './components/postGames';
import './App.css';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [selectedGameId, setSelectedGameId] = useState(null);
  return (
    <>
            <div className="App">
              <NavBar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/register" element={<Register setIsLoggedIn={setIsLoggedIn} />} />
                <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
                <Route  path="/games" element={<FetchGames setSelectedGameId={setSelectedGameId} />} />
                <Route path="/games/:id" element={<SelectedGame selectedGameId={selectedGameId} setSelectedGameId={setSelectedGameId} />} />
                <Route path="/games/update/:id" element={<UpdateGame />} />
                <Route path="/games/create" element={<PostGame />} />
              </Routes>
            </div>
    </>
  );
}

export default App;
