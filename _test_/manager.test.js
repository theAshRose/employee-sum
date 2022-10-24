const Manager = require("../employees/manager.js")


describe("Manager", ()=>{
    it("should create object with arguments of name, id, email and office number along with a string returning role",
    () => {
        const worker = new Manager("john", 1, "johndoe@gmail.com", "925(555)-5555");
        expect(worker.name).toEqual("john")
        expect(worker.id).toEqual(1)
        expect(worker.email).toEqual("johndoe@gmail.com")
        expect(worker.getOfficeNumber()).toEqual("925(555)-5555")
        expect(worker.getRole()).toEqual("Manager")
        expect(worker.getHTML()).toEqual(`
        <div class="col-3">
        <div class="card" style = "width: 18rem; margin-bottom: 15px;
        background-color: #01012b; color: #d1f7ff;  
        -webkit-box-shadow: 4px 4px 9px 3px rgba(255, 42, 141, 0.9); 
        box-shadow: 4px 4px 9px 3px rgba(255, 64, 175, 0.87);">
          <div  class="card-body">
            <h5 class="card-title">john</h5>
            <h6 class="card-text"><i class="fas fa-brain"></i>  Manager</h6>
          </div>
          <ul class="list-group list-group-flush" >
            <li class="list-group-item" style="background-color: #d1f7ff; color: #01012b;"><strong>ID: </strong>1</li>
            <li class="list-group-item" style="background-color: #d1f7ff; color: #01012b;"><strong>Email: </strong><a href="mailto: johndoe@gmail.com">johndoe@gmail.com<class="card-link">
                  </a></li>
            <li class="list-group-item" style="background-color: #d1f7ff; color: #01012b;"><strong>Office #</strong>925(555)-5555</li>
          </ul>
        </div>
      </div>
      `)
    });
})