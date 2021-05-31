import React, { Component } from 'react'
import { Container, Nav, Navbar, NavDropdown} from "react-bootstrap";

export default class Navigation extends Component {
    render() {
        return (
            <Navbar bg="primary" expand="lg" variant="dark">
            <Container>
                <Navbar.Brand href="/">Estator</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/blog">Blog</Nav.Link>
                    <Nav.Link href="#link">Listings</Nav.Link>
                    <NavDropdown title="User" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">User</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">Logout</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
                </Navbar.Collapse>
            </Container>
            </Navbar>
        )
    }
}
