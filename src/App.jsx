import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/login';
import Register from './components/register';
import NavBar from './components/NavBar';
import Home from './components/Home';
import FetchGames from './components/fetchGames';
import './App.css';
import SelectedGame from './components/selectedGameView';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [selectedGameId, setSelectedGameId] = useState(null);

  return (
    <>
      {selectedGameId ? (
        <SelectedGame selectedGameId={selectedGameId} setSelectedGameId={setSelectedGameId} />
      ) : (
        <>
          <Router>
            <div className="App">
              <NavBar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/register" element={<Register setIsLoggedIn={setIsLoggedIn} />} />
                <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
                <Route
                  path="/fetchGames"
                  element={<FetchGames setSelectedGameId={setSelectedGameId} />}
                />
              </Routes>
            </div>
          </Router>
        </>
      )}
    </>
  );
}

export default App;
