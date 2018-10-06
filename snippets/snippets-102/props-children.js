//counters.jsx
import React, { Component } from "react";
//pull in counter component
import Counter from "./counter";

class Counters extends Component {
  state = {
    counters: [
      { id: 1, value: 4 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 }
    ]
  };
  //Map each counter to counter html component
  render() {
    return (
      <div>
        {/*Properties of the props object*/}
        {this.state.counters.map(counter => (
          <Counter key={counter.id} value={counter.value} selected>
            {/* insert children prop in between tag */}
            <h4>Counter #{counter.id}</h4>
          </Counter>
        ))}
      </div>
    );
  }
}

export default Counters;

//counter.jsx
render() {
    {
      /*Properties of the props object*/
    }
    console.log("props", this.props);
    return (
      <div>
        {/*child prop*/}
        {this.props.children}
        {/*alternate to child prop*/}
        <h4>
          Alt:
          {this.props.value}
        </h4>