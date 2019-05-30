import React from 'react'
import styled from '@emotion/styled'
import { COLOR } from '../utils/theme';

const Footer = styled.footer({
  marginTop: '1rem',
  borderTop: '1px solid #e5e5e5',
  padding: '2rem 0',
  textAlign: 'center',
  color: COLOR.white,
  backgroundColor: COLOR.primary,
  fontSize: '0.8rem',
})

export default () => (
  <Footer>
    Muhammad Fairuzi Teguh © 2019
  </Footer>
)
