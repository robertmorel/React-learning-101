//integrate multiple components in to a project
/*
For full code see apps/counter-app-102
*****Scroll down for refactoring******
Create a components folder in the src folder
create 2 jsx files: 
counter.jsx
counters.jsx
*/

//index.js
import Counters from "./components/counters";
ReactDOM.render(<Counters />, document.getElementById("root"));

//counters.jsx
import React, { Component } from "react";
//pull in counter component
import Counter from "./counter";

class Counters extends Component {
  state = {};
  //Return 4 counter components
  render() {
    return (
      <div>
        <Counter />
        <Counter />
        <Counter />
        <Counter />
      </div>
    );
  }
}

export default Counters;

//*********************Refactored*************************

//counters.jsx
class Counters extends Component {
  state = {
    counters: [
      { id: 1, value: 0 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 }
    ]
  };
  //Map each counter to counter html component
  render() {
    return (
      <div>
        {this.state.counters.map(counter => (
          <Counter key={counter.id} />
        ))}
      </div>
    );
  }
}
