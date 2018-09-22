import React, { Component } from "react";

class HelloWorldFragment extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <h1>Hello World</h1>
        <ul>
          <li>Eat</li>
          <li>Breath</li>
          <li>Sleep</li>
        </ul>
        <p>Goodbye World</p>
      </React.Fragment>
    );
  }
}

export default HelloWorldFragment;
