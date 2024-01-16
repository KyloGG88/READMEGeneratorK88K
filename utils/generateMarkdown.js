// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
    ## Description
    ${data.description}
    
    ## Table of Contents

    - [Installation](#installation)
    - [Usage](#usage)
    - [Features](#features)
    - [Contributors](#contributors)
    - [License](#license)
    - [Test](#test)
    - [Contact](#contact)

    ## Installation
    ${data.installation}

    ## Usage
    ${data.usage}

    ![alt text](assets/images/screenshot.png)

    ## Features
    ${data.features}

    ## Contributors
    ${data.contributors}

    ## License
    ${data.license}

    ## Tests
    ${data.test}

    ## Contact
    ###Get in Touch
    If you have any questions, [Contact Me](mailto:${data.contact}) or visit my [Github](https://github.com/${data.username})
`;
}


module.exports = generateMarkdown;
