describe("Login Page", () => {
  it("Visit page", () => {
    cy.visit("http://localhost:3000");

    cy.get(".container.login")
      .should("be.visible")
      .within(() => {
        cy.get("form")
          .should("be.visible")
          .within(() => {
            cy.get("input").should("have.length", 2);
            cy.get("button#submit")
              .should("contain.text", "SUBMIT")
              .should("be.disabled");
          });
      });
  });

  it("Fill out form", () => {
    const userData = {
      name: "jamesbond",
      password: "007"
    }

    for (let key in userData) {
      cy.get(`input[name='${key}']`).type(userData[key]);
    }

    cy.get("button#submit").should("be.enabled");
  })

  it("Navigate", () => {
    cy.get("button#submit").click();

    cy.get(".container.login").should("not.exist");
    cy.get(".container.success").should("be.visible");
  })
});
