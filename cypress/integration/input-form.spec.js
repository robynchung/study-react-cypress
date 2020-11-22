describe("Browswer actions", () => {
  it("should load correct url", () => {
    cy.visit("http://localhost:3000");
  });

  it("should check correct url ", () => {
    cy.url().should("include", "localhost:3000");
  });

  it("should check for current element on the page", () => {
    cy.get("form").should("be.visible");
  });

  // it("should pause the excution", () => {
  //   cy.pause();
  // });

  it("should wait for 3 sec", () => {
    cy.wait(3000);
  });
});
