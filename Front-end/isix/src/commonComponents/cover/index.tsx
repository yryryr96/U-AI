"use client"

import React, { useEffect } from 'react'
import { StyledCoverBox, StyledCoverContainer } from './Cover.styled'
import CoverImageComponent from './components/coverImage'
import CoverContenstComponent from './components/coverContents'
import Image from 'next/image'

interface CoverProps {
  setState: (arg0: any) => void;
}

const Cover: React.FC<CoverProps> = ({ setState }) => {
  useEffect(() => {
    // 'screenshots' 키를 빈 배열로 초기화
    localStorage.setItem('screenshots', JSON.stringify([]));
  }, []);

  return (
    <StyledCoverContainer>
      <StyledCoverBox>
        <CoverImageComponent/>
      </StyledCoverBox>
      <StyledCoverBox>
          <CoverContenstComponent/>
      </StyledCoverBox>
    </StyledCoverContainer>
  )
}

export default Cover