import styled from '@emotion/styled'
import { COLOR } from '../utils/theme'
import { Link } from 'gatsby'

export const BlackLink = styled(Link)({
  color: COLOR.dark,
  ':hover': {
    color: COLOR.dark,
    textDecoration: 'underline'
  }
})

export default BlackLink
