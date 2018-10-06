import React, { Component } from "react";
import { getPosts } from "../services/blogPostList";

class Posts extends Component {
  state = {
    posts: getPosts()
  };

  listOfPosts() {
    //map tags to list or display message
    if (this.state.posts.length === 0) return <p>There are no posts!</p>;
    return "List of posts";
  }

  render() {
    return (
      <div>
        <h2>{this.listOfPosts()}</h2>
        <table className="table">
          <thead>
            <tr>
              <th>Title</th>
              <th>Author</th>
              <th>Category</th>
              <th>Content</th>
              <th />
            </tr>
          </thead>
          <tbody>
            {this.state.posts.map(post => (
              <tr key={post._id}>
                <td>{post.title}</td>
                <td>{post.author}</td>
                <td>{post.category.name}</td>
                <td>{post.content}</td>
                <td>
                  <button className="btn btn-danger">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Posts;