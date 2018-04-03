import React, { Component } from "react";
import {

	Badge,
	Nav,
	NavLink,
	NavItem,
	NavbarToggler,
	NavbarBrand,
} from "reactstrap";
import HeaderDropdown from "./HeaderDropdown";

class Header extends Component {
	sidebarToggle(e) {
		e.preventDefault();
		document.body.classList.toggle("sidebar-hidden");
	}

	sidebarMinimize(e) {
		e.preventDefault();
		document.body.classList.toggle("sidebar-minimized");
	}

	mobileSidebarToggle(e) {
		e.preventDefault();
		document.body.classList.toggle("sidebar-mobile-show");
	}

	asideToggle(e) {
		e.preventDefault();
		document.body.classList.toggle("aside-menu-hidden");
	}

	mobileAsideToggle(e) {
		e.preventDefault();
		document.body.classList.toggle("aside-menu-hidden");
	}


	render() {
		return (
  <header className="app-header navbar">
  <NavbarToggler className="d-lg-none" onClick={this.mobileSidebarToggle}>
  <span className="navbar-toggler-icon" />
    </NavbarToggler>
  <NavbarBrand href="#" />
  <NavbarToggler className="d-md-down-none mr-auto" onClick={this.sidebarToggle}>
					<span className="navbar-toggler-icon" />
    </NavbarToggler>

				<Nav className="ml-auto" navbar>
      <NavItem className="d-md-down-none">
  <NavLink href="#"><i className="icon-bell" /><Badge pill color="danger">5</Badge></NavLink>
					</NavItem>
      <NavItem className="d-md-down-none">
  <NavLink href="#"><i className="icon-list" /></NavLink>
					</NavItem>
					<NavItem className="d-md-down-none">
    <NavLink href="#"><i className="icon-location-pin" /></NavLink>
  </NavItem>
					<HeaderDropdown {...this.props} />
    </Nav>
  <NavbarToggler className="d-lg-none" onClick={this.mobileAsideToggle}>
  <span className="navbar-toggler-icon" />
				</NavbarToggler>
  <NavbarToggler className="d-md-down-none" onClick={this.asideToggle}>
  <span className="navbar-toggler-icon" />
				</NavbarToggler>
			</header>
		);
	}
}

export default Header;
