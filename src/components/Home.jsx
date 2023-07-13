/*export default function Home() {
    return (
      <div className="Home">
        <h1>Level up your gaming experience with the ultimate game review destination! Explore, discover, and conquer the best games out there. Join our community of passionate gamers and dive into expert reviews that will guide you to your next epic adventure. Get ready to level up your gaming journey with us!</h1>
      </div>
    );
  }*/




import { useEffect } from "react";
import './Home.css';
import { useNavigate } from "react-router-dom";
import videoSource from '../imgs-and-vids/GS-Homepage.mp4';

export default function Home() {
  const navigate = useNavigate()
  useEffect(() => {
    const videoBackground = document.getElementById("video-background");
    if (videoBackground) {
      videoBackground.play();
      videoBackground.loop = true;
    }
  }, []);

  return (
    <div className="Home">
      <video className="video-background" autoPlay loop muted >
        <source src={videoSource} type="video/mp4" />
      </video>
      <div className="content">
        <h1>Level up your gaming experience with the ultimate game review destination! Explore, discover, and conquer the best games out there. Join our community of passionate gamers and dive into expert reviews that will guide you to your next epic adventure. Get ready to level up your gaming journey with us!</h1>
        
      </div>
    </div>
  );
}
