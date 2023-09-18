"use client"

import React, { useEffect, useState } from 'react'
import { StyledStoryContainer } from '@/pageComponents/fire/components/story/Story.styled'
import Seq1 from './seq1'
import Seq2 from './seq2'
import Seq3 from './seq3'

const Story = () => {
  const [nowState, setNowState] = useState<string>('start');

  useEffect(() => {
    if (nowState === 'start') {
      setTimeout(() => {
        setNowState('quiz')
      }, 3000)
    } else if (nowState === 'quiz') {
      setTimeout(() => {
        setNowState('')
      }, 8000)
    }
  }, [nowState])

  
  return (
    <StyledStoryContainer>
      <div>
        {nowState === 'start' && <Seq1 />}
        {nowState === 'quiz' && <Seq2 />}
        {nowState === '' && <Seq3 />}
      </div>
    </StyledStoryContainer>
  )
}

export default Story