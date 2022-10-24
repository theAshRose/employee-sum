const Employee = require("../employees/employee.js")

class Engineer extends Employee{
    constructor(name, id, email, gitHub){
    super(name, id, email),
    this.gitHub = gitHub
    }
    getGitHub = () => {
        return this.gitHub;
    }
    getRole = () => {
        return "Engineer";
    }
    getHTML = () => {
        return `
        <div class="col-3">
        <div class="card" style = "width: 18rem; margin-bottom: 15px;
        background-color: #01012b; color: #d1f7ff;  
        -webkit-box-shadow: 4px 4px 9px 3px rgba(255, 42, 141, 0.9); 
        box-shadow: 4px 4px 9px 3px rgba(255, 64, 175, 0.87);">
          <div class="card-body">
            <h5 class="card-title">${this.name}</h5>
            <h6 class="card-text"><i class="fas fa-laptop-code"></i>  Engineer</h6>
          </div>
          <ul class="list-group list-group-flush" style = "background-color: #d1f7ff; color: #01012b;">
            <li class="list-group-item" style="background-color: #d1f7ff; color: #01012b;"><strong>ID: </strong>${this.id}</li>
            <li class="list-group-item" style="background-color: #d1f7ff; color: #01012b;"><strong>Email: </strong><a href="mailto: ${this.email}">${this.email}<class="card-link">
                  </a></li>
            <li class="list-group-item" style="background-color: #d1f7ff; color: #01012b;"><strong>GitHub:</strong><a href="https://github.com/${this.gitHub}" target = "_blank"> ${this.gitHub}<class="card-link">
            </a></li>
          </ul>
        </div>
      </div>
      `
    }
}

module.exports = Engineer;
