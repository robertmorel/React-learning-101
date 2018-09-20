import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0,
    imageUrl: "https://picsum.photos/200",
    tags: ["tag1", "tag2", "tag3"]
  };

  imageStyle = {
    width: "20px"
  };

  constructor() {
    super();
    //access parent class
    this.handeIncrement = this.handeIncrement.bind(this);
    //bind handleIncrent function to this
  }

  //button onclick function
  handeIncrement = () => {
    console.log("Increment clicked", this);
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <div>
        <img style={this.imageStyle} src={this.state.imageUrl} alt="" />
        {/* 
        Image url set in state 
        Image styles set in style object
        */}
        <span
          onClick={() => this.handeIncrement({ id: 1 })}
          className={this.getBadgeClasses()}
        >
          {this.formatCount()}
        </span>
        {/*
        set formatCount function as content
        Apply getBadgeClasses function as className
        */}
        <button
          onClick={this.handeIncrement}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        <ul>
          {/*map tag array objects to tag string*/}
          {this.state.tags.map(tag => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>
      </div>
    );
  }

  //used to set badge color based on count value
  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    //change class based on count value
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { count } = this.state;
    //destructure this.state.count
    return count === 0 ? "Zero" : count;
    //if count = 0 then display zero else display count
  }
}

export default Counter;
//export as default class
