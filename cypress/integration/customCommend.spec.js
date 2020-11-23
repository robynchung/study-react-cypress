describe("should test with custom commend", () => {
  it("should load fixture and test with command", () => {
    cy.visit("http://localhost:3000");

    cy.fixture("user").then(user => {
      const firstName = user.firstName;
      const lastName = user.lastName;

      cy.login({ firstName, lastName });
    });
  });
});
