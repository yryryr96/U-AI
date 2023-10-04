import React from 'react'
import { StyledCoverText } from '@/commonComponents/cover/Cover.styled';
import Image from 'next/image';
import { useRouter } from 'next/navigation'
import styled from 'styled-components';

interface CoverTextProps {
  goal: string;
  items?: string;
}

const ClickableImageContainer = styled.div`
  cursor: pointer;
`;

const CoverTextComponent = ({ goal, items }: CoverTextProps) => {

  const router = useRouter()

  const eduStart = () => {
    router.push('/fire')
  }

  return (
    <StyledCoverText>
      <h2>학습 목표</h2>
      <p>{goal}</p>
      <h2>준비물</h2>
      <p>{items}</p>
      <br />
      <br />
      <ClickableImageContainer onClick={eduStart}>
        <Image src='/resources/assets/startButton.png' width={293} height={85} alt='start'/>
      </ClickableImageContainer>
    </StyledCoverText>
  )
}

export default CoverTextComponent