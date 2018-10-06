import React, { Component } from "react";

class HelloWorldAttributes extends Component {
  state = {
    imageURL: "https://picsum.photos/200"
  };

  render() {
    return <img src={this.state.imageURL} alt="" />;
  }
}

export default HelloWorldAttributes;
