import React, { useEffect, useState } from "react";
import Navigation from "./components/Navigation";
import Blog from './components/Blog'
import Home from './components/Home'
import AddBlog from './components/AddBlog'
import EditBlog from './components/EditBlog'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import PublicRoute from './components/Routes/PublicRoute'
import PrivateRoute from './components/Routes/PrivateRoute'
import Cookies from 'js-cookie'
import axios from "axios";


import Listing from  './components/Listing'
import AddListing from './components/AddListing'
import EditListing from './components/EditListing'

import Auction from './components/Auction'
import AddAuction from './components/AddAuction'


import RegisterForm from './components/RegisterForm'
import LoginForm from './components/LoginForm'



const logout = () => {
  fetch('http://localhost:5000/api/logout',{
            method:'POST',
            headers:{
                'Accept':'application/json',
                'Content-Type': 'application/json'
            },
            credentials: 'include'

        })
        .then(res=>res.json()).then((result)=>{
        },
        (error)=>{
            alert('Failed')
        });
}

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

  function isAuth() {
    return isAuthenticated
  }


  return (
    <BrowserRouter>

      <Navigation logout={logout}/>

      {console.log(isAuth())}

      <div className="container mt-3">
        <Switch>
          <Route path="/" component={Home} exact/>
          <Route path="/blog" isAuthenticated={isAuthenticated} component={Blog} exact/>
          <Route path="/add_blog" isAuthenticated={isAuthenticated} authenticatedUser={userid} component={AddBlog} exact/>
          <Route path="/edit_blog" isAuthenticated={isAuthenticated} component={EditBlog} exact/>
          {console.log(Cookies.get('jwt'))}
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
      </div>
    </BrowserRouter>
  )
}

export default App

