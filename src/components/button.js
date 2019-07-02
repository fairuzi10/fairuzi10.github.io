import styled from '@emotion/styled'
import { COLOR } from '@/utils/theme'

export const Button = styled.button({
  backgroundImage: 'linear-gradient(120deg, rgb(88,242,174), rgb(0,130,240))',
  padding: '1rem 5rem',
  border: 0,
  borderRadius: '2rem',
  cursor: 'pointer',
  color: COLOR.white,
  transition: 'all 0.15s ease-in-out',

  '&:hover, &:focus': {
    outline: 0
  },
  '&:hover': {
    backgroundImage:
      'linear-gradient(120deg, rgb(67, 186, 134), rgb(0, 95, 176))'
  }
})

export default Button
