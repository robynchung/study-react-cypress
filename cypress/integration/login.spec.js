describe("working with inputs", () => {
  it("should load login page", () => {
    cy.visit("http://localhost:3000");
  });

  it("should fill first name", () => {
    cy.get("#firstName").clear();
    cy.get("#firstName").type("Aeri");
  });

  it("should fill last name", () => {
    cy.get("#lastName").clear();
    cy.get("#lastName").type("Jung");
  });

  it("can be clicked", () => {
    cy.get("#submit").click();
  });
});
