# READMEGeneratorK88K

# Module 11 Challenge: Professional README Generator

## Table of Contents

- [Your Task](#your-task)
- [User Story](#user-story)
- [Acceptance Criteria](#acceptance-criteria)
- [Usage](#usage)
- [Features](#features)
- [Getting Started](#getting-started)
- [Walkthrough Video](#walkthrough-video)
- [Resources](#resoures)
- [Links](#links)
- [License](#license)

## Your Task

When creating an open source project on GitHub, it’s important to have a high-quality README for the app. This should include what the app is for, how to use the app, how to install it, how to report issues, and how to make contributions—this last part increases the likelihood that other developers will contribute to the success of the project. 

You can quickly and easily create a README file by using a command-line application to generate one. This allows the project creator to devote more time to working on the project.

Your task is to create a command-line application that dynamically generates a professional README.md file from a user's input using the [Inquirer package](https://www.npmjs.com/package/inquirer). Review the [Good README Guide](../../01-HTML-Git-CSS/04-Important/Good-README-Guide/README.md) as a reminder of everything that a high-quality, professional README should contain. 

The application will be invoked by using the following command:

```bash
node index.js
```

## User Story

* As a developer, I want a README generator so that I can quickly create a professional README for a new project

## Acceptance Criteria

* Create a command-line application that accepts user input.
  * When a user is prompted for information about the application repository then a high-quality, professional README.md is generated with:
    * The title of my project 
    * Sections entitled:
      * Description 
      * Table of Contents 
      * Installation 
      * Usage 
      * License 
      * Contributing 
      * Tests 
      * Questions
    * When a user enters the project title then it is displayed as the title of the README
    * When a user enters a description, installation instructions, usage information, contribution guidelines, and test instructions then this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests
    * When a user chooses a license for their application from a list of options then a badge for that license is added near the top of the README and a notice is added to the section of the README entitled **License** that explains which license the application is covered under
    * When a user enters their GitHub username then this is added to the section of the README entitled Questions, with a link to their GitHub profile
    * When a user enters their email address then this is added to the section of the README entitled Questions, with instructions on how to reach them with additional questions
    * When a user clicks on the links in the **Table of Contents** then they are taken to the corresponding section of the README

## Getting Started

Here are some guidelines to help you get started:

* Create a `.gitignore` file and include `node_modules/` and `.DS_Store/` so that your `node_modules` directory isn't tracked or uploaded to GitHub. Be sure to create your `.gitignore` file before installing any npm dependencies.

* Make sure that your repo includes a `package.json` with the required dependencies. You can create one by running `npm init` when you first set up the project, before installing any dependencies.



### Walkthrough Video

* A walkthrough video that demonstrates the functionality of the README generator must be submitted, and a link to the video should be included in your README file.

* The walkthrough video must demonstrate how a user would invoke the application from the command line.

* The walkthrough video must demonstrate how a user would enter responses to all of the prompts in the application.

* The walkthrough video must demonstrate a generated README that matches the user input and has a functioning table of contents.

## Resources

***Node.js***
*     https://nodejs.org/docs/latest/api/
***Tutorial.MD***
*     https://agea.github.io/tutorial.md/
***Github Docs***
*     https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax
***Coding-Boot-Camp***
*     https://coding-boot-camp.github.io/full-stack/github/professional-readme-guide
***jQuery***
*     https://api.jquery.com/jQuery.get/

## Links

GitHub link: [](https://github.com/KyloGG88/READMEGeneratorK88K)

## License

Public - MIT License