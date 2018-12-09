import './styles.css';

import React, { Component } from 'react';
import {
  Badge,
  Collapse,
  Container,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Avatar from './avatar.png';

export default class Example extends Component {
  state = { isOpen: false }
  toggle = () =>
    this.setState(prevState => ({ isOpen: !prevState.isOpen }))
  render() {
    return (
      <div>
        <Navbar light expand="lg" className="appbar">
          <Container>
            <NavbarBrand href="#"><FontAwesomeIcon icon="square" /></NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="mr-auto mainmenu" navbar>
                <NavItem>
                  <NavLink href="#">Dashboard</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="#">Network</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="#">Network</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="#">Network</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="#">Network</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="#">Network</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="#">Billing</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="#">Network</NavLink>
                </NavItem>
              </Nav>
              <Nav className="ml-auto userarea" navbar>
                <NavItem>
                  <NavLink href="/"><FontAwesomeIcon icon="search" size="lg" /></NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/"><FontAwesomeIcon icon={['far', 'question-circle']} size="lg" /></NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/"><FontAwesomeIcon icon="bell" size="lg" /><Badge color="danger">4</Badge></NavLink>
                </NavItem>
                <UncontrolledDropdown nav inNavbar>
                  <DropdownToggle nav>
                    <img src={Avatar} alt="Avatar" className="avatar" />
                    <FontAwesomeIcon icon="chevron-down" />
                  </DropdownToggle>
                  <DropdownMenu right>
                    <DropdownItem>
                      My account
                    </DropdownItem>
                    <DropdownItem>
                      Profile
                    </DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem>
                      Logout
                    </DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
              </Nav>
            </Collapse>
          </Container>
        </Navbar>
      </div>
    );
  }
}