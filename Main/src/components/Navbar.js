import React, { Component } from 'react';
import { Nav, Navbar, NavItem, Button} from 'react-bootstrap';

class MainNav extends Component {
  render() {
    return (
      <div className="NavClass">
      <Navbar collapseOnSelect>
        <Navbar.Header>
          <h1>WeRead</h1>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav pullRight>
            <NavItem eventKey={1} href="#">
              <Button bsStyle="primary">Themes!</Button>
            </NavItem>
          </Nav>
        </Navbar.Collapse>
        </Navbar>;
      </div>
    );
  }
}

export default MainNav;
