import React, { Component } from "react";

class HelloWorldExpressions extends Component {
  //state holds any data this component needs
  state = {
    count: 0,
    message: "Hello World"
  };
  render() {
    return (
      <div>
        {/* Get count from state */}
        <h1>{this.state.count}</h1>
        {/* Get message from state */}
        <h2>{this.state.message}</h2>
        {/* Inline calculation */}
        <h3>{2 + 2}</h3>
        {/* Get return value from function */}
        <h4>{this.formatCount()}</h4>
      </div>
    );
  }

  formatCount() {
    //filters count from state
    const { count } = this.state;
    //destructure this.state.count
    return count === 0 ? "Zero" : count;
    //if count = 0 then display zero else display count
  }
}

export default HelloWorldExpressions;
