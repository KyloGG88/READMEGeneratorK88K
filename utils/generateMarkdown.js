// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
    
    ## Description
    Provide a short description explaining the what, why, and how of your project. Use the following questions as a guide:

    - What was your motivation?
    - Why did you build this project?
    - What problem does it solve?
    - What did you learn?
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
    "Provide a step-by-step description of how to get the development environment running."
    ${data.installation}
    
    ## Usage
    ${data.usage}

    "To add a screenshot, create an 'assets / images' folder in your repository and upload your screenshot to it. Then, using the relative filepath, add it to your README using the following syntax:
    
    ![alt text](assets/images/screenshot.png)"

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
