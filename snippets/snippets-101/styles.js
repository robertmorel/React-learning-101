import React, { Component } from "react";

class HelloWorldStyles extends Component {
  state = {
    imageURL: "https://picsum.photos/200",
    count: 0
  };

  imageStyle = {
    width: "50px"
  };

  render() {
    return (
      <div>
        <img style={this.imageStyle} src={this.state.imageURL} />
        <h1 style={{ color: "pink" }}>Hello World Styles</h1>
      </div>
    );
  }
}

export default HelloWorldStyles;
