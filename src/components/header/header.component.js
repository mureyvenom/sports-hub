import React from 'react';
import {Navbar, Nav, NavDropdown, Container} from 'react-bootstrap';
import './header.styles.css';
import { Link } from 'react-router-dom';

const Header = () => {
    return(
        <div>
            <Navbar fixed='top' collapseOnSelect expand="md" id='navbar'>
                <Container>
                    <Navbar.Brand as={Link} to='/'>
                        <span className='logo'>Demo</span>    
                    </Navbar.Brand>

                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />

                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ml-auto">
                            <Nav.Link as={Link} to="/">Home</Nav.Link>
                            <NavDropdown title="Broadcast" id="collasible-nav-dropdown">
                                <NavDropdown.Item as={Link} to="/live-matches">Live Matches</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item as={Link} to="/highlights">Highlights</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item as={Link} to="/schedule">Broadcast Schedule</NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link as={Link} to="/news">News</Nav.Link>
                            <Nav.Link as={Link} to="/sign-in">Sign In</Nav.Link>                            
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default Header;