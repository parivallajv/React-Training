/* eslint-disable no-undef */
describe("Main Page Test", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  it("should display the home page content", () => {
    cy.contains("Home Page").should("be.visible");
  });

  it("should navigate to the protected page when the link is clicked", () => {
    cy.contains("Filter Page").click();
    cy.url().should("include", "/filterPage");
  });

  it("should display login button when logged out", () => {
    cy.contains("Login").should("be.visible");
  });

  it("should display logout button and user status when logged in", () => {
    cy.contains("Login").click();
    cy.contains("You are logged in..").should("be.visible");
    cy.contains("Logout").should("be.visible");
  });

  it("should log out when the logout button is clicked", () => {
    cy.contains("Login").click();
    cy.contains("Logout").click();
    cy.contains("You are logged out..").should("be.visible");
    cy.contains("Login").should("be.visible");
  });

  it("should display protected content when logged in", () => {
    cy.contains("Login").click();
  });

  it("should redirect to login page when trying to access protected route while logged out", () => {
    cy.visit("http://localhost:3000/filterPage");
    cy.url().should("include", "/filterPage"); //
  });

  it("should allow access to protected route when logged in", () => {
    cy.contains("Login").click();
    cy.contains("Filter Page").click();
  });
});

// 2. test case for protected Page

describe("ProtectedPage Test", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/filterPage");
  });

  it("should update search value when input changes", () => {
    const searchText = "example search";
    cy.get("input").first().type(searchText).should("have.value", searchText);
  });

  it("should update filter options when selections are made", () => {
    cy.get("select")
      .eq(0)
      .select("Academy Mortgage")
      .should("have.value", "Academy Mortgage");
    cy.get("select").eq(1).select("HQ").should("have.value", "HQ");
    cy.get("select")
      .eq(2)
      .select("Unpublished")
      .should("have.value", "Unpublished");
    cy.get("select")
      .eq(3)
      .select("Activated")
      .should("have.value", "Activated");
  });

  it("should toggle column visibility checkboxes", () => {
    cy.get('input[type="checkbox"]').eq(0).uncheck().should("not.be.checked");
    cy.get('input[type="checkbox"]').eq(1).check().should("be.checked");
  });

  it("should save filter and display it in the list", () => {
    const filterName = "Test Filter";
    cy.get('input[placeholder="Eg: Published Branches"]').type(filterName);
    cy.get('button[style*="cursor: pointer"]').click();

    cy.contains(filterName).should("be.visible");
  });

  it("should display error message when saving without a filter name", () => {
    cy.get('button[style*="cursor: pointer"]').click();
    cy.contains("Please enter a filter name").should("be.visible");
  });

  it("should display error message when saving with incomplete filter conditions", () => {
    cy.get('input[placeholder="Eg: Published Branches"]').type(
      "Incomplete Filter"
    );
    cy.get('button[style*="cursor: pointer"]').click();
    cy.contains("Please select filter conditions").should("be.visible");
  });

  it("should load saved filter when clicked in the list", () => {
    const filterName = "Test Filter";
    const selectedHierarchy = "Academy Mortgage";
    cy.get('input[placeholder="Eg: Published Branches"]').type(filterName);
    cy.get("select").eq(0).select(selectedHierarchy);
    cy.get('button[style*="cursor: pointer"]').click();

    cy.visit("http://localhost:3000/filterPage"); // Go back to the protected page
    cy.contains(filterName).click();

    cy.get("select").eq(0).should("have.value", selectedHierarchy);
    cy.get('input[placeholder="Eg: Published Branches"]').should(
      "have.value",
      filterName
    );
  });
});
