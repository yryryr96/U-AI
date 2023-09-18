import React from 'react'
import { StyledStoryText } from '../Story.styled'

const TextComponent = ({text}: {text: string}) => {
  return (
    <StyledStoryText>
      {text}
    </StyledStoryText>
  )
}

export default TextComponent