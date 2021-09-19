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
                UserId: this.props.authenticatedUser
            })
        })
        .then(res=>res.json()).then((result)=>{
            // alert(result);
            // console.log(result);
            // this.setState({...this.state, redirect: true})

        },
        (error)=>{
            alert('Failed' + error)
        });
    }

    
    render() {
        console.log(this.getdate())
        return (
            <Form onSubmit={this.handlePost}>
                <Form.Group controlId="Content">
                    <Form.Label>Comment</Form.Label>
                    <Form.Control as="textarea" type="text" name="Content" required  placeholder="Comment on this post..."></Form.Control>
                </Form.Group>

                <Form.Group controlId="DatePosted" hidden>
                    <Form.Label>Select Date</Form.Label>
                    <Form.Control type="date" name="DatePosted" placeholder="Date of Birth" defaultValue={this.getdate()} />
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
