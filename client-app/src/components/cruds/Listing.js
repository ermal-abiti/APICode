import React, { useEffect } from 'react'
import ListingItem from './ListingItem'

const Listing = (props) => {
    useEffect(() => {
        props.getAllListings()
        props.getAllUsers()
        // eslint-disable-next-line
    }, [])

    const { listings } = props
    
    return (
        <div>
            <div className="d-flex justify-content-center my-3">
                <a className="btn btn-primary" href="/listings/add">Add New Listing</a>

            </div>
            <div className="card-deck d-sm-flex flex-row justify-content-center align-content-center align-items-center">
                
                {listings.map((listing) => 
                    <ListingItem
                    key={listing.id} 
                    listing={listing} 
                    getUserById={props.getUserById}
                    />
                )}
            </div>
        </div>
    )
}

export default Listing
