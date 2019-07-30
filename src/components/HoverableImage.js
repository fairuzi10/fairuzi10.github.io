import React from 'react'
import Img from 'gatsby-image'
import styled from '@emotion/styled'

const StyledImage = styled(Img)({
  transition: 'transform .15s',
  '&:hover': {
    transform: 'scale(1.1)'
  }
})

export const HoverableImage = props => {
  return (
    <div className="m-3">
      <StyledImage {...props} />
    </div>
  )
}
