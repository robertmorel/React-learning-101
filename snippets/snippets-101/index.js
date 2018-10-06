//Basic
import React from "react";
import ReactDOM from "react-dom";

const element = <h1>Hello World</h1>;
ReactDOM.render(element, document.getElementById("root"));

//Render component
import React from "react";
import ReactDOM from "react-dom";
import HelloWorld from "./components/helloWorldComp";

ReactDOM.render(<HelloWorld />, document.getElementById("root"));
