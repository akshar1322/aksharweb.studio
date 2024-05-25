import React from 'react';




const PlaySoundButton = () => {
  // Function to play sound
  const playSound = () => {
    const audio = new Audio('/Audio/Akshar.mp3');
    audio.play();
  };

  return (
    <button id="soundBtn" className="bg-transparent p-0 top-1 right-10 w-6 h-6 " onClick={playSound}>
      <img src="/images/comment-regular.png" alt="sound" />

    </button>
  );
};

export default PlaySoundButton;
