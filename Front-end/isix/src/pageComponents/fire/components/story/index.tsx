"use client"

import React, { useEffect, useState } from 'react'
import { StyledStoryContainer } from '@/pageComponents/fire/components/story/Story.styled'
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

const Story = () => {
  const [nowState, setNowState] = useState<string>('seq0');
  const [speakResult, setSpeakResult] = useState<boolean>(false);

  useEffect(() => {
    if (nowState === 'seq0') {
      // 추후 텍스트 읽어주기 끝나면 바꾸기
      setTimeout(() => {
        setNowState('seq1')
      }, 3000)
    } else if (nowState === 'seq1') {
      // 추후 텍스트 읽어주기 끝나면 바꾸기
      setTimeout(() => {
        setNowState('seq2')
      }, 3000)
    } else if (nowState === 'seq2') {
      // 백에서 확인되면 바꾸기
      setTimeout(() => {
        setNowState('seq3')
      }, 5200)
    } else if (nowState === 'seq3') {
      setTimeout(() => {
        setNowState('seq4')
      }, 3000)
    } else if (nowState === 'seq4') {
      setTimeout(() => {
        setNowState('seq5')
      }, 3000)
    } else if (nowState === 'seq5') {
      setTimeout(() => {
        setNowState('seq6')
      }, 3000)
    } else if (nowState === 'seq6') {
      setTimeout(() => {
        setNowState('seq7')
      }, 3000)
    } else if (nowState === 'seq7') {
      // '불이야' 정확도 확인해서 처리하기
      setTimeout(() => {
        setSpeakResult(true)
        if(speakResult) {
          setTimeout(() => {
            setNowState('seq8_correct')
          }, 1000)
        } else {
          setTimeout(() => {
            setNowState('seq8_incorrect')
          }, 1000)
        }
      }, 2000)
    } else if (nowState === 'seq8_correct') {
      setTimeout(() => {
        setNowState('seq9')
      }, 3000)
    } else if (nowState === 'seq9') {
      setTimeout(() => {
        setNowState('seq10')
      }, 3000)
    } else if (nowState === 'seq10') {
      setTimeout(() => {
        setNowState('seq11')
      }, 3000)
    } else if (nowState === 'seq11') {
      setTimeout(() => {
        setNowState('seq12')
      }, 5200)
    } else if (nowState === 'seq12') {
      setTimeout(() => {
        setNowState('seq13')
      }, 3000)
    } else if (nowState === 'seq13') {
      setTimeout(() => {
        setNowState('seq14')
      }, 3000)
    } else if (nowState === 'seq14') {
      setTimeout(() => {
        setNowState('seq15')
      }, 3000)
    } else if (nowState === 'seq15') {
      setTimeout(() => {
        setNowState('seq16')
      }, 3000)
    } else if (nowState === 'seq16') {
      setTimeout(() => {
        setNowState('seq17')
      }, 3000)
    } else if (nowState === 'seq17') {
      setTimeout(() => {
        setNowState('seq18')
      }, 3000)
    } else if (nowState === 'seq18') {
      setTimeout(() => {
        setNowState('seq19')
      }, 3000)
    } else if (nowState === 'seq19') {
      setTimeout(() => {
        setNowState('seq20')
      }, 3000)
    } else if (nowState === 'seq20') {
      setTimeout(() => {
        setNowState('seq21')
      }, 3000)
    } else if (nowState === 'seq21') {
      setTimeout(() => {
        setNowState('seq22')
      }, 5200)
    } else if (nowState === 'seq20') {
      setTimeout(() => {
        setNowState('seq21')
      }, 3000)
    } else if (nowState === 'seq21') {
      setTimeout(() => {
        setNowState('seq22')
      }, 3000)
    } else if (nowState === 'seq22') {
      setTimeout(() => {
        setNowState('seq23')
      }, 3000)
    } else if (nowState === 'seq23') {
      setTimeout(() => {
        setNowState('seq24')
      }, 3000)
    } else if (nowState === 'seq24') {
      setTimeout(() => {
        setNowState('seq25')
      }, 5200)
    } else if (nowState === 'seq25') {
      setTimeout(() => {
        setNowState('seq26')
      }, 3000)
    } else if (nowState === 'seq26') {
      setTimeout(() => {
        setNowState('seq27')
      }, 3000)
    }
  }, [nowState, speakResult])

  
  return (
    <StyledStoryContainer>
      {nowState === 'seq0' && <Seq0 />}
      {nowState === 'seq1' && <Seq1 />}
      {nowState === 'seq2' && <Seq2 />}
      {nowState === 'seq3' && <Seq3 />}
      {nowState === 'seq4' && <Seq4 />}
      {nowState === 'seq5' && <Seq5 />}
      {nowState === 'seq6' && <Seq6 />}
      {nowState === 'seq7' && <Seq7 />}
      {nowState === 'seq8_correct' && <Seq8Correct />}
      {nowState === 'seq8_incorrect' && <Seq8Incorrect />}
      {nowState === 'seq9' && <Seq9 />}
      {nowState === 'seq10' && <Seq10 />}
      {nowState === 'seq11' && <Seq11 />}
      {nowState === 'seq12' && <Seq12 />}
      {nowState === 'seq13' && <Seq13 />}
      {nowState === 'seq14' && <Seq14 />}
      {nowState === 'seq15' && <Seq15 />}
      {nowState === 'seq16' && <Seq16 />}
      {nowState === 'seq17' && <Seq17 />}
      {nowState === 'seq18' && <Seq18 />}
      {nowState === 'seq19' && <Seq19 />}
      {nowState === 'seq20' && <Seq20 />}
      {nowState === 'seq21' && <Seq21 />}
      {nowState === 'seq22' && <Seq22 />}
      {nowState === 'seq23' && <Seq23 />}
      {nowState === 'seq24' && <Seq24 />}
      {nowState === 'seq25' && <Seq25 />}
      {nowState === 'seq26' && <Seq26 />}
      {nowState === 'seq27' && <Seq27 />}
    </StyledStoryContainer>
  )
}

export default Story