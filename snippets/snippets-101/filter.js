import React, { Component } from "react";

class HelloWorldFilter extends Component {
  state = {
    movies: [] //get movie api
  };

  //delete a movie by ID

  handleDelete = movie => {
    //filter the movie id
    const movies = this.state.movies.filter(m => m._id !== movie._id);
    this.setState({ movies });
    //set the state
  };

  render() {
    //pass movie parameter to function
    return (
      <button
        onClick={() => this.handleDelete(movie)}
        className="btn btn-danger"
      >
        Delete
      </button>
    );
  }
}

export default HelloWorldFilter;
