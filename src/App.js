import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Jumbotron from './components/jumbotron/jumbotron';
import Blogs from './components/blogs/blogs';
import NavBar from './components/common/navbar/navbar';

class App extends Component {
  render() {
    return (
      <div>
        < Jumbotron headerText="Harry's Scary Walk Through The Prairie" subHeaderText="This is a placeholder"/>
        <NavBar />
        <Blogs />
      </div>
    );
  }
}

export default App;
