describe("Fixture test", () => {
  it("should load login page", () => {
    cy.visit("http://localhost:3000");
  });

  it("should test with fixture", () => {
    cy.fixture("user").then(user => {
      const firstName = user.firstName;
      const lastName = user.lastName;

      cy.get("#firstName").clear().type(firstName);
      cy.get("#lastName").clear().type(lastName);

      cy.get("#submit").click().should("be.visible").and("contain", "form submitted");
    });
  });
});
