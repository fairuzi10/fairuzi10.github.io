import styled from '@emotion/styled'
import { COLOR } from '../utils/theme';
import { Link } from 'gatsby';

export const Card = styled.div({
  backgroundColor: COLOR.white,
  padding: '2rem',
  margin: '1rem',
})

export const BlackLink = styled(Link)({
  color: COLOR.black,
  ':hover': {
    color: COLOR.black,
    textDecoration: 'underline',
  },
})

export const SectionDivider = styled.hr({
  margin: '1rem 0',
})
