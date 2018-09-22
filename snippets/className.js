import React, { Component } from "react";

class HelloWorldClassName extends Component {
  state = {
    count: 0
  };

  render() {
    //npm install bootstrap for classes
    //className set by function
    return <span className={this.getBadgeClasses()}>{this.state.count}</span>;
  }

  //used to set badge color based on count value
  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    //change class based on count value
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }
}

export default HelloWorldClassName;
