// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const utils = require('utils');
// TODO: Create an array of questions for user input
const promptUser = () => {
  return inquirer.prompt([
    {
    type: "input",
    name: "title",
    message: "What is the title of your project?",
  },
  {
    type: "input",
    name: "description",
    message: "Please enter a one-sentence description of your project:",
  },
  {
    type: "input",
    name: "usage",
    message: "Please enter a one-sentence description of your project:"
  },
  {
    type: "input",
    name: "installation",
    message: "Please enter installation info of your project:",
  },
  {
    type: "input",
    name: "contribution",
    message: "What is the contribution?",
  
  },
  {
    type: "input",
    name: "repo",
    message: "What is the URL of the github repo?",
  },
  
  {
    type: "input",
    name: "userName",
    message: "What is your GitHub username?",
  },
  {
    type: "input",
    name: "github",
    message: "What is your repo link?",
  },

  {
    type: "input",
    name: "userEmail",
    message: "What is your email?",
  },
 
  {
    type: "list",
    name: "license",
    message: "Please select the license you used for this project.",
    choices: [
      "GNU AGPLv3",
      "GNU GPLv3",
      "GNU LGPLv3",
      "Mozilla",
      "MIT",
      "Apache",
      "Boost",
    ],
  },
  
]);
};

module.exports = {
  questions: questions,
};

// TODO: Create a function to write README file


// TODO: Create a function to initialize app
async function init() {
  try { const answers = await promptUser();
  const genReadme = generateReadme(answers);

   await writeFileSync("./dist/README.md", genReadme);
    // file written successfully
  } catch (err) {
    console.error(err);
  }
};
 
// Function call to initialize app
init();


// Function call to initialize app
init();
