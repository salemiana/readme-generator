// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  const badges = {
    Perl: `[![License: Artistic-2.0](https://img.shields.io/badge/License-Perl-0298c3.svg)]`,
    GNU_GPLv3: `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)]`,
    Eclipse: `[![License](https://img.shields.io/badge/License-EPL%201.0-red.svg)]`,
    Mozilla: `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)]`,
    MIT: `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]`,
    Apache: `[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)]`,
    Boost: `[![License](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)]`,
  };
  return badges(license);
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  const licenseLinks = {
    Perl: `[![License: Artistic-2.0](https://img.shields.io/badge/License-Perl-0298c3.svg)]`,
    GNU_GPLv3: `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)]`,
    Eclipse: `[![License](https://img.shields.io/badge/License-EPL%201.0-red.svg)]`,
    Mozilla: `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)]`,
    MIT: `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]`,
    Apache: `[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)]`,
    Boost: `[![License](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)]`,
  };
  return licenseLinks(license);
}

// A function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license) {
    return $(this, renderLicenseLink(license));
  } else {
    return "";
  }
}

// A function to generate markdown for README
function generateMarkdown(answers) {
  return `# ${answers.title}
  ## license 
  ${renderLicenseBadge(license)}
`;
}

module.exports = generateMarkdown;
