import React from 'react'
import { StyledCoverText } from '@/commonComponents/cover/Cover.styled';

interface CoverTextProps {
  goal: string;
  items?: string;
}

const CoverTextComponent = ({ goal, items }: CoverTextProps) => {
  return (
    <StyledCoverText>
      <h2>학습 목표</h2>
      <p>{goal}</p>
      <h2>준비물</h2>
      <p>{items}</p>
    </StyledCoverText>
  )
}

export default CoverTextComponent