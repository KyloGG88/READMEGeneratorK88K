const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
  {
    type: "input",
    name: "contact",
    message: "Provide a valid email address.",
  },
  {
    type: "input",
    name: "username",
    message: "Write your GitHub username.",
  },
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
    type: "input",
    name: "installation",
    message:
      "What are the steps required to install your project?",
  },
  {
    type: "input",
    name: "usage",
    message:
      "State the languages or technologies used within this project.",
  },
  {
    type: "input",
    name: "features",
    message: "If your project has a lot of features, list them here?",
  },
  {
    type: "input",
    name: "contributors",
    message: "Please list any contributors. (Use GitHub usernames)",
    default: "",
  },
  {
    type: "checkbox",
    name: "license",
    message: "Please select a license applicable to this project.",
    choices: ["MIT", "APACHE2.0", "CCZ1.0-Universal", "MPL2.0", "GPL3.0", "BSD3", "none"],
  },
  {
    type: "input",
    name: "test",
    message: "Provide walkthrough of required tests if applicable.",
  },
];

// function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => {
      if (err) {
          console.error(err);
      } else {
          console.log('Success! A README.md file has been created.');
      }
  });
}

// function to initialize program
function init() {
  inquirer.prompt(questions)
      .then((answers) => {
          const newReadMe = generateMarkdown(answers);
          writeToFile('NEW_README.md', newReadMe);
      })
      .catch((error) => {
          console.error('An error occurred: '+ error + 'Admin, Please debug your code');
      });
}

// function call to initialize program
init();

