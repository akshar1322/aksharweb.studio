import React from 'react';
import Image from 'next/image';

const PlaySoundButton = () => {
  // Function to play sound
  const playSound = async () => {
    const audio = new Audio('/Audio/Akshar.mp3');
    await audio.play();
  };

  return (
    <button id="soundBtn" className="bg-transparent p-0 top-1 right-10 w-6 h-6" onClick={playSound}>
      <Image src="/images/comment-regular.png" alt="sound" width={24} height={24} />
    </button>
  );
};

export default PlaySoundButton;
