describe("Enter The Matrix Tests", () => {
    beforeEach(() => {
        cy.visit("http://localhost:3000")
    })

    const submitButton = () => cy.get('button')
    const inputName = () => cy.get("input[name=first_name]")
    const inputEmail = () => cy.get("input[type=email]")
    const inputPassword = () => cy.get("input[type=password]")
    const letsGo = () => cy.get("input[type=checkbox]")

    it('sanity check', () => {
        // inside of this block is called an assertion
        expect(1 + 1).to.equal(2)
        expect(1 + 1).not.to.equal(3)
        expect(7).to.equal(7)
        expect({}).not.to.equal({})
        expect({}).to.eql({})
    })

    describe("add people", () => {
        it("Add Neo and Trinity", () => {
            inputName().type("Neo")
            inputName().should("have.value", "Neo")
            inputEmail().type("theone@enterthematrix.com")
            inputPassword().type("there is no spoon")
            letsGo().click()
            submitButton().click()
            
            inputName().type("Trinity")
            inputEmail().type("trinity@enterthematrix.com")
            inputPassword().type("Now get up.")
            letsGo().click()
            submitButton().should("not.be.disabled")
            submitButton().click()
        })
        it("is an empty form", () => {
            inputName().type("Mr. Anderson")
            submitButton().should("be.disabled")
        })
    })
})