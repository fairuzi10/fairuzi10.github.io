import styled from '@emotion/styled'
import Link from 'gatsby-link'
import React from 'react'
import {
  Collapse,
  Nav,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  NavItem
} from 'reactstrap'

const CustomNavbar = styled(Navbar)({
  boxShadow: '0px 10px 20px -10px rgba(0,64,128,0.2)'
})

const LinkNav = ({ to, children }) => (
  <NavItem>
    <Link className="nav-link" to={to} activeClassName="active" partiallyActive>
      {children}
    </Link>
  </NavItem>
)

export default class Example extends React.Component {
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
        <NavbarBrand href="/">
          <b>Fairuzi10</b>
        </NavbarBrand>
        <NavbarToggler onClick={this.toggle} />
        <Collapse isOpen={this.state.isOpen} navbar aria-label="Toggle navbar">
          <Nav className="ml-auto" navbar>
            <LinkNav to="/blog/">Blog</LinkNav>
            <LinkNav to="/project/">Project</LinkNav>
            <LinkNav to="/meme/">Meme</LinkNav>
          </Nav>
        </Collapse>
      </CustomNavbar>
    )
  }
}
