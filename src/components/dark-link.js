import React from 'react'
import styled from '@emotion/styled'
import { COLOR } from '../utils/theme'
import { Link } from 'gatsby'

const DarkGatsbyLink = styled(Link)({
  color: COLOR.dark,
  ':hover': {
    color: COLOR.dark,
    textDecoration: 'underline'
  }
})

const DarkA = styled.a({
  color: COLOR.dark,
  ':hover': {
    color: COLOR.dark,
    textDecoration: 'underline'
  }
})

export const DarkLink = ({ to, ...otherProps }) => {
  switch (to[0]) {
    case '/':
      return <DarkGatsbyLink to={to} {...otherProps} />
    default:
      return <DarkA href={to} {...otherProps} />
  }
}

export default DarkLink
