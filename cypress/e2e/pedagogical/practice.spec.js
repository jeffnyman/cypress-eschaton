describe("Pedagogical Practice", () => {
  it("navigates to a place to practice", () => {
    cy.visit("http://testerstories.com/files/xyzzy/practice.html")

    cy.url().should("include", "practice.html")
    cy.get("#site-image").should("be.visible")
    cy.get("#site-image")
      .invoke("attr", "src")
      .should("include", "practice.png")
  })
})
