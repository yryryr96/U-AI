import React from 'react'
import CamComponent from '../camComponent'
import ImageComponent from '../imageComponent'
import RecordComponent from '../recordComponent'
import { StyledStoryShow, StyledStoryDual } from '@/pageComponents/fire/components/story/Story.styled'

// 듀얼일 때 추후 image, cam 크기 조정해야 함
const DualComponent = ({imageSrc} : {imageSrc: string}) => {
  return (
    <StyledStoryShow>
      <StyledStoryDual>
        <ImageComponent src={imageSrc}/>
      </StyledStoryDual>
      <StyledStoryDual>
        <CamComponent/>
        {/* <RecordComponent/> */}
      </StyledStoryDual>
    </StyledStoryShow>
  )
}

export default DualComponent