# Team info generator:

## Description

Here we have a wonderful, wonderful managerial tool. [Here is a link to the application](https://thedomconrad.github.io/employee-sum/)
A user may use their console to generate a profile of their proffesional team through user promts! With this application one may save an individuals name, ID and email along with a unique detail related to their role in the company. Engineers get their github recorded, the manager their office number - and interns have their place of education listed. 

## How to use

Run our "index.js" in your own command line - as shown in this [video](https://youtu.be/4SS6CuwzoAM). Answer the questions and before you will be a proffesional website with details about your team! Make sure you have inquirer installed by typing "npm install inquirer" into your command prompt. When/if that is done just type "node index.js" and answer the questions prompted into your console!

## Screenshot of app result

![screenshot](https://media.discordapp.net/attachments/408481106040717322/1034655242308046938/unknown.png?width=1228&height=568)

## the Code!
Here we are showcasing the function which writes our index.html into existence. Specifically, we are calling on our object constructors and their methods to write the HTML. I doubt many others embedded the HTML directly from the object constructors themselves!


```
           data.forEach(function (unit) {
    if (unit.getRole() === "Manager") {
      concatHTML += unit.getHTML();
    }
    if (unit.getRole() === "Engineer") {
      concatHTML += unit.getHTML();
    }
    if (unit.getRole() === "Intern") {
      concatHTML += unit.getHTML();
    }
  })
  concatHTML += `<footer style="min-height:200px;">
  </footer>`
  return concatHTML;
```

## Author Links
[Linkedin](https://www.linkedin.com/in/dominic-conradson-76638b172/)---
[GitHub](https://github.com/theDomConrad/)---
[Portfolio](https://thedomconrad.github.io/Dominic-Conradson-Portfolio/)---