
function generateReadme(answers) {
  return `
  <h1 align="center">${answers.title}</h1>

  ![badge](https://img.shields.io/badge/license-${answers.license}-brightgreen)<br />
    

## Table of contents
- [Description](#description)
- [Usage](#usage)
- [Contribution](#contribution)
- [Installation](#installation)
- [Tests](#tests)
- [Questions](#questions)
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
${answers.questions}<br />
My github Username:  ${answers.username}<br />
My email:  ${answers.email}
<br />
For additional questions - github: {(https://github.com/${answers.username})}`;
}

module.exports = generateReadme;
