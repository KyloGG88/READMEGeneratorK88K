const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
  {
  type: "input",
    name: "title",
  message: "What is the name of your project?",
  },
  {
    type: "input",
      name: "description",
    message: "Provide a short description explaining the what, why, and how of your project?",
  },
  {
    type: "checkbox",
      name: "table",
    message: "",
  },
  {
    type: "",
      name: "",
    message: "",
  },
  {
    type: "",
      name: "",
    message: "",
  },
  {
    type: "",
      name: "",
    message: "",
  },
  {
    type: "",
      name: "",
    message: "",
  },
  {
    type: "",
      name: "",
    message: "",
  },

];

// function to write README file
function writeToFile(fileName, data) {


  
  

}

// function to initialize program
function init() {

}

// function call to initialize program
init();
