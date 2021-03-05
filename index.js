const inquirer = require('inquirer');
const fs = require("fs");

inquirer.prompt([
    {
        type: 'input',
        message: 'What is your name?',
        name: 'manager',
    },
    {
        type: 'input',
        message: 'What is the employee ID?',
        name: 'idnum',
    },
    {
        type: 'input',
        message: 'What is your e-mail address?',
        name: 'email',
    },
    {
        type: 'input',
        message: 'What is your office number?',
        name: 'office',
    },
])

    .then(answers => {
        console.log(answers);
        fs.appendFile("README.md", generateMarkdown(answers) + '\n', err =>
            err ? console.error(err) : console.log("Success! Response added to file."))
    });
