import React from 'react';

function PlayAudioButton () {
  const playAudio = () => {
    const audio = new Audio("src/assets/sonido-de-terror.mp3");
    audio.play();
  };

  return (
    <button className="play-button" onClick={playAudio}>
      Play Audio
    </button>
  );
};

export default PlayAudioButton;