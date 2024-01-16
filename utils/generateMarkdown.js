// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
    ## Description
    ${data.description}
    
    ## Table of Contents

    - [Usage](#usage)
    - [License](#license)

    ## Usage
    ${data.usage}

    ## Features
    ${data.features}

    ## Contributors
    ${data.contributors}

    ## Resources
    ${data.credits}
    

    ## License
    ${data.license}

    ## Tests
    ${data.test}

    ## Get in Touch
    If you have any questions, [Contact Me](mailto:${data.contact}) or visit my [Github](https://github.com/${data.username})
`;
}


module.exports = generateMarkdown;
