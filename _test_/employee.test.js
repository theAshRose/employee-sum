const Employee = require("../employees/employee.js")


describe("Employee", ()=>{
    it("should create object with arguments of name, id and email with a string returning a role",
    () => {
        const worker = new Employee("john", 1, "johndoe@gmail.com");
        expect(worker.name).toEqual("john")
        expect(worker.id).toEqual(1)
        expect(worker.email).toEqual("johndoe@gmail.com")
        expect(worker.getRole()).toEqual("Employee")
    });
})