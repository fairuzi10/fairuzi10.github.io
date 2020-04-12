import styled from '@emotion/styled'
import Link from 'gatsby-link'
import React from 'react'
import {
  Collapse,
  Nav,
  Navbar as BNavbar,
  NavbarToggler,
  NavItem
} from 'reactstrap'

import { LinkButton } from './button'

const CustomNavbar = styled(BNavbar)({
  boxShadow: '0px 10px 20px -10px rgba(0,64,128,0.2)'
})

const Brand = styled(LinkButton)`
  font-size: 1.2rem;
  font-weight: bold;
`

const LinkNav = ({ to, children }) => (
  <NavItem>
    <Link className="nav-link" to={to} activeClassName="active" partiallyActive>
      {children}
    </Link>
  </NavItem>
)

export default class Navbar extends React.Component {
  constructor(props) {
    super(props)

    this.toggle = this.toggle.bind(this)
    this.state = {
      isOpen: false
    }
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    })
  }
  render() {
    return (
      <CustomNavbar
        color="white"
        light
        expand="md"
        className="py-3"
        fixed="top"
      >
        <Brand to="/">Fairuzi10</Brand>
        <NavbarToggler onClick={this.toggle} aria-label="Toggle navbar" />
        <Collapse isOpen={this.state.isOpen} navbar aria-label="Toggle navbar">
          <Nav className="ml-auto" navbar>
            <LinkNav to="/blog/">Blog</LinkNav>
            <LinkNav to="/meme/">Meme</LinkNav>
          </Nav>
        </Collapse>
      </CustomNavbar>
    )
  }
}
