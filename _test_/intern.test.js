const Intern = require("../employees/intern.js")


describe("Intern", ()=>{
    it("should create object with arguments of name, id, email and school number along with a string returning role",
    () => {
        const worker = new Intern("john", 1, "johndoe@gmail.com", "ASU");
        expect(worker.name).toEqual("john")
        expect(worker.id).toEqual(1)
        expect(worker.email).toEqual("johndoe@gmail.com")
        expect(worker.getSchool()).toEqual("ASU")
        expect(worker.getRole()).toEqual("Intern")
    });
})