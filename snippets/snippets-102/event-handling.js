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

  //function to delete row
  handleDelete = () => {
    console.log("Event handled");
  };
  //Map each counter to counter html component
  render() {
    return (
      <div>
        {/*Properties of the props object*/}
        {this.state.counters.map(counter => (
          <Counter
            key={counter.id}
            value={counter.value}
            selected
            onDelete={this.handleDelete}
          />
        ))}
      </div>
    );
  }
}

export default Counters;

//counter.jsx
//call onDelete prop
<button
onClick={this.props.onDelete}
className="btn btn-danger btn-sm m-2"
>