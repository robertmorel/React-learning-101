import React, { Component } from "react";

class HelloWorldConditionals extends Component {
  state = {
    count: 0,
    tags: ["tag1", "tag2", "tag3"]
  };

  renderTags() {
    //map tags to list or display message
    if (this.state.tags.length === 0) return <p>There are no tags!</p>;
    return (
      <ul>
        {this.state.tags.map(tag => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
    );
  }

  render() {
    return (
      <div>
        {/*alternate conditional truthy string*/}
        {this.state.tags.length === 0 && "Please add some tags"}
        {/*conditional function call*/}
        {this.renderTags()}
      </div>
    );
  }
}

export default HelloWorldConditionals;
