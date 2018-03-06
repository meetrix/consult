import React,{Component} from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem } from 'reactstrap';

class MenuBarLanding extends Component{
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        };
    }
    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }
    render() {
        return (
            <div>
                <Navbar className="navbartop" color="white" light expand="md" >
                    <NavbarBrand href="/">The Maths Lab</NavbarBrand>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <NavLink  href="http://themathslab.com/getting-started/">Getting Started</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="http://themathslab.com/our-technology-expertise/">Our Technology & Expertise</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/#/dashboard">The Maths Lab Dashboard</NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        );
    }
}

export default MenuBarLanding;