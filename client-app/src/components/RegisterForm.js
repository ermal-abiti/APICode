import React, { Component } from 'react'
import { Form, Button } from 'react-bootstrap'
import axios from 'axios'
//import DropdownMultiselect from "react-multiselect-dropdown-bootstrap";
import { Redirect } from 'react-router-dom';



export default class RegisterForm extends Component {
    constructor(props) {
        super(props);
        this.handlePost = this.handlePost.bind(this);
    }
    state = {
        redirect: false,
    }

    onChangeColor(event) {
        return event.target.selected;
    }

    handlePost(event) {
        event.preventDefault();
        fetch('http://localhost:5000/api/register',{
            method:'POST',
            headers:{
                'Accept':'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                UserName: event.target.UserName.value,
                Email: event.target.Email.value,
                Password: event.target.Password.value,
                UserRoleId: 1
            })
        })
        .then(res=>res.json()).then((result)=>{
            // alert(result);
            // console.log(result);
            this.setState({...this.state, redirect: true})

        },
        (error)=>{
            alert('Failed')
        });
    }
    
    render() {
        if (this.state.redirect) {
            return <Redirect to='/'/>;
            
        }

        return (
            
            <div>
            <Form onSubmit={this.handlePost}>
                <Form.Group controlId="UserName">
                    <Form.Label>Username</Form.Label>
                    <Form.Control type="text" name="UserName" required ></Form.Control>
                </Form.Group>

                <Form.Group controlId="Email">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="text" name="Email" required ></Form.Control>
                </Form.Group>

                <Form.Group controlId="Password">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name="Password" required></Form.Control>
                </Form.Group>


                <Form.Group>
                    <Button variant="success" type="submit" >
                        Register
                    </Button>
                </Form.Group>
            </Form>  
            </div>
        )
    }
}
