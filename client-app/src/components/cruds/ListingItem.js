import React, { useEffect } from 'react'

const ListingItem = ({listing, getUserById}) => {
    return (
        <div className="card my-2"  style={{minWidth:'300px', maxWidth:'300px'}}>
            <div className="card-header">
                <img className="card-img-top" src="https://i.pinimg.com/originals/06/83/cf/0683cffdcb121a6980057d45070565ac.jpg"/>
            </div>
            <div className="card-body">
                <h5 className="card-title">{listing.title}</h5>
                <p className="card-text">{listing.description}
                </p>
                <p>Added by {getUserById(listing.userId)}</p>
                
                
            </div>
        </div>
    )
}

export default ListingItem
