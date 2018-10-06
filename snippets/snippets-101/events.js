import React, { Component } from "react";

class HelloWorldEvents extends Component {
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
    console.log("Increment clicked", this);
  };

    //button onclick function
    handeIncrementParam = product => {
    //function with arrow notation inherits 'this' keyword
    //sets state on event
    this.setState({ count: this.state.count + 1 });
      };

  render() {
    return (
      <div>
          {/**shorthand to pass parameter to function*/}
        <span onClick={() => this.handeIncrementParam({ id: 1 })}>
          {this.state.count}
        </span>
        {/*onclick by passing referenc to function*/}
        <button onClick={this.handeIncrement}>Increment</button>
      </div>
    );
  }
}
export default HelloWorldEvents;
//export as default class
