const Employee = require("../employees/employee.js")

class Manager extends Employee{
    constructor(name, id, email, officeNumber){
    super(name, id, email),
    this.officeNumber = officeNumber
    }
    getOfficeNumber = () => {
        return this.officeNumber;
    }
    getRole = () => {
        return "Manager";
    }
    getHTML = () => {
        return `
        <div class="col-3">
        <div class="card" style = "width: 18rem; margin-bottom: 15px;
        background-color: #01012b; color: #d1f7ff;  
        -webkit-box-shadow: 4px 4px 9px 3px rgba(255, 42, 141, 0.9); 
        box-shadow: 4px 4px 9px 3px rgba(255, 64, 175, 0.87);">
          <div  class="card-body">
            <h5 class="card-title">${this.name}</h5>
            <h6 class="card-text"><i class="fas fa-brain"></i>  Manager</h6>
          </div>
          <ul class="list-group list-group-flush" >
            <li class="list-group-item" style="background-color: #d1f7ff; color: #01012b;"><strong>ID: </strong>${this.id}</li>
            <li class="list-group-item" style="background-color: #d1f7ff; color: #01012b;"><strong>Email: </strong><a href="mailto: ${this.email}">${this.email}<class="card-link">
                  </a></li>
            <li class="list-group-item" style="background-color: #d1f7ff; color: #01012b;"><strong>Office #</strong>${this.officeNumber}</li>
          </ul>
        </div>
      </div>
      `
    }
}

module.exports = Manager;
