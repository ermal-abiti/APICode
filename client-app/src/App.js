<<<<<<< Updated upstream
import React, { useEffect, useState } from "react";
import Navigation from "./components/Navigation";
import Blog from './components/Blog'
import Home from './components/Home'
import AddBlog from './components/AddBlog'
import EditBlog from './components/EditBlog'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import PublicRoute from './components/Routes/PublicRoute'
import PrivateRoute from './components/Routes/PrivateRoute'
import axios from "axios";
import AddOfers from './components/AddOfers'
import Ofers from './components/Ofers'

import Listing from  './components/Listing'
import AddListing from './components/AddListing'
import EditListing from './components/EditListing'

import Auction from './components/Auction'
import AddAuction from './components/AddAuction'


=======
import React, { useEffect, useState } from 'react'
import { BrowserRouter, Route, Switch } from "react-router-dom";
import axios from 'axios'
>>>>>>> Stashed changes

import NavBar from './components/NavBar';
import Home from './components/Home'
import './index.css'

import Listing from './components/cruds/Listing';
import AddListing from './components/cruds/AddListing';
import UpdateListing from './components/cruds/UpdateListing';

const App = () => {

  const [users, setUsers] = useState([])
  const [listings, setListings] = useState([])
  const [listing, setListing] = useState({})
  const [redirect, setRedirect] = useState(false)

  const getAllListings = async () => {
    try {
      const res = await axios.get('http://localhost:5000/api/listing/',{})
      setListings(res.data)
    }
    catch(e) {
      console.log(e)
    }
    
  }

  const getListingById = (id) => {
    // getAllListings()
    console.log(listings);
    console.log(listings.filter(listing => listing.id === id))
  }

  const getAllUsers = async () => {
    try {
      const res = await axios.get('http://localhost:5000/api/user/')
      setUsers(res.data)
    }
    catch (e){
      console.log(e);
    }
    
  }

  const getUserById = (id) => {
    return (users.filter(user => user.id === id).map(user => <b key={user.id}>{user.userName}</b>))
  }
  

  return (
    <BrowserRouter>
      <div>
<<<<<<< Updated upstream
        <Switch>
          <Route path="/" component={Home} exact/>
          <Route path="/blog" isAuthenticated={isAuthenticated} component={() => <Blog  isAuthenticated={isAuthenticated} userid={userid}  />} exact/>
          <Route path="/ofers" isAuthenticated={isAuthenticated} component={() => <Ofers  isAuthenticated={isAuthenticated} userid={userid}  />} exact/>
          <Route path="/add_ofers" isAuthenticated={isAuthenticated} component={()=> <AddOfers authenticatedUser={userid} isAuthenticated={isAuthenticated} />} exact/>
          <Route path="/add_blog" isAuthenticated={isAuthenticated} component={()=> <AddBlog authenticatedUser={userid} isAuthenticated={isAuthenticated} />} exact/>
          <Route path="/edit_blog" isAuthenticated={isAuthenticated} component={EditBlog} exact/>
          {/* <PrivateRoute isAuthenticated={isAuthenticated} path="/listing" component={() => <Listing  isAuthenticated={isAuthenticated} userid={userid}  />} exact/> */}
          {/* <Route path="/listing" component={Listing} exact/> */}
          <Route isAuthenticated={isAuthenticated} path="/listing" component={() => <Listing  isAuthenticated={isAuthenticated} userid={userid}  />} exact/>
 
          <Route path="/add_listing" isAuthenticated={isAuthenticated} component={()=> <AddListing authenticatedUser={userid} isAuthenticated={isAuthenticated} />} exact/>
          <Route path="/edit_listing" isAuthenticated={isAuthenticated} authenticatedUser={userid} component={EditListing} exact/>

          <Route path="/auction" isAuthenticated={isAuthenticated} component={Auction} exact/>
          <Route path="/add_auction" component={AddAuction} exact/>
          <Route path="/register" isAuthenticated={isAuthenticated} component={RegisterForm} exact/>
          <Route isAuthenticated={isAuthenticated} path="/login" component={LoginForm} exact/>
        </Switch>
=======
        <NavBar variant='blue' />
        <div className="container">
          <Switch>
            <Route exact path='/' render={Home} />
            <Route exact path='/listings' render={props => (
              <Listing
                {...props} 
                getAllListings={getAllListings} 
                listings={listings}
                getUserById={getUserById}
                getAllUsers={getAllUsers}
              />
            )} />
            <Route exact path='/listings/add' render={props =>(
              <AddListing
                {...props}
                redirect={redirect}
                setRedirect={setRedirect}
              />
            )} />

            <Route exact path='/listings/update/:id' render={props =>(
              <UpdateListing
                {...props}
                getAllListings={getAllListings}
                // listing={listing}
                getListingById={getListingById}
                redirect={redirect}
                setRedirect={setRedirect}
              />
            )} />
          </Switch>
        </div>
>>>>>>> Stashed changes
      </div>
    </BrowserRouter>
    
  )
}

export default App
