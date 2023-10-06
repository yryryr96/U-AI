"use client"

import React from 'react'
import { StyledStoryImage } from '@/pageComponents/fire/components/story/Story.styled';

interface ImageComponentProps {
  src: string;
  width?: number; 
  height?: number; 
  style?: React.CSSProperties;
}

const ImageComponent = ({ src, width, height, style }: ImageComponentProps) => {
  return (
    <StyledStoryImage src={src} width={width} height={height} style={style} />
  );
};

export default ImageComponent;