import styled from '@emotion/styled'
import { COLOR } from '../styles/theme'

export const Button = styled.button(
  {
    backgroundImage: COLOR.gradGreenBlue,
    padding: '0.5rem 1rem',
    border: 0,
    borderRadius: '2rem',
    cursor: 'pointer',
    color: COLOR.dark,
    transition: 'all 0.15s ease-in-out',

    '&:hover, &:focus': {
      outline: 0
    },
    '&:hover': {
      backgroundImage: COLOR.gradGreenBlue,
      opacity: 0.9
    }
  },
  ({ block }) =>
    block && {
      display: 'block',
      width: '100%'
    },
  ({ size }) => {
    switch (size) {
      case 'lg':
        return {
          padding: '0.75rem 1rem',
          fontWeight: 'bold'
        }
      default:
        return {}
    }
  }
)

export default Button
