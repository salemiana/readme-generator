
function generateReadme(answers) {
  return `

    # ${answers.title}

    

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
 
    ##Contribution
    ${answers.contribution}

    ##Installation
    ${answers.installation}

    ## License
    ${answers.license}


    ## Links
    * github ${answers.deployed}
    * repo ${answers.repo}`;
}
module.exports = generateReadme;
