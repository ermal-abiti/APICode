import React, { Component } from 'react'
import { Container, Nav, Navbar, NavDropdown} from "react-bootstrap";
import axios from 'axios';


export default class Navigation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userLoggedIn: null
        }
      }
  
    componentDidMount() {
      fetch('http://localhost:5000/api/loggeduser',{
        method:'GET',
        headers:{
            'Accept':'application/json',
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        },
        credentials: 'include'
      })
            .then((response) =>{
              this.setState({
                  ...this.state,
                userLoggedIn: response.data[0]
              })
            })
    }
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
                    <Nav.Link href="/listing">Listings</Nav.Link>
                    <Nav.Link href="/auction">Auction</Nav.Link>
                    <Nav.Link href="/register">Register</Nav.Link>
                    <NavDropdown title="User" id="basic-nav-dropdown">
                        {this.state.userLoggedIn ? <NavDropdown.Item href="#action/3.1">User</NavDropdown.Item> : ''}
                        {console.log(this.state.userLoggedIn)}
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
