import React from 'react'
import { StyledCoverContents } from '../../Cover.styled';
import CoverTitleComponent from './coverTitle';
import CoverTextComponent from './coverText';
import CoverButtonComponent from './coverButton';

const CoverContenstComponent = () => {
  return (
    <StyledCoverContents>
      <CoverTitleComponent title="소방관 팬더맨"/>
      <CoverTextComponent 
        goal='화재 발생 시 대처 방법을 안다.'
        items='카메라, 마이크, 화이트보드'/>
      <CoverButtonComponent text='시작하기'/>
    </StyledCoverContents>
  )
}

export default CoverContenstComponent;