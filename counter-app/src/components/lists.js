import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0,
    tags: ["tag1", "tag2", "tag3"]
  };

  renderTags() {
    if (this.state.tags.length === 0) return <h3>No tags</h3>;
    //if no tags return message else return tags
    return (
      <ul>
        {this.state.tags.map(tag => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
    );
  }

  render() {
    //return renderTags function
    return (
      <div>
        {/* 
    alternate method of no tag message
    If true then message is true
     */}
        {this.state.tags.length === 0 && "Please create a new tag"}

        {this.renderTags()}
      </div>
    );
  }
}

export default Counter;
//export as default class
