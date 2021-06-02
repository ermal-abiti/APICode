import Navigation from "./components/Navigation";
import Blog from './components/Blog'
import Home from './components/Home'
import AddBlog from './components/AddBlog'
import EditBlog from './components/EditBlog'
import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Listing from  './components/Listing'


class App extends Component {

  
  render() {
    return (
      <BrowserRouter>

        <Navigation/>


        <div className="container mt-3">
          <Switch>
            <Route path="/blog" component={Blog} exact/>
            <Route path="/" component={Home} exact/>
            <Route path="/add_blog" component={AddBlog} exact/>
            <Route path="/edit_blog" component={EditBlog} exact/>
            <Route path="/listing" component={Listing} exact/>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
