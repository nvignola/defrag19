import React, { Component } from "react";
import { NavItem, Nav, NavDropdown, MenuItem } from "react-bootstrap";

class HeaderLinks extends Component {
  render() {
    const notification = (
      <div>
        <i className="fa fa-globe" />
        <b className="caret" />
        <span className="notification">5</span>
        <p className="hidden-lg hidden-md">Notification</p>
      </div>
    );
    return (
      <div>
        <Nav>
          
        </Nav>
        <Nav pullRight>
          <NavItem eventKey={3} href="#">
            <i className="fa fa-search" />
            <p className="hidden-lg hidden-md">Search</p>
          </NavItem>
          <NavDropdown
            eventKey={2}
            title={notification}
            noCaret
            id="basic-nav-dropdown"
          >
            <MenuItem eventKey={2.1}>Notification 1</MenuItem>
            <MenuItem eventKey={2.2}>Notification 2</MenuItem>
            <MenuItem eventKey={2.3}>Notification 3</MenuItem>
            <MenuItem eventKey={2.4}>Notification 4</MenuItem>
          </NavDropdown>
          <NavDropdown
            eventKey={2}
            title="Account"
            id="basic-nav-dropdown-right"
          >
            <MenuItem eventKey={2.1}>Preferences</MenuItem>
            <MenuItem eventKey={2.2}>Change Password</MenuItem>
            <MenuItem divider />
            <MenuItem eventKey={2.5}>Logout</MenuItem>
          </NavDropdown>
        </Nav>
      </div>
    );
  }
}

export default HeaderLinks;
