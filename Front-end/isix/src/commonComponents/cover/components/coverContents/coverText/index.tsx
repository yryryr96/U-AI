import React from 'react'
import { StyledCoverText } from '@/commonComponents/cover/Cover.styled';
import Image from 'next/image';

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
      <br />
      <br />
      <Image src='/resources/startButton.png' width={293} height={85} alt='start'/>
    </StyledCoverText>
  )
}

export default CoverTextComponent