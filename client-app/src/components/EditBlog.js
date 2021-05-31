import React, { Component } from 'react'
import { Form, Button } from 'react-bootstrap'
import axios from 'axios'
// import DropdownMultiselect from "react-multiselect-dropdown-bootstrap";
import { Redirect } from 'react-router-dom';



export default class EditBlog extends Component {
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
        
        axios.get('http://localhost:5000/api/user/')
        .then ((response) =>{
            this.setState({
                users: response.data
            })
        })
    }

    handlePost(event) {
        const { state } = this.props.location

        event.preventDefault();
        fetch('http://localhost:5000/api/blogpost/' + state.bId,{
            method:'PUT',
            headers:{
                'Accept':'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                Id: event.target.Id.value,
                Title: event.target.Title.value,
                Content: event.target.Content.value,
                DatePosted: event.target.DatePosted.value,
                UserId: event.target.UserId.value
            })
        })
        .then(res=>res.json()).then((result)=>{
            alert(result);
            console.log(result);
            this.setState({...this.state, redirect: true})

        },
        (error)=>{
            console.log('Failed')
            this.setState({...this.state, redirect: true})
        });
    }
    
    render() {
        
        if (this.state.redirect) {
            return <Redirect to='/blog'/>;
        }

        const { state } = this.props.location
        state.bDatePosted = state.bDatePosted.substring(0, 10)

        return (
            
            <div>
            <Form onSubmit={this.handlePost}>
                <Form.Group controlId="Id">
                    <Form.Label>Id</Form.Label>
                    <Form.Control type="text" name="Id" required disabled defaultValue={state.bId}></Form.Control>
                </Form.Group>
                <Form.Group controlId="Title">
                    <Form.Label>Title</Form.Label>
                    <Form.Control type="text" name="Title" required defaultValue={state.bTitle}></Form.Control>
                </Form.Group>

                <Form.Group controlId="Content">
                    <Form.Label>Content</Form.Label>
                    <Form.Control as="textarea" type="text" name="Content" required defaultValue={state.bContent}></Form.Control>
                </Form.Group>

                <Form.Group controlId="DatePosted">
                            <Form.Label>Select Date</Form.Label>
                            <Form.Control type="date" name="DatePosted" placeholder="Date of Birth" defaultValue={state.bDatePosted} />
                </Form.Group>

                <Form.Group controlId="UserId">
                    <Form.Label>User</Form.Label>
                    <Form.Control type="text" name="UserId" required placeholder="" defaultValue={state.bUserId}></Form.Control>
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
                    <Button variant="warning" type="submit" >
                        Update Post
                    </Button>
                </Form.Group>
            </Form>  
            </div>
        )
    }
}
