const inquirer = require("inquirer")
const fs = require("fs");
const getHTML = require("./utils/writeHTML")
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

const finalHTMLarray = [];
const employeeAnswerArray = [];

function sealTheDeal(html, data) {
    console.log(employeeAnswerArray)
    fs.writeFile(html, data, (event) => {console.log("complete.")})
    
}

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
        else { sealTheDeal("index.html", getHTML(employeeAnswerArray)) }
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
        else { sealTheDeal("index.html", getHTML(employeeAnswerArray)) }
    })
}

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
        else { sealTheDeal("index.html", getHTML(employeeAnswerArray)) }
    })
}

function init() {
    managerPrompt()
}

init()