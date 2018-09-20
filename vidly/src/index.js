import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import "bootstrap/dist/css/bootstrap.css";
import "font-awesome/css/font-awesome.css";

/*
Set up html structure
Get api Data
loop and sisplay in List
Add delete function 
*/

ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();
