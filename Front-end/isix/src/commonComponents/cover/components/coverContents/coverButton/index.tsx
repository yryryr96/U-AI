import React from 'react'
import { StyledCoverButton } from '@/commonComponents/cover/Cover.styled'

const CoverButtonComponent = ({ text }: { text: string }) => {
  return (
    <StyledCoverButton>
      <button>{text}</button>
    </StyledCoverButton>
  )
}

export default CoverButtonComponent