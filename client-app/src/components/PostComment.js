import React, { Component } from 'react'
import axios from 'axios'

export default class PostComment extends Component {
    constructor(props) {
        super(props)
    }

    state = {
        comments:[],
        users: []
    }

    componentDidMount() {
        axios.get('http://localhost:5000/api/postcomment')
        .then ((response) =>{
            this.setState({
                comments: response.data
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

    getUser(id) {
        return (this.state.users.filter(user => user.id === id).map(user => <b key={user.id}>{user.username}</b>))
    }

    render() {
        return (
            <>
            {this.state.comments.filter(comment => comment.blogPostId === this.props.postId).map( comment => (
                <div className="alert alert-primary" key={this.props.postId}>
                <div><b>{this.getUser(comment.userId)}</b> - At {comment.datePosted.substring(0,10)}</div>
                <hr/>
                <p>{comment.content}</p>
            </div>
            ))}
            </>
        )
    }
}
