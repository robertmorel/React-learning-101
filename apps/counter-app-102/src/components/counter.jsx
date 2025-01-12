import React, { Component } from "react";

class Counter extends Component {
  render() {
    {
      /*Properties of the props object*/
    }
    console.log("props", this.props);
    return (
      <div>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>

        <button
          onClick={() => this.props.onIncrement(this.props.counter)}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>

        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn btn-danger btn-sm m-2"
        >
          Delete
        </button>
      </div>
    );
  }

  //used to set badge color based on count value
  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    //change class based on count value
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { value } = this.props.counter;
    //destructure this.state.count
    return value === 0 ? "Zero" : value;
    //if count = 0 then display zero else display count
  }
}

export default Counter;
//export as default class
