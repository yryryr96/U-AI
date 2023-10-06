"use client"

import useUserInfoStore from '@/stores/mypage/useUserInfoStore';
import Link from 'next/link';
import { TagContainer, StyledStartFormButton, StyledStartFormInput, StyledStartFormContainer, StyledServiceName, StyledStartFormName, StyledStartForm } from '../../Landing.styled';
import { useState } from 'react';

export default function StartForm() {
  const {
    kindergarten, setKindergarten,
    people, setPeople
  } = useUserInfoStore();

  const [check, setCheck] = useState(false);

  const saveKinder = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setKindergarten(value);

    if (value !== '') {
      setCheck(true);
    } 
  }

  const savePeople = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value);
    if (!isNaN(value)) {
      if (value >= 1 && value <= 6) {
        setPeople(value);
      } else {
        alert("유효한 값을 입력해주세요.\n교육은 최소 1명에서 최대 6명까지 수강가능합니다.")
      }
    }
  }

  const checkLink = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (check === false) {
      e.preventDefault();
      alert('항목을 모두 입력해주세요')
    }
  }

  return (
    <TagContainer>
      <StyledStartFormContainer>
        <StyledServiceName>아이와 함께, U-AI</StyledServiceName>

        <StyledStartForm>
          <StyledStartFormName>단체명</StyledStartFormName>
          <StyledStartFormInput onChange={saveKinder}/>
        </StyledStartForm>
        <StyledStartForm>
          <StyledStartFormName>인원 수</StyledStartFormName>
          <StyledStartFormInput value={people} type='number' max={6} min={1} step={1} onPaste={(e) => e.preventDefault()} onChange={savePeople}/>
        </StyledStartForm>

        <Link href='/main' prefetch={true} passHref onClick={checkLink}> 
          <StyledStartFormButton>
            시작하기
          </StyledStartFormButton>
        </Link>     
      </StyledStartFormContainer>
    </TagContainer>
  );
}
