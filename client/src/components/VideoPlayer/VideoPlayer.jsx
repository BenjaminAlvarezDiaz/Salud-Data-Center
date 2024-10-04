import React, { useRef, useState } from 'react';
import './VideoPlayer.css'

function VideoPlayer() {
  const videoRef = useRef(null);
  const [playing, setPlaying] = useState(false);
  const [volume, setVolume] = useState(0.8);
  const [progress, setProgress] = useState(0);

  const togglePlayPause = () => {
    if (playing) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setPlaying(!playing);
  };

  const handleVolumeChange = (e) => {
    setVolume(e.target.value);
    videoRef.current.volume = e.target.value;
  };

  const handleProgress = () => {
    const progress = (videoRef.current.currentTime / videoRef.current.duration) * 100;
    setProgress(progress);
  };

  const handleSeek = (e) => {
    const seekTime = (e.target.value / 100) * videoRef.current.duration;
    videoRef.current.currentTime = seekTime;
  };

  return (
    <div className="video-container">
      <video
        ref={videoRef}
        className="video"
        onTimeUpdate={handleProgress}
        onClick={togglePlayPause}
      >
        <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
      </video>
      <div className="controls">
        <span onClick={togglePlayPause} className="material-icons">
          {playing ? 'pause' : 'play_arrow'}
        </span>
        <input
          type="range"
          min="0"
          max="100"
          value={progress}
          onChange={handleSeek}
        />
        <input
          type="range"
          min="0"
          max="1"
          step="0.01"
          value={volume}
          onChange={handleVolumeChange}
        />
      </div>
    </div>
  );
};

export default VideoPlayer;