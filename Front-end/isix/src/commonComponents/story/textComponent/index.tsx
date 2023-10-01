import React from 'react'
import { StyledStoryText } from '@/pageComponents/fire/components/story/Story.styled'

const TextComponent = ({ text, style }: { text: string; style?: React.CSSProperties }) => {
  return (
    <StyledStoryText style={style}>
      {text}
    </StyledStoryText>
  )
}

export default TextComponent