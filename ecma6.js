//JS object
const person = {
  name: "Rob",
  walk: function() {},
  //drop the colon and function keyword
  talk() {}
};

person.talk();
person["name"] = "Rob";
//use square notation when using variable
person[input.value] = "Rob";

//this
const person = {
  name: "Rob",
  walk() {
    console.log(this);
  }
};

person.walk();
//will return person object

const walk = person.walk;
walk(); //will return undefined

//bind this
//set the value of this to the person object using bind
const walk = person.walk.bind(person);
walk(); //will return the person object

//Arrow functions
const square = function(number) {
  return number * number;
};

//ecma6
const square = number => {
  return number * number;
};

//if only 1 parameter
const square = number => {
  return number * number;
};

//if no parameters
const square = () => {
  return number * number;
};

//if only single line
const square = number => number * number;

//arrow functions in array
const jobs = [
  { id: 1, isActive: true },
  { id: 2, isActive: true },
  { id: 3, isActive: false }
];

//get only active jobs
//predicate function takes job object and returns T/F
//filter method iterates over array
//for each job object is passed to predicate function
const activeJobs = jobs.filter(function(job) {
  return job.isActive;
});

//ecma arrow function
const activeJobs = jobs.filter(job => job.isActive);

//arrow functions with this
const person = {
  talk() {
    var self = this; //now reundant
    setTimeout(() => {
      console.log("this", this);
    }, 1000);
  }
};

person.talk();

//array.map method
//used to render lists in react
//render array as list items
const colors = ["red", "green", "blue"];
const items = colors.map(color => {
  //callback function takes an item and returns a new item
  //return '<li>' + color + '</li>';
  //object literal for ecma6
  return `<li>${color}</li>`;
});

console.log(items); //returns new array with li

//Object destucturing
const address = {
  street: "",
  city: "",
  country: ""
};

const { street, city, country } = address;
const { country } = address;
const { street: st, city: ct, country: cunt } = address;

//Spread operator
const first = [1, 2, 3];
const second = [4, 5, 6];

const combined = first.concat(second); //old method

const combined = [...first, ...second]; //new spread method
const combined = [...first, "a", ...second, "b"];
//add items in array
const clone = [...first]; //clone array

//combine an object
const first = { name: "Rob" };
const second = { job: "web dev" };
const combined = { ...first, ...second, location: "UK" };

//classes
class Person {
  constructor(name) {
    this.name = name;
  }

  walk() {
    console("walk");
  }
}

const person = newPerson("Rob");

//Inheritance
class Teacher extends Person {
  constructor(name, degree) {
    super(name);
    this.degree = degree;
  }
  teach() {
    console.log("teach");
  }
}

//inherits name from extended class
const teacher = new Teacher("Rob", "web development");

//Modules
//See ecma6PersonClass.js
//import person class
import { Person } from "./ecma6PersonClass";

//default and named exports
//export single class (default)
import Person from "./ecma6PersonClass";
//export default and named
import Person, { promote } from "./ecma6PersonClass";
//eg:
import React, { Component } from "react";
