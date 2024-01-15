/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import DeleteGame from "./DeleteGame";
import FetchReviewsByGame from "../reviews/fetchReviewsByGame";
import { useNavigate, useParams } from "react-router-dom";
import { BASE_GAME_URL } from "../../api adapters";
import PostReview from "../reviews/PostReviews";
import UpdateGame from "./UpdateGame";
import AverageRating from "../reviews/AverageRating";
import './sg.css';

export default function SelectedGame({ setAvgRating, avgRating, setFetch, Fetch }) {
  const navigate = useNavigate()
  const [indivGame, setIndivGame] = useState([]);
  const [newReview, setNewReview] = useState(false)
  const [updateGame, setUpdateGame] = useState(false)
  const [switchPage, setSwitchPage] = useState(false)
  const { id } = useParams()
  const is_admin = localStorage.getItem('is_admin')
  const username = localStorage.getItem('username')
  const [bodyBackground, setBodyBackgorund] = useState(null)
  const [genreArr, setGenreArr] = useState([])
  const [platformsArr, setPlatformsArr] = useState([])
  const [playersArr, setPlayersArr] = useState([])

  function goBack () {
    setAvgRating([])
    navigate('/games')
  }

  useEffect(() => {
    async function fetchSelectedGame() {
      try {
        const response = await fetch(`${BASE_GAME_URL}/${id}`);
        const data = await response.json();
        setIndivGame(data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchSelectedGame();
  }, []);

  /*useEffect(() => {
    if(bodyBackground === null) {
        document.body.style.backgroundImage = 'url(https://res.cloudinary.com/dlpwremao/image/upload/v1689705193/image_ehdeok.jpg)';
        document.body.style.backgroundPosition = 'center';
        document.body.style.backgroundSize = 'cover';
        document.body.style.backgroundAttachment = 'fixed';
    }
  }, [bodyBackground])
  */
  
  useEffect(() => {
    if(indivGame && indivGame.genre) {
    const genreArrData = indivGame.genre.split(', ')
    setGenreArr(genreArrData)
    }
    if(indivGame && indivGame.platforms) {
      const platformsArrData = indivGame.platforms.split(', ')
      setPlatformsArr(platformsArrData)
      }
    if(indivGame && indivGame.players) {
    const playersArrData = indivGame.players.split(', ')
    setPlayersArr(playersArrData)
    }
  }, [indivGame])
  
  return (
    <div id="selected-game">
      {
        indivGame ?
        <div>
          <div id="game-title">
            <img src={indivGame.backgroundImg} id='game-view-image' />
              <h1>{indivGame.title}</h1>
          </div>
          <div className="button-container">
            {
              !switchPage ?
                <>
                <h2 className='page-buttons' id='active-button' type='button' onClick={() => setSwitchPage(false)} >Details</h2>
                <h2 className='page-buttons' type='button' onClick={() => setSwitchPage(true)} >Reviews</h2>
                </>
                :
                <>
                <h2 className='page-buttons' type='button' onClick={() => setSwitchPage(false)} >Details</h2>
                <h2 className='page-buttons' id='active-button' type='button' onClick={() => setSwitchPage(true)} >Reviews</h2>
                </>
            }
          </div>
        {
          !switchPage ?
          <>
          <div id="details-card">
            <div className="details-categories">
              <h2 className="details-title">Genres</h2>
            {
              genreArr && genreArr.length ?
              genreArr.map((genre, idx) => {
                return <h3 key={idx} className="details-text">{genre}</h3>
              })
              : null
            }
            </div>
            <div className="details-categories">
              <h2 className="details-title">Platforms</h2>
            {
              platformsArr && platformsArr.length ?
              platformsArr.map((platform, idx) => {
                return <h3 key={idx} className="details-text">{platform}</h3>
              })
              : null
            }
            </div>
            <div className="details-categories">
              <h2 className="details-title">Compatibility</h2>
            {
              playersArr && playersArr.length ?
              playersArr.map((player, idx) => {
                return <h3 key={idx} className="details-text">{player}</h3>
              })
              : null
            }
            </div>
            <div className="details-categories">
              <h2 className="details-title">Developer</h2>
            <h3  className="details-text">{indivGame.gameDeveloper}</h3>
            </div>
            <div className="details-categories">
              <h2 className="details-title">Release Date</h2>
            <h3  className="details-text">{indivGame.publishDate}</h3>
            </div>
          </div>
          
          <div className="Game-Actions">
            {
              is_admin ==='true' ? 
              <>
            {
             !updateGame ? <button onClick={() => setUpdateGame(true)}>Update</button> 
              : <UpdateGame game={indivGame} setUpdateGame={setUpdateGame} />
            }
            
            <DeleteGame id="DeleteGameButton" gameId={id} />
            </>
              :null
          }

            <button onClick={goBack}>Go Back</button>
            
          </div>
          </> :
          <>
            {
              username ?
              <>
              {
                  !newReview ? <button onClick={() => {setNewReview(true)}}>Create Review</button> :
                  <PostReview game={indivGame} setNewReview={setNewReview} setAvgRating={setAvgRating} />
              } 
              </>: null
            }
            
            {
              avgRating.length ?
            <div id='reviews'>
              <AverageRating game={indivGame} avgRating={avgRating} setAvgRating={setAvgRating} /> 
              <FetchReviewsByGame avgRating={avgRating} setFetch={setFetch} fetch={fetch} /> 
            </div> :
            <div id='reviews-center'>
            <AverageRating game={indivGame} avgRating={avgRating} setAvgRating={setAvgRating} /> 
            <FetchReviewsByGame avgRating={avgRating} setFetch={setFetch} fetch={fetch} /> 
            </div>
            }
          </>
        }
        </div> : null
        }
    </div>
  );
}