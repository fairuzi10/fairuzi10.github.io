import React from 'react'
import styled from 'styled-components'
import Link from 'gatsby-link'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem } from 'reactstrap'

const NavbarWrapper = styled.div`
  margin-bottom: 3em;
`

const LinkNav = ({to, children}) => (
  <NavItem>
    <Link className='nav-link' to={ to }>{ children }</Link>
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
      <NavbarWrapper>
        <Navbar color='light' light expand="md">
          <NavbarBrand href="/">Fairuzi10</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <LinkNav to='/blog'>Blog</LinkNav>
              <LinkNav to='/project'>Project</LinkNav>
            </Nav>
          </Collapse>
        </Navbar>
      </NavbarWrapper>
    )
  }
}
