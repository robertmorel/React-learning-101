import React, { Component } from "react";

class HelloWorldState extends Component {}
state = {
    count: 0
  };

  constructor() {
    super();
    //access parent class from extend
    this.handeIncrement = this.handeIncrement.bind(this);
    //bind handleIncrent function to this
  }

  //button onclick function
  handeIncrement = () => {
    //function with arrow notation inherits 'this' keyword
    //sets state on event
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <div>
        <span onClick={() => this.handeIncrement({ id: 1 })}>
          {this.state.count}
        </span>
        {/*onclick by passing referenc to function*/}
        <button onClick={this.handeIncrement}>Increment</button>
      </div>
    );
  }
export default HelloWorldState;
//export as default class
