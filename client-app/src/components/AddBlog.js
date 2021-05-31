import React, { Component } from 'react'
import { Form, Button } from 'react-bootstrap'
import axios from 'axios'
//import DropdownMultiselect from "react-multiselect-dropdown-bootstrap";
import { Redirect } from 'react-router-dom';



export default class AddBlog extends Component {
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
        fetch('http://localhost:5000/api/blogpost',{
            method:'POST',
            headers:{
                'Accept':'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                Title: event.target.Title.value,
                Content: event.target.Content.value,
                DatePosted: event.target.DatePosted.value,
                UserId: event.target.UserId.value
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
            return <Redirect to='/blog'/>;
            
        }

        return (
            
            <div>
            <Form onSubmit={this.handlePost}>
                <Form.Group controlId="Title">
                    <Form.Label>Title</Form.Label>
                    <Form.Control type="text" name="Title" required ></Form.Control>
                </Form.Group>

                <Form.Group controlId="Content">
                    <Form.Label>Content</Form.Label>
                    <Form.Control as="textarea" type="text" name="Content" required></Form.Control>
                </Form.Group>

                <Form.Group controlId="DatePosted">
                            <Form.Label>Select Date</Form.Label>
                            <Form.Control type="date" name="DatePosted" placeholder="Date of Birth" />
                </Form.Group>

                <Form.Group controlId="UserId">
                    <Form.Label>User</Form.Label>
                    <Form.Control type="text" name="UserId" required placeholder=""></Form.Control>
                </Form.Group>

                {/* <Form.Group controlId="UserId">
                <Form.Label>My multiselect</Form.Label>
                <Form.Control as="select" custom value={this.state.users}>
                    {this.state.users.map(user => (
                        <option value={user.id} key={user.id}>{user.username}</option>
                    ))}
                </Form.Control>
                </Form.Group> */}

                {/* <DropdownMultiselect
                    options={["Australia", "Canada", "USA", "Poland", "Spain", "France"]}
                    name="countries"
                /> */}

                <Form.Group>
                    <Button variant="primary" type="submit" >
                        Add Post
                    </Button>
                </Form.Group>
            </Form>  
            </div>
        )
    }
}
