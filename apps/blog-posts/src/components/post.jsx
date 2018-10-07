import React, { Component } from "react";
import { getPosts } from "../services/blogPostList";
import Favourite from "./common/favourite";
import Pagination from "./common/pagination";
import { paginate } from "../utils/paginate";

class Post extends Component {
  state = {
    posts: getPosts(),
    currentPage: 1,
    pageSize: 2
  };

  listOfPosts() {
    //map tags to list or display message
    if (this.state.posts.length === 0) return <p>There are no posts!</p>;
    return "List of posts";
  }

  handleDeletePost = post => {
    const posts = this.state.posts.filter(p => p._id !== post._id);
    this.setState({ posts });
  };

  handleFavourited = post => {
    const posts = [...this.state.posts];
    const index = posts.indexOf(post);
    posts[index] = { ...posts[index] };
    posts[index].favourited = !posts[index].favourited;
    this.setState({ posts });
  };

  handlePageChange = page => {
    this.setState({ currentPage: page });
  };

  render() {
    const { length: count } = this.state.posts;
    const { pageSize, currentPage, posts: allPosts } = this.state;

    const posts = paginate(allPosts, currentPage, pageSize);

    return (
      <div className="container-fluid m-2">
        <h2>{this.listOfPosts()}</h2>
        <table className="table">
          <thead>
            <tr>
              <th>Title</th>
              <th>Author</th>
              <th>Category</th>
              <th>Content</th>
              <th />
              <th />
            </tr>
          </thead>
          <tbody>
            {posts.map(post => (
              <tr key={post._id}>
                <td>{post.title}</td>
                <td>{post.author}</td>
                <td>{post.category.name}</td>
                <td>{post.content}</td>
                <td>
                  <Favourite
                    onClick={() => this.handleFavourited(post)}
                    favourited={post.favourited}
                  />
                </td>
                <td>
                  <button
                    onClick={() => this.handleDeletePost(post)}
                    className="btn btn-danger"
                  >
                    Delete Post
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <Pagination
          itemsCount={count}
          pageSize={pageSize}
          currentPage={currentPage}
          onPageChange={this.handlePageChange}
        />
      </div>
    );
  }
}

export default Post;
