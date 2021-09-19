import React, { useEffect, useState } from 'react'
import { Container, Nav, Navbar, NavDropdown} from "react-bootstrap";
import axios from 'axios';


const logout = () => {
  fetch('http://localhost:5000/api/logout',{
            method:'POST',
            headers:{
                'Accept':'application/json',
                'Content-Type': 'application/json'
            },
            credentials: 'include'

        })
        .then(res=>res.json()).then((result)=>{

        },
        (error)=>{
            alert('Failed')
        });
}

function Navigation(props) {

  

  const [username, setUsername] = useState('')
        useEffect(()=>{
            (
                async() =>{
                    const response = await fetch('http://localhost:5000/api/loggeduser', {
                        method:"GET",
                        headers: {"Content-Type": "application/json"},
                        credentials: 'include'
                    })

                    const content = await response.json()
                    setUsername(content.userName)
                }
                
            )();
        })

  return (
    <Navbar bg="none" expand="lg" variant="dark">
        <Navbar.Brand href="/">Estator</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
            {username ? 
                <>
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/blog">Blog</Nav.Link>
                <Nav.Link href="/listing">Listings</Nav.Link>
                <Nav.Link href="/auction">Auction</Nav.Link>
                <Nav.Link href="/ofers">Ofers</Nav.Link>

                </>
            : 
                <>
                <Nav.Link href="/register">Register</Nav.Link>
                <Nav.Link href="/login">Login</Nav.Link>
                </>
            }
            
            
            {username ? 
                <NavDropdown title={username} id="basic-nav-dropdown">
                
                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item onClick={props.logout} className="text-danger">Logout</NavDropdown.Item>
            </NavDropdown>
            : ''}
            
        </Nav>
        </Navbar.Collapse>
    </Navbar>
  )
}

export default Navigation

