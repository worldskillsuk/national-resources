describe("generic", () => {
  it("title matches", () => {
    cy.visit("/");
    cy.title().should("eq", "WorldSkills UK Web Development 2024");
  });

  it("should include 32x32 favicon", () => {
    cy.visit("/");

    cy.get('link[rel="icon"][sizes="32x32"]').should("exist");
  });

  it("should include 16x16 favicon", () => {
    cy.visit("/");

    cy.get('link[rel="icon"][sizes="16x16"]').should("exist");
  });
});
