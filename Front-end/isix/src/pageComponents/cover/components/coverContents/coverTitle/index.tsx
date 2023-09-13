import React from 'react'
import { StyledCoverTitle } from '@/pageComponents/cover/Cover.styled'

const CoverTitleComponent = ({ title }: { title: string }) => {
  return (
    <StyledCoverTitle>
      <h1>{title}</h1>
    </StyledCoverTitle>
  )
}

export default CoverTitleComponent