const inquirer = require("inquirer")
// import inquirer from "require"
const getEmployeeData = require("./employees/employee.js")
const fs = require("fs")

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

const employeeAnswerArray = [];

function init(){
inquirer.prompt(managerQuestions).then(response =>{
    console.log(managerQuestions); console.log(response)
    const managerObj = new manager(response.name, response.id, 
        response.email, response.officeNumber, response.employeeChoice);
        if(managerObj[4] === "add engineer") {
            engineerPrompt = function(){
                inquirer.prompt(engineerQuestions).then(response => {

                })
                if (engineerQuestions.employeeChoice === "add engineer"){
                    employeeAnswerArray.push(engineerQuestions)
                    engineerPrompt();
                }
            }}

})}

init()




////prompts

// require folders and output to html
//make sure tests are able to be connected
// /// make employee parent class of all other calsses
// {
//     name: "egineerName",
//     message: "What is this engineer's name?",
//     type: "input"
// },
