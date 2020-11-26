describe("working with inputs", () => {
  it("should load login page", () => {
    cy.visit("http://localhost:3000");
  });

  it("should fill first name", () => {
    cy.get("#firstName").as("firstName");
    cy.get("@firstName").clear();
    cy.get("@firstName").type("Aeri");
  });

  it("should fill last name", () => {
    cy.get("#lastName").clear();
    cy.get("#lastName").type("Jung");
  });

  it("should mark checkbox", () => {
    cy.get("#checkbox").click();
  });

  it("can be clicked", () => {
    cy.get("#submit").click().should("be.visible").and("contain", "form submitted");
  });
});
