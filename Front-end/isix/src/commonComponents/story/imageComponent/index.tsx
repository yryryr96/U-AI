"use client"

import React from 'react'
import { StyledStoryImage } from '@/pageComponents/fire/components/story/Story.styled';

const ImageComponent = ({src} : {src: string}) => {
  return (
    <StyledStoryImage src={src}/>
  )
}

export default ImageComponent;