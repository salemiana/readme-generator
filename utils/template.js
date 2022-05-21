
function generateReadme(answers) {
    return `

    <h1>Template Title<h1>
    ## ${answers.title}

    ## Table of contents
    * [Installation](#installation)
    ${answers.installation}
    * [Description](#description)
    * [Contribution](#contribution)
    * [Future Development](#future devs)
    * [Built With](#built with)
    * [instructions](#instructions)
    * [Credits](#credits)
    * [Credits](#credits)
    
    

    ## Links
    * Deployed ${answers.deployed}
    * repo ${answers.repo}`
}
module.exports = generateReadme;