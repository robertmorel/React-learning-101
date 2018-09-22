{/* A JSX comment */}

//A skeleton react module - outputs react element
class exampleModule{

    state={}; 
    //the data to display when component is rendered
    render(); 
    //resposible for describing what UI looks like
}

//Hello world example

import React, { Component } from "react";

class HelloWorld extends Component {
  render() {
      //return jsx expression
    return <h1>Hello World</h1>;
  }
}
//export class as default
export default HelloWorld;