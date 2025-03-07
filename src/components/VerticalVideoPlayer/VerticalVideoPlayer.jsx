import "./vertical-video-player.scss";
import { useRef, useState } from "react";

const VerticalVideoPlayer = ({ src }) => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };
  return (
    <div className="video-container">
      <video ref={videoRef} autoPlay loop muted playsInline className="video">
        <source src={src} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <button className="play-btn" onClick={togglePlay}>
        {isPlaying ? "Pause" : "Play"}
      </button>
    </div>
  );
};
export default VerticalVideoPlayer;
