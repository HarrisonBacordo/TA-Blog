import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Jumbotron from './components/jumbotron/jumbotron';
import Blogs from './components/blogs/blogs';

class App extends Component {
  render() {
    return (
      <div>
        < Jumbotron headerText="This is the header" subHeaderText="This is a placeholder"/>
        <Blogs />
      </div>
    );
  }
}

export default App;
