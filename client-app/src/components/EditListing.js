import React, { Component } from 'react'
import { Form, Button } from 'react-bootstrap'
import axios from 'axios'
import { Redirect } from 'react-router-dom';



export default class edit_listing extends Component {
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
        fetch('http://localhost:5000/api/listing/' + state.lId,{
            method:'PUT',
            headers:{
                'Accept':'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                Id: event.target.Id.value,
                Title: event.target.Title.value,
                Description: event.target.Description.value,
                Price: event.target.Price.value,
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
            return <Redirect to='/listing'/>;
        }

        const { state } = this.props.location
        state.lDatePosted = state.lDatePosted.substring(0, 10)

        return (
            
            <div>
            <Form onSubmit={this.handlePost}>
                <Form.Group controlId="Id">
                    <Form.Label>Id</Form.Label>
                    <Form.Control type="text" name="Id" required disabled defaultValue={state.lId}></Form.Control>
                </Form.Group>
                <Form.Group controlId="Title">
                    <Form.Label>Title</Form.Label>
                    <Form.Control type="text" name="Title" required defaultValue={state.lTitle}></Form.Control>
                </Form.Group>

                <Form.Group controlId="Description">
                    <Form.Label>Description</Form.Label>
                    <Form.Control as="textarea" type="text" name="Description" required defaultValue={state.lDescription}></Form.Control>
                </Form.Group>
                <Form.Group controlId="Price">
                    <Form.Label>Price</Form.Label>
                    <Form.Control type="text" name="Price" required defaultValue={state.lPrice}></Form.Control>
                </Form.Group>

                <Form.Group controlId="DatePosted">
                            <Form.Label>Select Date</Form.Label>
                            <Form.Control type="date" name="DatePosted" placeholder="Date of Birth" defaultValue={state.lDatePosted} />
                </Form.Group>

                <Form.Group controlId="UserId">
                    <Form.Label>User</Form.Label>
                    <Form.Control type="text" name="UserId" required placeholder="" defaultValue={state.lUserId}></Form.Control>
                </Form.Group>


                <Form.Group>
                    <Button variant="warning" type="submit" >
                        Update Listing
                    </Button>
                </Form.Group>
            </Form>  
            </div>
        )
    }
}
