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
    });
})