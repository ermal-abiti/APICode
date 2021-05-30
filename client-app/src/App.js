import Navigation from "./components/Navigation";
import React, { Component } from 'react'
import axios from 'axios'

class App extends Component {
  state = {
    values: []
  }

  componentDidMount() {
    axios.get('http://localhost:5000/api/value')
      .then((response) =>{
        this.setState({
          values: response.data
        })
      })
    
  }
  render() {
    return (
      <>
      <Navigation/>


      <div className="container mt-3">
        <ul>
          {this.state.values.map((val) => (
            <li key={val.id}>{val.name}</li>
          ))}
        </ul>
      </div>
      </>
    );
  }
}

export default App;
