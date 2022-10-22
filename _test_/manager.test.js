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
    });
})