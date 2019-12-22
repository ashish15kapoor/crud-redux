import React, { Component } from 'react';
import { connect } from 'react-redux';

class Post extends Component {
  deletePost = () => {
    this.props.dispatch(
      {
        type: 'DELETE_POST',
        id: this.props.post.id
      }
    ) 
  }
  editPost = () => {
    this.props.dispatch(
      {
        type: 'EDIT_POST',
        id: this.props.post.id
      }
    ) 
  }
  render() {
    return (
      <div>
        <h2>{this.props.post.title}</h2>
        <p>{this.props.post.message}</p>
        <button onClick={this.editPost}>Edit</button>
        <button onClick={this.deletePost}>Delete</button>
      </div>
    );
  }
}

export default connect()(Post);