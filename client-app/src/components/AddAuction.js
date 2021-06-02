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
        listings:[],
        redirect: false,
    }

    onChangeColor(event) {
        return event.target.selected;
    }

    componentDidMount() {
        axios.get('http://localhost:5000/api/listing')
        .then ((response) =>{
            this.setState({
                listings: response.data
            })
        })
    }

    handlePost(event) {
        event.preventDefault();
        fetch('http://localhost:5000/api/auction',{
            method:'POST',
            headers:{
                'Accept':'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                Title: event.target.Title.value,
                StartingPrice: event.target.StartingPrice.value,
                Deadline: event.target.Deadline.value,
                ListingId: event.target.ListingId.value
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

                <Form.Group controlId="StartingPrice">
                    <Form.Label>Starting Price</Form.Label>
                    <Form.Control type="text" name="StartingPrice" required></Form.Control>
                </Form.Group>

                <Form.Group controlId="Deadline">
                            <Form.Label>Select Deadline Date</Form.Label>
                            <Form.Control type="date" name="Deadline" placeholder="" />
                </Form.Group>

                <Form.Group controlId="ListingId">
                    <Form.Label>Listing</Form.Label>
                    <Form.Control type="text" name="ListingId" required placeholder=""></Form.Control>
                </Form.Group>

                

                <Form.Group>
                    <Button variant="primary" type="submit" >
                        Add Auction
                    </Button>
                </Form.Group>
            </Form>  
            </div>
        )
    }
}
