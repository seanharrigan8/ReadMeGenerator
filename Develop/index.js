// required packes
const inquirer = require('inquirer');
const fs = require('fs');
const { error } = require('console');
const path = require('path');

// array of questions
const questions = [
    { type: 'input', name: 'title', message: 'What is the title of your project?' },
    { type: 'input', name: 'description', message: 'Please provide a description of your project.' },
    { type: 'input', name: 'installation', message: 'Please provide installation instructions for your project.' },
    { type: 'input', name: 'usage', message: 'Please provide usage information for your project.' },
    { type: 'input', name: 'contribution', message: 'Please provide contribution guidelines for your project.' },
    { type: 'input', name: 'test', message: 'Please provide test instructions for your project.' },
    { type: 'list', name: 'license', message: 'Please select a license for your project.', choices: ['MIT', 'GNU GPLv3', 'Apache License 2.0', 'ISC License', 'None'] },
    { type: 'input', name: 'github', message: 'Please provide your GitHub username.' },
    { type: 'input', name: 'email', message: 'Please provide your email address.' },
{ type: 'input', name: 'image', message: 'Please provide the URL of your project image.' },
{ type: 'input', name: 'video', message: 'Provide the link to a video walkthrough (if applicable).' },
];


// function to write README file
function writeToFile(fileName, data) {
    const directory = './examples';

    // Create the directory if it does not exist
    fs.mkdirSync(directory, { recursive: true });

    fs.writeFile(fileName, data, (err) => {
        if (err) throw err;
        console.log('The file has been saved!');
    });
}

// function to initialize program
function init() {
    inquirer.prompt(questions)
    .then((answers) => {
        const readmeContent = generateReadme(answers);
        writeToFile('README.md', readmeContent);
    })
    .catch(error => {
        console.log(error);
    });
}

// function to generate markdown for README


function generateReadme(answers) {
    return `
# ${answers.title}

![Project Image](${answers.image})

## Description

${answers.description}

## Table of Contents

* [Installation](#installation)
* [Usage](#usage)
* [Contribution](#contribution)
* [Test](#test)
* [License](#license)
* [Questions](#questions)

## Installation

${answers.installation}

## Usage

${answers.usage}

## Video Walkthrough

[Watch the video walkthrough here](${answers.video})

## Contribution

${answers.contribution}

## Test

${answers.test}

## License
This project is covered under the ${answers.license} license.

## Questions
For any questions, please contact me at ${answers.email} or visit my GitHub page at [${answers.github}](https://github.com/${answers.github}).
or email me at ${answers.email}.
`;
}


init();





