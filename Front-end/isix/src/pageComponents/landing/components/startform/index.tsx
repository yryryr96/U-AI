"use client"

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { TagContainer, StyledStartFormButton, StyledStartFormInput, StyledStartFormContainer, StyledServiceName, StyledStartFormName, StyledStartForm } from '../../Landing.styled';

export default function StartForm() {
  const [kindergarten, setKindergarten] = useState('');
  const [className, setClassName] = useState('');
  const [people, setPeople] = useState(3);

  const saveKinder = (e: React.ChangeEvent<HTMLInputElement>) => {
    setKindergarten(e.target.value);
  }

  const saveClass = (e: React.ChangeEvent<HTMLInputElement>) => {
    setClassName(e.target.value);
  }
  
  const savePeople = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPeople(Number(e.target.value));
  }

  const checkLink = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (kindergarten === '' || className === '') {
      e.preventDefault();
      // console.log('항목을 입력해주세요')
      alert('항목을 모두 입력해주세요')
    }
  }

  useEffect(() => {

  }, [])
  // const kindergarten = $('kindergarten').val();
  return (
    <TagContainer>
      <StyledStartFormContainer>
        <div>
        <StyledServiceName>아이와 함께, U-AI</StyledServiceName>

        <StyledStartForm>
          <StyledStartFormName>유치원</StyledStartFormName>
          <StyledStartFormInput onChange={saveKinder}/>
        </StyledStartForm>
        <StyledStartForm>
          <StyledStartFormName>반</StyledStartFormName>
          <StyledStartFormInput onChange={saveClass}/>
        </StyledStartForm>
        <StyledStartForm>
          <StyledStartFormName>인원 수</StyledStartFormName>
          <StyledStartFormInput value={people} type='number' max={6} min={1} step={1} onKeyDown={(e) => e.preventDefault()} onPaste={(e) => e.preventDefault()} onChange={savePeople}/>
        </StyledStartForm>

        <StyledStartFormButton>
          <Link href='/main' prefetch={true} passHref onClick={checkLink}> 
            시작하기
          </Link> 
        </StyledStartFormButton>
        </div>
      </StyledStartFormContainer>
    </TagContainer>
  );
}
