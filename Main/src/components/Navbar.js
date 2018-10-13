import React, { Component } from 'react';
import { Nav, Navbar, NavItem, Button} from 'react-bootstrap';

class MainNav extends Component {
  render() {
    return (
      <div className="NavClass">
      <Navbar collapseOnSelect>
        <Navbar.Header>
          <h1>We-Read</h1>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav pullRight>
            <NavItem eventKey={1} href="#">
              <Button bsStyle="primary">Autism</Button>
            </NavItem>
            <NavItem eventKey={2} href="#">
              <Button bsStyle="primary">ADHD</Button>
            </NavItem>
            <NavItem eventKey={3} href="#">
              <Button bsStyle="primary">Hearing</Button>
            </NavItem>
          </Nav>
        </Navbar.Collapse>
        </Navbar>;
      </div>
    );
  }
}

export default MainNav;
