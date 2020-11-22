describe("Browser actions", () => {
  it("should load books website", () => {
    cy.visit("https://books.toscrape.com/index.html");
    cy.url().should("include", "index.html");
  });

  it("should click on travel category", () => {
    cy.get("a").contains("Travel").click();
    cy.get("h1").contains("Travel");
  });

  it("should desplay correct number of books", () => {
    cy.get(".product_pod").its("length").should("eq", 11);
  });
});
