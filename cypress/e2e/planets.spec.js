describe("Planet Weight Calculator", () => {
  it("provides settings for ten options", () => {
    cy.visit("http://testerstories.com/files/xyzzy/planets.html")

    // Each of the assertions below is identical in terms of
    // effect; what differs is the expression.
    cy.get(".weight-output").its("length").should("eq", 10)

    cy.get(".weight-output").should("have.length", 10)

    cy.get(".weight-output").should((items) => {
      expect(items).to.have.length(10)
    })

    cy.get(".weight-output").then((items) => {
      expect(items.length).to.equal(10)
    })
  })

  it("indicates that a weight must be provided", () => {
    cy.visit("http://testerstories.com/files/xyzzy/planets.html")

    cy.get("#calculate").click()

    cy.get("#wt-error")
      .should("be.visible")
      .and("contain", "You must type a weight.")

    cy.get("#wt-error").then((error) => {
      expect(error).to.be.visible
      expect(error).to.have.text("You must type a weight.")
    })

    cy.get("#outputmrc").should("be.empty")
    cy.get("#outputmars").should("be.empty")
  })

  it("calculates weights for a given Earth weight", () => {
    cy.visit("http://testerstories.com/files/xyzzy/planets.html")

    cy.get("#wt").clear().type("200")
    cy.get("#calculate").click()
  })
})
