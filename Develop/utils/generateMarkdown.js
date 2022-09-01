

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  var badge = license;
  if (license.includes("-")) {
    badge = license.replace("-","--");
  }
return `[![License](https://img.shields.io/badge/License-${badge}-blue?style=plastic.svg)](https://opensource.org/licenses/${license})`

}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}
   ${renderLicenseBadge(data.license)}
  
  ## Table of Contents
  * [Description](#description)
  * [Installation](#installation-instructions)
  * [Usage](#usage-information)
  * [Contributing](#contribution-guidelines)
  * [Tests](#tests-instructions)
  * [License](#license)
  * [Questions](#questions)
  
  ## Description
  ${data.description}
  ## Installation Instructions
  ${data.installation}
  ## Usage Information
  ${data.usageInformation}
  ## Contribution guidelines
  ${data.contributionGuidelines}
  ## Tests Instructions
  ${data.testInstructions}
  ## License
  Application is covered under [${data.license}](https://opensource.org/licenses/${data.license}) license.
  
  ## Questions
  
  If you have any questions feel free to contact me using the following sources: <br>
  GitHub: [${data.github}](https://github.com/${data.github}) <br>
  Email: [${data.email}](mailto:${data.email}) 

`;
}

module.exports = {
  generateMarkdown:generateMarkdown,  
  renderLicenseBadge:renderLicenseBadge
}

