import React, { useEffect, useState } from "react";
import Navigation from "./components/Navigation";
import Blog from './components/Blog'
import Home from './components/Home'
import AddBlog from './components/AddBlog'
import EditBlog from './components/EditBlog'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import axios from "axios";
import Listing from  './components/Listing'
import AddListing from './components/AddListing'
import EditListing from './components/EditListing'

import Auction from './components/Auction'
import AddAuction from './components/AddAuction'


import RegisterForm from './components/RegisterForm'
import LoginForm from './components/LoginForm'




const App = () => {

  const [username, setUsername] = useState('')
  const [userid, setUserid] = useState(0)
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  useEffect(()=>{
      (
          async() =>{
              const response = await fetch('http://localhost:5000/api/loggeduser', {
                  method:"GET",
                  headers: {"Content-Type": "application/json"},
                  credentials: 'include'
              })

              const content = await response.json()
              setUsername(content.userName)
              setUserid(content.id)
              setIsAuthenticated(content.id ? true : false)
          }
          
      )();
  })

  return (
    <BrowserRouter>

      <Navigation/>


      <div className="container mt-3">
        <Switch>
          <Route path="/" component={Home} exact/>

          <Route path="/blog" component={Blog} exact/>
          <Route path="/add_blog" component={AddBlog} exact/>
          <Route path="/edit_blog" component={EditBlog} exact/>

          <Route path="/listing" component={() => <Listing  isAuthenticated={isAuthenticated} userid={userid}  />} exact/>
          <Route path="/add_listing" component={()=> <AddListing authenticatedUser={userid} isAuthenticated={isAuthenticated} />} exact/>
          <Route path="/edit_listing" component={EditListing} exact/>

          <Route path="/auction" component={Auction} exact/>
          <Route path="/add_auction" component={AddAuction} exact/>
          <Route path="/register" component={RegisterForm} exact/>
          <Route path="/login" component={LoginForm} exact/>
        </Switch>
      </div>
    </BrowserRouter>
  )
}

export default App

