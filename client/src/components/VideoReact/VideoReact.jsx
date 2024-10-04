import React, { useRef, useState } from 'react';
import ReactPlayer from 'react-player';
import './VideoReact.css'

function VideoPlayer () {
  const playerRef = useRef(null);
  const [playing, setPlaying] = useState(false);
  const [volume, setVolume] = useState(0.8);
  const [muted, setMuted] = useState(false);

  const togglePlayPause = () => {
    setPlaying(!playing);
  };

  const handleVolumeChange = (e) => {
    setVolume(parseFloat(e.target.value));
  };

  const toggleMute = () => {
    setMuted(!muted);
  };

  return (
    <div>
      <ReactPlayer
        ref={playerRef}
        url="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
        playing={playing}
        volume={volume}
        muted={muted}
        width="100%"
        height="400px"
        controls={false}
      />

      {/* Custom Controls */}
      <div className="controls">
        <span onClick={togglePlayPause} className="material-icons">
          {playing ? 'pause' : 'play_arrow'}
        </span>
        <span onClick={toggleMute} className="material-icons">
          {muted ? 'volume_off' : 'volume_up'}
        </span>
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