const Engineer = require("../employees/engineer.js")


describe("Engineer", ()=>{
    it("should create object with arguments of name, id, email and github username along with a string returning role",
    () => {
        const worker = new Engineer("john", 1, "johndoe@gmail.com", "theDomConrad");
        expect(worker.name).toEqual("john")
        expect(worker.id).toEqual(1)
        expect(worker.email).toEqual("johndoe@gmail.com")
        expect(worker.getGitHub()).toEqual("theDomConrad")
        expect(worker.getRole()).toEqual("Engineer")
        expect(worker.getHTML()).toEqual(`
        <div class="col-3">
        <div class="card" style = "width: 18rem; margin-bottom: 15px;
        background-color: #01012b; color: #d1f7ff;  
        -webkit-box-shadow: 4px 4px 9px 3px rgba(255, 42, 141, 0.9); 
        box-shadow: 4px 4px 9px 3px rgba(255, 64, 175, 0.87);">
          <div class="card-body">
            <h5 class="card-title">john</h5>
            <h6 class="card-text"><i class="fas fa-laptop-code"></i>  Engineer</h6>
          </div>
          <ul class="list-group list-group-flush" style = "background-color: #d1f7ff; color: #01012b;">
            <li class="list-group-item" style="background-color: #d1f7ff; color: #01012b;"><strong>ID: </strong>1</li>
            <li class="list-group-item" style="background-color: #d1f7ff; color: #01012b;"><strong>Email: </strong><a href="mailto: johndoe@gmail.com">johndoe@gmail.com<class="card-link">
                  </a></li>
            <li class="list-group-item" style="background-color: #d1f7ff; color: #01012b;"><strong>GitHub:</strong><a href="https://github.com/theDomConrad" target = "_blank"> theDomConrad<class="card-link">
            </a></li>
          </ul>
        </div>
      </div>
      `)
    });
})