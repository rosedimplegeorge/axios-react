import React, { Component } from 'react';
import './App.css';
import UserForm from './components/UserForm';
import axios from 'axios';
import StickyFooter from './components/StickyFooter';

class App extends Component {

  state = {

    repos: ''

  }

  getUser = (e) => {
    e.preventDefault();
    const user = e.target.elements.username.value
    console.log(user);
    if (user) {
      axios.get(`https://api.github.com/users/${user}`)
      .then((res) => {
        console.log(res)
        const repos = res.data.public_repos 
        console.log(repos)
        this.setState({repos})
      })
    }else return;
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">HTTP CALLS - External API Calls in React</h1>
        </header>
        <UserForm getUser = {this.getUser} />
        { this.state.repos ? 
          <p> Number of Repos: {this.state.repos}</p> :
          <p>Please Enter a User name </p>}
          <StickyFooter />
      </div>
    );
  }
}

export default App;
