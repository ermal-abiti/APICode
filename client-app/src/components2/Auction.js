import React, { Component } from 'react'
import axios from "axios"
import { Card, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'


export default class Blog extends Component {
    constructor(props) {
        super(props);
        // this.deletePost = this.deletePost.bind(this);
        this.state = {
            auctions: [],
            listings: [],
        }
    }
    
    

    componentDidMount() {
        axios.get('http://localhost:5000/api/auction')
          .then((response) =>{
            this.setState({
                ...this.state,
              auctions: response.data
            })
          })
        
        axios.get('http://localhost:5000/api/listing')
        .then ((response) =>{
            this.setState({
                ...this.state,
                listings: response.data
            })
        })
    }

    getListing(id) {
         return (this.state.listings.filter(listing => listing.id === id).map(listing => <b key={listing.id}>{listing.title} - {listing.id}</b>))
    }


    deletePost(id) {
        if (window.confirm('Are you sure you want to delete this post ?')) {
            axios.delete('http://localhost:5000/api/auction/' + id, {
                method: 'DELETE',
                header: {
                    'Accept': 'application/json',
                    'Content-Type' : 'application/json'
                }
            })
            axios.get('http://localhost:5000/api/auction')
            .then((response) =>{
            this.setState({
                ...this.state,
              posts: response.data
            })
          })
        }
    }

    render() {

        const { auctions, aId, aTitle, aDeadline, aStartingPrice, aListingId } = this.state
        return (
            
            <div>
                <div className="text-center"><a className="btn btn-primary" href="/add_auction">Add Auction</a></div>
                {auctions.map(post => (
                    
                    <Card  key={post.id} className="mt-3 mb-3 ">
                    {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
                    <Card.Header>{this.getListing(post.listingId)} - {post.deadline}
                        <div className="mt-3">
                        <Link className="btn btn-primary" to={{
                            pathname: '/edit_auction',
                            state: {
                                aId: post.id, 
                                aTitle: post.title, 
                                aDeadline :post.deadline, 
                                aStartingPrice: post.startingPrice,
                                aListingId: post.listingId
                            }
                        }}>Edit Auction</Link>
                        
                            <Button variant="danger" onClick={() => this.deletePost(post.id)}>
                                Delete Auction
                            </Button>
                        </div>
                        </Card.Header>
                    <Card.Body>
                        <Card.Title>{post.title}</Card.Title>
                        <Card.Text>
                        {post.startingPrice}
                        </Card.Text>
                        
                        
                        
                    </Card.Body>
                    <Card.Footer>
                    </Card.Footer>
                    </Card>
                )).reverse()}
            </div>
        )
    }
}
