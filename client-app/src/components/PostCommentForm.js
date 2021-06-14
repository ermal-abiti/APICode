import React, { Component } from 'react'
import { Button, Form } from 'react-bootstrap'
import axios from 'axios'

export default class PostCommentForm extends Component {
    constructor(props) {
        super(props)
        this.handlePost = this.handlePost.bind(this)
    }

    state = {
        comments:[]
    }

    handlePost(event) {
        event.preventDefault();
        fetch('http://localhost:5000/api/postcomment',{
            method:'POST',
            headers:{
                'Accept':'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                Content: event.target.Content.value,
                DatePosted: event.target.DatePosted.value,
                BlogPostId: this.props.blogPostId,
                UserId: event.target.UserId.value
            })
        })
        .then(res=>res.json()).then((result)=>{
            // alert(result);
            // console.log(result);
            window.location.reload();
            // this.setState({...this.state, redirect: true})

        },
        (error)=>{
            alert('Failed' + error)
        });
    }


    render() {
        return (
            <Form onSubmit={this.handlePost}>
                <Form.Group controlId="Content">
                    <Form.Label>Comment</Form.Label>
                    <Form.Control as="textarea" type="text" name="Content" required  placeholder="Comment on this post..."></Form.Control>
                </Form.Group>

                <Form.Group controlId="DatePosted">
                    <Form.Label>Select Date</Form.Label>
                    <Form.Control type="date" name="DatePosted" placeholder="Date of Birth" />
                </Form.Group>
                

                <Form.Group controlId="UserId">
                    <Form.Label>User</Form.Label>
                    <Form.Control type="text" name="UserId" required placeholder=""></Form.Control>
                </Form.Group>

                

                <Form.Group>
                    <Button variant="primary" type="submit" >
                        Add Comment
                    </Button>
                </Form.Group>
            </Form> 
        )
    }
}
