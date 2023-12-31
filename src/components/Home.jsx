import { useEffect } from "react";
import './home.css';
import videoSource from '../media/GS-Homepage.mp4';
import Footer from './Footer';

export default function Home() {
  
  useEffect(() => {
    const videoBackground = document.getElementById("video-background");
    if (videoBackground) {
      videoBackground.play();
      videoBackground.loop = true;
    }
  }, []);

  return (
    <div className="Home">
      <div className="content">
        <h1>Fubar Gaming</h1>
        <br />
        <br />
        <br />
        <h2>Level up your gaming experience with the ultimate game review destination! Explore, discover, and conquer the best games out there. Join our community of passionate gamers and dive into expert reviews that will guide you to your next epic adventure. Get ready to level up your gaming journey with us!</h2>
      </div>
      <video className="video-background" autoPlay loop muted >
        <source src={videoSource} type="video/mp4" />
      </video>
    <Footer/>
    </div>
   
  );
}
