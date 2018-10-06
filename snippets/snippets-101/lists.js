import React, { Component } from "react";

class HelloWorldLists extends Component {
  state = {
    tags: ["tag1", "tag2", "tag3"]
  };
  render() {
    return (
      <ul>
        {/*map tag array objects to tag string*/}
        {this.state.tags.map(tag => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
    );
  }
}

export default HelloWorldLists;
