describe("styling", () => {
  it("should include a stylesheet via <link>", () => {
    cy.visit("/");

    cy.get('link[rel="stylesheet"]').should("exist");
  });

  it("should not include inline styles", () => {
    cy.visit("/");

    cy.get("[style]").should("not.exist");
  });

  it("should use smooth scrolling", () => {
    cy.visit("/");

    cy.get("html, body").should("have.css", "scroll-behavior", "smooth");
  });
});
