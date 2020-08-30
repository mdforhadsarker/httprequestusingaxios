import React, { Component } from 'react';
import './App.css';
import Form from './components/Form/Form';
import axios from 'axios';
import Profile from './components/Profile/Profile';
import Footer from './components/Footer/Footer';

// https://api.github.com/users/mdforhadsarker
class App extends Component {
  state = {
    repos: null
  };

  getUser = e => {
    e.preventDefault();
    const user = e.target.elements.username.value;
    if (user) {
      axios.get(`https://api.github.com/users/${user}`).then(res => {
        this.setState({ repos: res.data });
      });
    } else return;
  };
  render() {
    return (
      <div className='App'>
        <header className='App-header'>
          <h3>HTTP request using Axios</h3>
        </header>
        <Form getUser={this.getUser} />
        {this.state.repos ? (
          <Profile
            name={this.state.repos.name}
            company={this.state.repos.company}
            bio={this.state.repos.bio}
            location={this.state.repos.location}
            linkedin={this.state.repos.blog}
            repos={this.state.repos.public_repos}
          />
        ) : (
          <p>You need to put a valid username. Thanks </p>
        )}
        <Footer />
      </div>
    );
  }
}

export default App;
