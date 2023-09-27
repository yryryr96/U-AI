"use client"

import React, { useEffect } from 'react'
import { StyledCoverBox, StyledCoverContainer } from './Cover.styled'
import CoverImageComponent from './components/coverImage'
import CoverContenstComponent from './components/coverContents'
import useImageUrlState from '@/stores/capture/useImageUrlState'

interface CoverProps {
  setState: (arg0: any) => void;
}

const Cover: React.FC<CoverProps> = ({ setState }) => {
  const { resetImageUrls } = useImageUrlState();

  useEffect(() => {
    // imageUrls 초기화
    resetImageUrls();
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