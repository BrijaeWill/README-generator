// TODO: Include packages needed for this application
import { promises as fs } from 'fs';
import inquirer from 'inquirer';
import generateMarkdown from './utils/generateMarkdown.js';

// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    name: "title",
    message: "What is the title of your project",
    validate: (titleInput) => {
      if (titleInput) {
        return true;
      } else {
        console.log("Please enter a project title");
      }
    },
  },
  {
    type: "input",
    name: "description",
    message: "Provide a project description",
    validate: (descriptionInput) => {
      if (descriptionInput) {
        return true;
      } else {
        console.log("Please Provide project description");
        return false;
      }
    },
  },
  {
    type: "list",
    name: "liscense",
    message: "What liscense does your project use?",
    choices: ["None", "Apache 2.0", "MIT", "GPL v3.0"],
    validate: (liscenseInput => {
      if (liscenseInput) {
        return true;
      } else {
        console.log("Please select one of the four options");
        return false;
      }
    }),
  },
  {
    type: "input",
    name: "installation",
    message: "What steps are needed to install your project",
    validate: (installationInput) => {
      if (installationInput) {
        return true;
      } else {
        console.log("Please provide installation steps");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "usage",
    message: "What is the use of projects?",
    validate: (usageInput) => {
      if (usageInput) {
        return true;
      } else {
        console.log("Please provide a use for your project");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "tests",
    message: "How do you test this project?",
    validate: (testingInput) => {
      if (testingInput) {
        return true;
      } else {
        console.log("Please explain how to test this project");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "github",
    message: "What is your Github username?",
    validate: (githubInput) => {
      if (githubInput) {
        return true;
      } else {
        console.log("Please provide your Github username");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "email",
    message: "What is your Email address",
    validate: (emailInput) => {
      if (emailInput) {
        return true;
      } else {
        console.log("Please provide an email");
        return false;
      }
    },
  },
];

// TODO: Create a function to write README file

const writeToFile = fileContent => {
    return new Promise((resolve, reject) => {
        fs.writeFile('./generatedREADME.md', fileContent, err => {
            if (err) {
                reject(err);
                return;
            }
            resolve({
                ok: true
            });
        });
    });
};

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then(function (answer) {
    console.log(answer);
    var fileContent = generateMarkdown(answer);
    writeToFile(fileContent);
  });
}

// Function call to initialize app
init();

export default questions;
