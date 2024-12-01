describe("sections", () => {
  it("should have #top-header", () => {
    cy.visit("/");
    cy.get("#top-header").should("exist");
  });

  it("should have #hero", () => {
    cy.visit("/");
    cy.get("#hero").should("exist");
  });

  it("should have #about", () => {
    cy.visit("/");
    cy.get("#about").should("exist");
  });

  it("should have #benefits", () => {
    cy.visit("/");
    cy.get("#benefits").should("exist");
  });

  it("should have #insights", () => {
    cy.visit("/");
    cy.get("#insights").should("exist");
  });

  it("should have #contact", () => {
    cy.visit("/");
    cy.get("#contact").should("exist");
  });

  it("should have #footer", () => {
    cy.visit("/");
    cy.get("#footer").should("exist");
  });

  it("should have #scroll-to-top", () => {
    cy.visit("/");
    cy.get("#scroll-to-top").should("exist");
  });

  it("should have #register-modal", () => {
    cy.visit("/");
    cy.get("#register-modal").should("exist");
  });
});
