describe("Stardate Calculator", () => {
  it("requires a stardate value in order to calculate", () => {
    cy.visit("http://testerstories.com/files/xyzzy/stardates.html")

    cy.get("#enableForm").check()
    cy.get("#convert").click()

    cy.get("#stardateValue-error").then((error) => {
      expect(error).to.be.visible
      expect(error).to.have.text(
        "Please supply a stardate or there is no point."
      )
    })
  })
})
