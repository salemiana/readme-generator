
function generateReadme(answers) {
  return `
  <h1 align="center">${answers.title}</h1>

  ![badge](https://img.shields.io/badge/license-${answers.license}-brightgreen)<br />
    

## Table of contents
- [Description](#Description)
- [Usage](#usage)
- [Contribution](#contribution)
- [Installation](#installation)
- [Tests](#Tests)
- [Questions](#Questions)
- [License](#license)
    
    
## Description
${answers.description}

## Usage
${answers.usage}

## Contribution
${answers.contribution}

## Installation
${answers.installation}

## Tests
${answers.tests}

## License
${answers.license}


## Questions

My github Username is: ${answers.username}<br />
contact me at email: ${answers.email}
<br />
For additional questions reach me at github: {(https://github.com/${answers.username})}`;
}

module.exports = generateReadme;
