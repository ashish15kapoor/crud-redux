import React, { Component } from 'react';
import './App.css';
import PostForm from './PostForm';
import AllPost from './AllPosts';

class App extends Component {
  render() {
    return (
      <div className="App">
        <PostForm></PostForm>
        <AllPost></AllPost>
      </div>
      );
    }
  }
  
export default App;