import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import * as apiHandler from './api-handler';

const CACHE_DURATION = 5;
const CACHE_KEY = "pictures";

class App extends Component {
  constructor(){
    super();

    this.state = {
      pictures: []
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    apiHandler.getApiData('https://randomuser.me/api/?results=10', CACHE_DURATION, true)
      .then(
        data => this.setState({ pictures: data.results})
      );
  }

  componentDidMount() {
    apiHandler.getApiData('https://randomuser.me/api/?results=10', CACHE_DURATION, true)
      .then(
        data => this.setState({ pictures: data.results})
      );
  }

  render() {
    const { pictures } = this.state;

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <p className="App-intro">
          Click to refresh pictures <button onClick={this.handleClick}>Refresh</button>
        </p>
        
        <div className="container2">
          <div className="container1">
            {pictures.map((pic) => {
                return(
                  <div key={pic.email}>
                  <img src={pic.picture.medium} />
                  </div>
                )
              })}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
