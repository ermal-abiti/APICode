import React, { Component } from 'react'
import axios from "axios"
import { Card, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import ListingComment from './ListingComment'


export default class Ofers extends Component {
    constructor(props) {
        super(props);
        //this.deletePost = this.deletePost.bind(this);
        this.state = {
            ofers: [],
            users: [],
        }
    }
    
    

    componentDidMount() {
        axios.get('http://localhost:5000/api/ofers')
          .then((response) =>{
            this.setState({
                ...this.state,
              ofers: response.data
            })
          })
        
        axios.get('http://localhost:5000/api/ofers')
        .then ((response) =>{
            this.setState({
                ...this.state,
                users: response.data
            })
        })
    }

    getUser(id) {
         return (this.state.users.filter(user => user.id === id).map(user => <b key={user.id}>{user.userName}</b>))
    }


    deleteOfers(id) {
        if (window.confirm('Are you sure you want to delete this post ?')) {
            axios.delete('http://localhost:5000/api/ofers/' + id, {
                method: 'DELETE',
                header: {
                    'Accept': 'application/json',
                    'Content-Type' : 'application/json'
                }
            })
            axios.get('http://localhost:5000/api/ofers')
            .then((response) =>{
            this.setState({
                ...this.state,
              posts: response.data
            })
          })
        }
    }

    render() {

        const { ofers, oId, oTitle, oDescription, oCategory, oDatePosted, oUserId, oPrice }= this.state
        const isAuthenticated = this.props.isAuthenticated
        {console.log(isAuthenticated)}

        return (
            isAuthenticated ? 
            <div className="">
                
                <div className="text-center"><a className="btn btn-primary" href="/add_ofers">Add Ofers</a></div>
                {ofers.map(post => (
                    
                    <Card  key={post.id} className="mt-3 mb-3 ">
                    {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
                    <Card.Header>{this.getUser(post.userId)} - {post.datePosted}
                        <div className="mt-3">
                            {this.props.isAuthenticated && post.userId == this.props.userid ? 
                                <>
                                <Link className="btn btn-primary" to={{
                                    pathname: '/edit_ofers',
                                    state: {
                                        oId: post.id, 
                                        oTitle: post.title, 
                                        oDescription :post.description, 
                                        oCategory : post.category,
                                        oDatePosted: post.datePosted,
                                        oUserId: post.userId,
                                        oPrice: post.price
                                    }
                                }}>Edit Ofers</Link>
                                
                                    <Button variant="danger" onClick={() => this.deleteOfers(post.id)}>
                                        Delete Ofers
                                    </Button>
                                </>
                            : ''}
                        
                        </div>
                        </Card.Header>
                    <Card.Body>
                        <Card.Title>{post.title}</Card.Title>
                        <Card.Text>
                        {post.description}
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <ListingComment listingId={post.id}/>
                        <h1>${post.price}</h1>
                    </Card.Footer>
                    </Card>
                )).reverse()}
            </div>
            :
        <div className="alert alert-danger">You are not logged in</div>
        )
    }
}
