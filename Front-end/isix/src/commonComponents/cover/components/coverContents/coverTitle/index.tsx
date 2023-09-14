import React from 'react'
import { StyledCoverTitle } from '@/commonComponents/cover/Cover.styled'

const CoverTitleComponent = ({ title }: { title: string }) => {
  return (
    <StyledCoverTitle>
      <h1>{title}</h1>
    </StyledCoverTitle>
  )
}

export default CoverTitleComponent