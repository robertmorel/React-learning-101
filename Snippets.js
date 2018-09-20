{/* A JSX comment */}

//A skeleton react module - outputs react element
class exampleModule{

    state={}; 
    //the data to display when component is rendered
    render(); 
    //resposible for describing what UI looks like
}

/*
Create directory
Set permissions on directory
Cd to directory
npm -i -g create-react-app (install rect-app module)
create-react-app react-app-example (create a react app)
npm start - launch server on port 3000
*/

//public/index.html

//Contains the root of the application
<div id="root"></div>

//index.js

import React from 'react';
//import React object from react module
import ReactDOM from 'react-dom';

const element = <h1>Hello World</h1>;
//jsx expression
console.log(element); 
//will log object containing child hello world
ReactDOM.render(element, document.getElementById('root') );
//Render element as child of root element



