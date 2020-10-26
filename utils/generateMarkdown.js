function renderLicenseBadge(license) {
  if (license !== "None") {
    return `![GitHub license](https://img.shields.io/badge/license-${license}-blue.svg)`
  }
  return ''
}

function renderLicenseLink(license) {
  if (license !== "None") {
    return (
      `\n* [License](#license)\n`
    )
  }
  return ''
}

function renderLicenseSection(license) {
  if (license !== "None") {
    return (
      `## License

This project is licensed under the ${license} license.`
    )
  }
  return ''
}

function generateMarkdown(data) {
  return `# ${data.tittle}
${renderLicenseBadge(data.license)}

## Description

${data.projectDescription}

## Table of Contents 

* [Installation](#installation)

* [Instructions](#Instructions)

* [Example](#Example)

* [License](#License)

* [Contributors](#Contributors)

* [Tests](#Tests)

* [Languages](#Languages)





To install necessary dependencies, run the following command:

\`\`\`
${data.installation}
\`\`\`


## Instructions

${data.instructionExample} 

## License
${renderLicenseSection(data.license)}
  


## Contributing

${data.contributorsGitUserName}

## Tests

To run tests, run the following command:

\`\`\`
${data.test}
\`\`\`


## Languages 

${data.languages}

## Questions

If you have any questions about the repo, open an issue or contact me directly at ${data.email}. You can find more of my work at [${data.username}](https://github.com/${data.github}/).

`;
}

module.exports = generateMarkdown;
