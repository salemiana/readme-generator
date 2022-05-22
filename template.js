
function generateReadme(answers) {
  return `
  <h1 align="center">${answers.title}</h1>
    

## Table of contents
- [Description](#Description)
- [Usage](#usage)
- [Contribution](#contribution)
- [Installation](#installation)
- [Links](#links)
- [License](#license)
    
    
## Description
${answers.description}

## Usage
${answers.usage}

## Contribution
${answers.contribution}

## Installation
${answers.installation}

## License
${answers.license}


## Links

Username: ${answers.username}<br />
email: ${answers.email}`;
}
module.exports = generateReadme;
