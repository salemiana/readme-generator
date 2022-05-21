
function generateReadme(answers) {
    return `

    <h1>Template Title<h1>
    ## ${answers.title}

    ## Table of contents
    * [Description](#description)
    ${answers.description}
    * [Usage](#usage)
    ${answers.usage}
    * * [Contribution](#contribution)
    ${answers.contribution}
    * [Installation](#installation)
    ${answers.installation}
    * [Questions](#questions)
    * [License](#license)
    ${answers.license}
    
    

    ## Questions
    * github ${answers.deployed}
    * repo ${answers.repo}`
}
module.exports = generateReadme;