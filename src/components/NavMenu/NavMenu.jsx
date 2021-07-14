import React from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import './NavMenu.css';
import { Container, Navbar, Nav, NavDropdown } from 'react-bootstrap';

const NavMenu = () => {
    return (
        <div>
            <Container fluid className='main-color'>
                <Navbar collapseOnSelect expand='lg'>
                    <Navbar.Brand href='#home'>React</Navbar.Brand>
                    <Navbar.Toggle aria-controls='responsive-navbar-nav' />
                    <Navbar.Collapse id='responsive-navbar-nav'>
                        <Nav className='m-auto'>
                            <LinkContainer to=''>
                                <Nav.Link>Dashboard</Nav.Link>
                            </LinkContainer>

                            <LinkContainer to='/enrolled'>
                                <Nav.Link>Enrolled</Nav.Link>
                            </LinkContainer>

                            <LinkContainer to='/result'>
                                <Nav.Link>Results</Nav.Link>
                            </LinkContainer>

                            <LinkContainer to='/courses'>
                                <Nav.Link>Courses</Nav.Link>
                            </LinkContainer>

                            <LinkContainer to='/blogs'>
                                <Nav.Link>Blogs</Nav.Link>
                            </LinkContainer>

                            <LinkContainer to='/messages'>
                                <Nav.Link>Messages</Nav.Link>
                            </LinkContainer>
                        </Nav>
                        <Nav>
                            <LinkContainer to=' '>
                                <Nav.Link>Login</Nav.Link>
                            </LinkContainer>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </Container>
        </div>
    );
};

export default NavMenu;
