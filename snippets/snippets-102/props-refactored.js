//counters.js
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

  handleDelete = counterId => {
    console.log("Event handled", counterId);
    const counters = this.state.counters.filter(c => c.id !== counterId);
    this.setState({ counters });
  };
  //Map each counter to counter html component
  render() {
    return (
      <div>
        {/*Properties of the props object*/}
        {this.state.counters.map(counter => (
          <Counter
            key={counter.id}
            onDelete={this.handleDelete}
            counter={counter}
          />
        ))}
      </div>
    );
  }
}

export default Counters;

//counter.jsx
//replace this.props.value
class Counter extends Component {
    state = {
      value: this.props.counter.value
    };