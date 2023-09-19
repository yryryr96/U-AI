import React from 'react';
import CamComponent from '../camComponent';
import Image from 'next/image';
import { StyledStoryDual } from '@/pageComponents/fire/components/story/Story.styled';

interface DualComponentProps {
  imageSrc: string;
}

const DualComponent: React.FC<DualComponentProps> = ({ imageSrc }) => {
  return (
    <StyledStoryDual>
      <div style={{ flex: 4, position: 'relative' }}>
        <Image src={imageSrc} layout='fill' objectFit='fill' alt="" />
      </div>
      <div style={{ flex: 6 }}>
        <CamComponent width="100%" height="100%" />
      </div>
    </StyledStoryDual>
  );
};

export default DualComponent;
