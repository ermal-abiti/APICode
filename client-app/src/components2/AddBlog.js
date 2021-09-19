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

    getdate() {
        var today = new Date()
        var year = today.getFullYear()
        var month = today.getMonth()
        var day = today.getDate()
        var time = today.getTime()
        if (month < 10) {
            month = `0${month}`
        }
        if (day < 10) {
            day = `0${day}`
        }
        return `${year}-${month}-${day}`
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
            return <Redirect to='/blog'/>;
            
        }

        return (
            this.props.isAuthenticated ?
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

                <Form.Group controlId="DatePosted" hidden>
                            <Form.Label>Select Date</Form.Label>
                            <Form.Control type="date" name="DatePosted" placeholder="Date of Birth" defaultValue={this.getdate()} />
                </Form.Group>


                <Form.Group>
                    <Button variant="primary" type="submit" >
                        Add Post
                    </Button>
                </Form.Group>
            </Form>  
            </div>
            :
            <div>You are not authenticated. <a href="/login">Login</a> to view this content</div>
        )
    }
}
