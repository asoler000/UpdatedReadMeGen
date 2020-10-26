const fs = require("fs");
const path = require("path");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

const questions = [
  {
    type: "input",
    message: "What is your GitHub user name?",
    name: "username"
},
{
    type: "input",
    message: "What is your email",
    name: "email"
},
{
    type: "input",
    message: "What is your Project Title?",
    name: "projectTittle"
},
{
    type: "checkbox",
    message: "What languages does your project use?",
    name: "languages",
    choices: [
        "HTML__", 
        "CSS__", 
        "JavaScript__", 
        "MySQL__",
        "JQuery__",
        "Ajax__"
      ]
},

{
    type: "input",
    message: "Provide detail description",
    name: "projectDescription"
},
{
    type: "input",
    message: "What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.",
    name: "installationProcess"
},
{
    type: "input",
    message: "Provide instructions for use.",
    name: "instruction"
},
{
    type: "input",
    message: "Provide instructions examples for use.",
    name: "instructionExample"
},
{
type: "list",
name: "license",
message: "What kind of license should your project have?",
choices: ["MIT", "APACHE 2.0", "GPL 3.0", "BSD 3", "None"],
},

{
    type: "input",
    message: "Please enter git hub user names of the contributor if any (If there are mulitple contributor, seperate names with comma and no space! )",
    name: "contributorsGitUserName"
},
{
    type: "input",
    message: "Provide examples on how to run tests.",
    name: "tests"
},
];

function writeToFile(fileName, data) {
  return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

function init() {
  inquirer.prompt(questions).then((inquirerResponses) => {
    console.log(inquirerResponses);
    console.log("Generating README...");
    writeToFile("README.md", generateMarkdown({ ...inquirerResponses }));
  });
}

init();
