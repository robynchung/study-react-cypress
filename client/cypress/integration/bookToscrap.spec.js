describe("Browser actions", () => {
  it("should load books website", () => {
    cy.visit("https://books.toscrape.com/index.html");
    cy.url().should("include", "index.html");
    cy.log("before reload----");
    cy.reload();
    cy.log("after reload----");
  });

  it("should click on travel category", () => {
    cy.get("a").contains("Travel").click();
    cy.get("h1").contains("Travel");
  });

  it("should desplay correct number of books", () => {
    cy.get(".product_pod").its("length").should("eq", 11);
  });
});

describe("Browser actions2", () => {
  it("should have price", () => {
    cy.visit("https://books.toscrape.com/catalogue/its-only-the-himalayas_981/index.html");
    cy.get(".price_color").contains("45.17");
  });
});
