import React from 'react'
import { Redirect } from 'react-router'

const AddListing = (props) => {
    // props.setRedirect(false)

    const handlePost = (e) => {
        e.preventDefault()
        fetch('http://localhost:5000/api/listing',{
            method:'POST',
            headers:{
                'Accept':'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                title: e.target.title.value,
                description: e.target.description.value,
                datePosted: e.target.datePosted.value,
                price: e.target.price.value,
                userId: 10,
            })
        })
        .then(res=>res.json()).then((result)=>{
            props.setRedirect(true)
        },
        (error)=>{
            alert('Failed')
        })
    }

    if (props.redirect) {
        return <Redirect to='/listings/' />
    }

    return (
        <div className="my-5 d-flex justify-content-center flex-row">
            <form onSubmit={handlePost} style={{minWidth:'400px'}}>
                <div className="form-group">
                    <input className="form-control" name="title" type="text" placeholder="Title" />
                </div>

                <div className="form-group">
                    <textarea className="form-control" name="description" type="text" placeholder="Description">

                    </textarea>
                </div>

                <div className="form-group">
                    <input className="form-control" name="price" type="text" placeholder="Price" />
                </div>

                <div className="form-group">
                    <input className="form-control" name="datePosted" type="date" placeholder="Date" />
                </div>

                <div className="form-group">
                    <input className="form-control" className="btn btn-success btn-block" name="submitBtn" type="submit" value="Add Listing" placeholder="Date" />
                </div>
            </form>
        </div>
    )
}

export default AddListing
