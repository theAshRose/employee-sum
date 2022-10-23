const inquirer = require("inquirer")
const fs = require("fs");
const Employees = require("./employees/employee.js")
const Manager = require("./employees/manager.js");
const Engineer = require("./employees/engineer.js");
const Intern = require("./employees/intern.js")

const managerQuestions = [{
    name: "name",
    message: "Enter your Manager's name",
    type: "input"
}, {
    name: "id",
    message: "Manager's employee ID?",
    type: "input"
}, {
    name: "email",
    message: "Manager's email address?",
    type: "input"
}, {
    name: "officeNumber",
    message: "Manager's office number?",
    type: "input"
}, {
    name: "employeeChoice",
    message: "who else is on board?",
    type: "list",
    choices: ["add engineer", "add intern", "skip both and finish building my team",]
},]

const engineerQuestions = [{
    name: "name",
    message: "Enter the engingeer's name",
    type: "input"
}, {
    name: "id",
    message: "Engineer's employee ID?",
    type: "input"
}, {
    name: "email",
    message: "Engineer's email address?",
    type: "input"
}, {
    name: "gitHub",
    message: "Egineer's GitHub user name?",
    type: "input"
}, {
    name: "employeeChoice",
    message: "who else is on board?",
    type: "list",
    choices: ["add engineer", "add intern", "skip both and finish building my team",]
},]

const internQuestions = [{
    name: "name",
    message: "Enter the intern's name",
    type: "input"
}, {
    name: "id",
    message: "Intern's employee ID?",
    type: "input"
}, {
    name: "email",
    message: "Intern's email address?",
    type: "input"
}, {
    name: "school",
    message: "Intern's school?",
    type: "input"
}, {
    name: "employeeChoice",
    message: "who else is on board?",
    type: "list",
    choices: ["add engineer", "add intern", "skip both and finish building my team",]
},]

const employeeAnswerArray = [];

function managerPrompt() {
    inquirer.prompt(managerQuestions).then(response => {
        const managerObj = new Manager(response.name, response.id,
            response.email, response.officeNumber, response.employeeChoice)
        employeeAnswerArray.push(managerObj)
        if (response.employeeChoice === "add engineer") {
            engineerPrompt();
        } else
        if (response.employeeChoice === "add intern") {
            internPrompt();
        }
        else { sealTheDeal() }
    })
}

function engineerPrompt() {
    inquirer.prompt(engineerQuestions).then(response => {
        const internObj = new Engineer(response.name, response.id,
            response.email, response.gitHub, response.employeeChoice);
        employeeAnswerArray.push(internObj)
        if (response.employeeChoice === "add engineer") {
            engineerPrompt();
        } else
        if (response.employeeChoice === "add intern") {
            internPrompt();
        }
        else { sealTheDeal() }
    })
}

// function engineerPrompt() {
//     inquirer.prompt(engineerQuestions).then(response => {
//         const engObj = new Engineer(response.name, response.id,
//             response.email, response.gitHub, response.employeeChoice);
//         employeeAnswerArray.push(engObj)
//         if (response.employeeChoice === "add engineer") {
//             engineerPrompt();
//         }
//         if (response.employeeChoice === "add intern") {
//             internPrompt();
//         }
//         else { sealTheDeal() }
//     })
// }

function internPrompt() {
    inquirer.prompt(internQuestions).then(response => {
        const internObj = new Intern(response.name, response.id,
            response.email, response.school, response.employeeChoice);
        employeeAnswerArray.push(internObj)
        if (response.employeeChoice === "add engineer") {
            engineerPrompt();
        } else
        if (response.employeeChoice === "add intern") {
            internPrompt();
        }
        else { sealTheDeal() }
    })
}

function sealTheDeal() {
    console.log(employeeAnswerArray)
    console.log("time to get busy")
}

function init() {
    managerPrompt()
}

init( 
)




////prompts

// require folders and output to html
//make sure tests are able to be connected
// /// make employee parent class of all other calsses
// {
//     name: "egineerName",
//     message: "What is this engineer's name?",
//     type: "input"
// },
