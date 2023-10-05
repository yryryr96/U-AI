"use client"

import Image from 'next/image';
import { useRef, useState, useEffect } from 'react';

const AudioPlayer = ({ file, auto = false } : any ) => {
  const audio = useRef(new Audio(file));
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setPlaying(true);
    }, 100);

    return () => {
      audio.current.pause();
      clearTimeout(timer)
    };
  }, []);

  useEffect(() => {
    const handleEnded = () => {
      if (auto) {
        audio.current.currentTime = 0;
        audio.current.play()
      }
    };

    if (auto) {
      audio.current.addEventListener('ended', handleEnded);
    }

    return () => {
      if (auto) {
        audio.current.removeEventListener('ended', handleEnded);
      }
    };
  }, []);

  useEffect(() => {
    playing ? audio.current.play() : audio.current.pause();
  }, [playing]);

  const handleClick = () => {
  if (audio.current.paused && audio.current.currentTime > 0 && !audio.current.ended) {
    setPlaying(true);
  } else if (!audio.current.paused) {
    setPlaying(false);
  } else if (audio.current.paused && (audio.current.currentTime === 0 || audio.current.ended)) {
    audio.current.play().catch(error => console.log(error));
    setPlaying(true);
  }
};
  
  return (
    <button
      onClick={handleClick}
      style={
        {
          position: 'fixed',
          right: '1%',
          top: '3%',
          width: '90px',
          height: '90px',
          background: 'none',
          border: 'none',
          zIndex: '5'
        }
      }
    >
      {playing ? 
        <div style={{width:'100%', height:'100%'}}>
          <Image src={'/resources/storyButton/soundbutton.png'} layout='fill' objectFit='cover' alt="" /> 
        </div>
        :
        <div style={{width:'100%', height:'100%'}}>
          <Image src={'/resources/storyButton/reloadbutton.png'} layout='fill' objectFit='cover' alt="" /> 
        </div>}
    </button>
  )
}

export default AudioPlayer;