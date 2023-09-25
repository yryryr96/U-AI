"use client"

import React from 'react'
import { StyledStoryImage } from '@/pageComponents/fire/components/story/Story.styled';

interface ImageComponentProps {
  src: string;
  width?: number; 
  height?: number; 
}

const ImageComponent = ({ src, width, height }: ImageComponentProps) => {
  return (
    <StyledStoryImage src={src} width={width} height={height} />
  );
};

export default ImageComponent;