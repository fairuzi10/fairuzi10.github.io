import React from 'react'
import styled from 'styled-components'
import Link from 'gatsby-link'

const Footer = styled.footer`
  margin-top: 3em;
  border-top: 1px solid #e5e5e5;
  padding: 1.5em 0em;
  text-align: center;
  color: #777;
  background-color: #f8f9fa;
  font-size: 0.8em;
`

export default () => (
  <Footer>
    Muhammad Fairuzi Teguh © 2018<br />
    <Link to='/privacy-policy/' className='grey-link'>Kebijakan Privasi</Link>
  </Footer>
)