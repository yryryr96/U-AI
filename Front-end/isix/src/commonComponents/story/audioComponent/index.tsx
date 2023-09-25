"use client"

import Image from 'next/image';
import { useState, useEffect } from 'react';

const AudioPlayer = ({ file } : any ) => {
  const [audio, setAudio] = useState(new Audio(file));
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setPlaying(true);
    }, 100);

    return () => {
      audio.pause();
      clearTimeout(timer)
    };
  }, []);

  useEffect(() => {
    audio.addEventListener('ended', () => setPlaying(false));

    return () => {
      audio.removeEventListener('ended', () => setPlaying(false));
    };
  }, []);

  useEffect(() => {
    playing ? audio.play() : audio.pause();
  }, [playing]);

  const handleClick = () => {
    if (audio.paused && audio.currentTime > 0 && !audio.ended) {
      setPlaying(true);
    } else if (!audio.paused) {
      setPlaying(false);
    } else if (audio.paused && (audio.currentTime === 0 || audio.ended)) {
      audio.currentTime = 0;
      setPlaying(true);
    }
  };
  
  return (
    <button
      onClick={handleClick}
      style={
        {
          position: 'fixed',
          right: '100px',
          top: '10px',
          width: '100px',
          height: '100px',
          background: 'none',
          border: 'none',
          zIndex: '5'
        }
      }
    >
      {playing ? 
        <div style={{width:'100%', height:'100%'}}>
          <Image src={'/resources/soundbutton.png'} layout='fill' objectFit='cover' alt="" /> 
        </div>
        :
        <div>
          Play/Replay
        </div>}
    </button>
  )
}

export default AudioPlayer;
