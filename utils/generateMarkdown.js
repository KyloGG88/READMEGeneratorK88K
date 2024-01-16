// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
    ## Description
    ${data.description}
    
    ## Table of Contents
    ${data.table}
    
    ## Installation
    ${data.installation}
    
    ## Usage
    ${data.usage}

    ## Credits
    ${data.credits}
    
    ## License
    ${data.license}
    
    ## Features
    ${data.features}

    ## Contributors
    ${data.contributors}

    ## Tests
    ${data.test}

    ## Get in Touch
    If you have any questions, [Contact Me](mailto:${data.contact}) or visit my [Github](https://github.com/${data.username})
`;
}

module.exports = generateMarkdown;
