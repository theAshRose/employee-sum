const inquirer = require("inquirer")
const fs = require("fs");
const getHTML = require("./utils/writeHTML")
const Manager = require("./employees/manager.js");
const Engineer = require("./employees/engineer.js");
const Intern = require("./employees/intern.js")
//above are imported methods, nodes and constructors necessary for our app to function.

//below are our arrays for prompts divided by employee type. 
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

//here we have our empty array which we push results of user data into
const employeeAnswerArray = [];

//this is our final function for our index.js which we call with the argument of the above array to write the HTML
function sealTheDeal(html, data) {
    fs.writeFile(html, data, (event) => {console.log("Great! Now just open 'index.html' in your browser to get the result. Enjoy! :)")})
    
}

//this is the first prompt to open. we use our object constructor and push results into empty array, use if statement to determine user choice and our app's next move. 
//if the user decides not to select manager or employee our write function is executed. it is the same for engineer and intern arrays as wel.
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
//without our init function the prompt doesnt fire properly. I tried removing it -  the program breaks totally. I need to look into this. 
init()

module.exports = init, internPrompt, engineerPrompt, managerPrompt, sealTheDeal;
//we are exporting data here for testing purposes, some exports arent utilized but i left them anyway. 