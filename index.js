// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateReadme = require('./template.js');
const util = require('node:util');
const writeFileSync = util.promisify(fs.writeFile);
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
    message: "Please enter usage of your project:"
  },
  {
    type: "input",
    name: "contribution",
    message: "What is the contribution?",
  
  },
  {
    type: "input",
    name: "installation",
    message: "Please enter installation info of your project:",
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
    type: "list",
    name: "license",
    message: "Please select the license you used for this project.",
    choices: [
      "Perl",
      "GNU GPLv3",
      "Eclipse",
      "Mozilla",
      "MIT",
      "Apache",
      "Boost",
    ],
  },
  
]);
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



