import React, { Component } from 'react'
import { Form, Button } from 'react-bootstrap'
import axios from 'axios'
//import DropdownMultiselect from "react-multiselect-dropdown-bootstrap";
import { Redirect } from 'react-router-dom';



export default class AddOfers extends Component {
    constructor(props) {
        super(props);
        this.handlePost = this.handlePost.bind(this);
    }
    state = {
        users:[],
        redirect: false,
    }

    onChangeColor(event) {
        return event.target.selected;
    }

    componentDidMount() {
        axios.get('http://localhost:5000/api/user')
        .then ((response) =>{
            this.setState({
                users: response.data
            })
        })
    }

    handlePost(event) {
        event.preventDefault();
        fetch('http://localhost:5000/api/ofers',{
            method:'POST',
            headers:{
                'Accept':'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                Title: event.target.Title.value,
                Description: event.target.Description.value,
                DatePosted: event.target.DatePosted.value,
                Category: event.target.Category.value,
                Price: event.target.Price.value,
                UserId: this.props.authenticatedUser
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
            return <Redirect to='/ofers'/>;
            
        }

        return (
            
            <div>
            <Form onSubmit={this.handlePost}>
                <Form.Group controlId="Title">
                    <Form.Label>Title</Form.Label>
                    <Form.Control type="text" name="Title" required ></Form.Control>
                </Form.Group>

                <Form.Group controlId="Description">
                    <Form.Label>Description</Form.Label>
                    <Form.Control as="textarea" type="text" name="Description" required></Form.Control>
                </Form.Group>

                <Form.Group controlId="Category">
                            <Form.Label>Category</Form.Label>
                            <Form.Control type="text" name="Category" placeholder="" />
                </Form.Group>

                <Form.Group controlId="Price">
                            <Form.Label>Price</Form.Label>
                            <Form.Control type="text" name="Price" placeholder="" />
                </Form.Group>

                <Form.Group controlId="DatePosted">
                            <Form.Label>Select Date</Form.Label>
                            <Form.Control type="date" name="DatePosted" placeholder="" />
                </Form.Group>

                {/* <Form.Group controlId="UserId">
                    <Form.Label>User</Form.Label>
                    <Form.Control type="text" name="UserId" required placeholder=""></Form.Control>
                </Form.Group> */}

                <Form.Group>
                    <Button variant="primary" type="submit" >
                        Add Ofers
                    </Button>
                </Form.Group>
            </Form>  
            </div>
        )
    }
}