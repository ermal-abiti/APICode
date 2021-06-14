import React, { Component } from 'react'
import axios from "axios"
import { Card, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import PostCommentForm from './PostCommentForm'
import PostComment from './PostComment'


export default class Blog extends Component {
    constructor(props) {
        super(props);
        this.deletePost = this.deletePost.bind(this);
        this.state = {
            posts: [],
            users: [],
        }
    }
    
    

    componentDidMount() {
        axios.get('http://localhost:5000/api/blogpost')
          .then((response) =>{
            this.setState({
                ...this.state,
              posts: response.data
            })
          })
        
        axios.get('http://localhost:5000/api/user')
        .then ((response) =>{
            this.setState({
                ...this.state,
                users: response.data
            })
        })
    }

    // componentDidUpdate(){
    //     axios.get('http://localhost:5000/api/blogpost')
    //       .then((response) =>{
    //         this.setState({
    //           posts: response.data
    //         })
    //       })
        
    //     axios.get('http://localhost:5000/api/user')
    //     .then ((response) =>{
    //         this.setState({
    //             users: response.data
    //         })
    //     })
    // }

    getUser(id) {
         return (this.state.users.filter(user => user.id === id).map(user => <b key={user.id}>{user.userName}</b>))
    }


    deletePost(id) {
        if (window.confirm('Are you sure you want to delete this post ?')) {
            axios.delete('http://localhost:5000/api/blogpost/' + id, {
                method: 'DELETE',
                header: {
                    'Accept': 'application/json',
                    'Content-Type' : 'application/json'
                }
            })
            axios.get('http://localhost:5000/api/blogpost')
            .then((response) =>{
            this.setState({
                ...this.state,
              posts: response.data
            })
          })
        }
    }

    render() {

        const { posts, bId, bTitle, bContent, bDatePosted, bUserId } = this.state
        return (
            
            <div className="">
                

                <div className="text-center"><a className="btn btn-primary" href="/add_blog">Add Post</a></div>
                {posts.map(post => (
                    
                    <Card  key={post.id} className="mt-3 mb-3 ">
                    {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
                    <Card.Header>{this.getUser(post.userId)} - {post.datePosted}
                        <div className="mt-3">
                        <Link className="btn btn-primary" to={{
                            pathname: '/edit_blog',
                            state: {
                                bId: post.id, 
                                bTitle: post.title, 
                                bContent :post.content, 
                                bDatePosted: post.datePosted,
                                bUserId: post.userId
                            }
                        }}>Edit Post</Link>
                        
                            <Button variant="danger" onClick={() => this.deletePost(post.id)}>
                                Delete Post
                            </Button>
                        </div>
                        </Card.Header>
                    <Card.Body>
                        <Card.Title>{post.title}</Card.Title>
                        <Card.Text>
                        {post.content}
                        </Card.Text>
                        
                        {/* <a href="/edit_blog" className="btn btn-primary">Edit Post</a> */}
                        {/* <Button variant="primary">Edit Post</Button> */}
                    </Card.Body>
                    <Card.Footer>
                        <PostComment postId={post.id}/>
                        <PostCommentForm blogPostId={post.id} />
                    </Card.Footer>
                    </Card>
                )).reverse()}
            </div>
        )
    }
}
