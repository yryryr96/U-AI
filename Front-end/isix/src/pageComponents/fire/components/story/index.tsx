"use client"

import React, { useEffect, useState } from 'react'
import Seq0 from './scene1/seq0'
import Seq1 from './scene2/seq1'
import Seq2 from './scene2/seq2'
import Seq3 from './scene2/seq3'
import Seq4 from './scene3/seq4'
import Seq5 from './scene3/seq5'
import Seq6 from './scene4/seq6'
import Seq7 from './scene4/seq7'
import Seq8Correct from './scene4/seq8_correct'
import Seq8Incorrect from './scene4/seq8_incorrect'
import Seq9 from './scene5/seq9'
import Seq10 from './scene5/seq10'
import Seq11 from './scene5/seq11'
import Seq12 from './scene5/seq12'
import Seq13 from './scene6/seq13'
import Seq14 from './scene6/seq14'
import Seq15 from './scene6/seq15'
import Seq16 from './scene6/seq16'
import Seq17 from './scene7/seq17'
import Seq18 from './scene7/seq18'
import Seq19 from './scene7/seq19'
import Seq20 from './scene8/seq20'
import Seq21 from './scene8/seq21'
import Seq22 from './scene8/seq22'
import Seq23 from './scene8/seq23'
import Seq24 from './scene8/seq24'
import Seq25 from './scene8/seq25'
import Seq26 from './scene8/seq26'
import Seq27 from './scene9/seq27'
import Repeat1 from './repeat/repeat1'
import Repeat2 from './repeat/repeat2'
import Repeat2Sol from './repeat/repeat2Sol'

import Final1 from './final/final1'
import Final2 from './final/final2'

const Story = () => {
  const [speakResult, setSpeakResult] = useState<boolean>(true);
  const [state, setState] = useState<number>(0);
  
  const handleKeyDown = (e: any) => {
    
    if (e.key === 'ArrowRight') {
      setState((prev) => prev + 1);
    } else if (e.key === 'ArrowLeft') {
      setState((prev) => prev - 1)
    }
  };

  const handleMouseClick = (e: any) => {
    e.preventDefault();
    if (e.button === 2) { setState((prev) => prev + 1)}
  }

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('mousedown', handleMouseClick);
  }, [])
  
  return (
    <>
      {state === 0 && <Seq0 />}
      {state === 1 && <Seq1 />}
      {state === 2 && <Seq2 />}
      {state === 3 && <Seq3 />}
      {state === 4 && <Seq4 />}
      {state === 5 && <Seq5 />}
      {state === 6 && <Seq6 />}
      {state === 7 && <Seq7 />}
      {(state === 8 && speakResult) && <Seq8Correct />}
      {(state === 8 && !speakResult) && <Seq8Incorrect />}
      {state === 9 && <Seq9 />}
      {state === 10 && <Seq10 />}
      {state === 11 && <Seq11 />}
      {state === 12 && <Seq12 />}
      {state === 13 && <Seq13 />}
      {state === 14 && <Seq14 />}
      {state === 15 && <Seq15 />}
      {state === 16 && <Seq16 />}
      {state === 17 && <Seq17 />}
      {state === 18 && <Seq18 />}
      {state === 19 && <Seq19 />}
      {state === 20 && <Seq20 />}
      {state === 21 && <Seq21 />}
      {state === 22 && <Seq22 />}
      {state === 23 && <Seq23 />}
      {state === 24 && <Seq24 />}
      {state === 25 && <Seq25 />}
      {state === 26 && <Seq26 />}
      {state === 27 && <Seq27 />}
      {state === 28 && <Repeat1 />}
      {state === 29 && <Repeat2 />}
      {state === 30 && <Repeat2Sol />}
      {/* 추후 인덱스 확인하기! 지금 31이 마무리1 */}
      {state === 31 && <Final1 />}
      {state === 32 && <Final2 />}

    </>
  )
}

export default Story