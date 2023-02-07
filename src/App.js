import React, { Component } from 'react';
import Home from './Home';
import Nav from './Nav';
import Profile from './Profile';


export default class App extends Component {
  render() {
    return (
      <div>
          <Nav/>
          <Home/>
          <Profile/>
          
      </div>
    )
  }
}
