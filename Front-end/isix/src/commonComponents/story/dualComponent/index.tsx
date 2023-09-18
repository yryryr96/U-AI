import React from 'react'
import CamComponent from '../camComponent'
import ImageComponent from '../imageComponent'
import RecordComponent from '../recordComponent'
import { StyledStoryShow, StyledStoryDual } from '@/pageComponents/fire/components/story/Story.styled'

const DualComponent = () => {
  return (
    <StyledStoryShow>
      <StyledStoryDual>
        <ImageComponent src='./resources/panda.png'/>
      </StyledStoryDual>
      <StyledStoryDual>
        {/* <CamComponent/> */}
        <RecordComponent/>
      </StyledStoryDual>
    </StyledStoryShow>
  )
}

export default DualComponent