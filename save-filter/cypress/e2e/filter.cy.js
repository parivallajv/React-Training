/* eslint-disable no-undef */
// describe("Main Page Test", () => {
//   beforeEach(() => {
//     cy.visit("http://localhost:3000");
//   });

//   it("should display the home page content", () => {
//     cy.contains("Home Page").click();
//   });

//   it("should navigate to the protected page when the link is clicked", () => {
//     cy.contains("Filter Page").click();
//     cy.url().should("include", "/filterPage");
//   });

//   it("should display login button when logged out", () => {
//     cy.contains("Login").should("be.visible");
//   });

//   it("should display logout button and user status when logged in", () => {
//     cy.contains("Login").click();
//     cy.contains("You are logged in..").should("be.visible");
//     cy.contains("Logout").should("be.visible");
//   });

//   it("should log out when the logout button is clicked", () => {
//     cy.contains("Login").click();
//     cy.contains("Logout").click();
//     cy.contains("You are logged out..").should("be.visible");
//     cy.contains("Login").should("be.visible");
//   });

//   it("should display protected content when logged in", () => {
//     cy.contains("Login").click();
//   });

//   it("should redirect to login page when trying to access protected route while logged out", () => {
//     cy.visit("http://localhost:3000/filterPage");
//     cy.url().should("include", "/filterPage"); //
//   });

//   it("should allow access to protected route when logged in", () => {
//     cy.contains("Login").click();
//     cy.contains("Filter Page").click();
//   });
// });

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
    cy.visit("http://localhost:3000/filterPage");
  
    // Select Filter By Hierarchy option
    cy.get('div[aria-label="Filter By Hierarchy"]').click();
    cy.contains("Academy Mortgage").click();
  
    // Select Category option
    cy.get('div[aria-label="Category"]').click();
    cy.contains("HQ").click();
  
    // Select Profile option
    cy.get('div[aria-label="Profile"]').click();
    cy.contains("Unpublished").click();
  
    // Select Status option
    cy.get('div[aria-label="Status"]').click();
    cy.contains("Activated").click();
  });

  it("should toggle column visibility checkboxes", () => {
    cy.get('input[type="checkbox"]').eq(0).uncheck().should("not.be.checked");
    cy.get('input[type="checkbox"]').eq(1).check().should("be.checked");
  });

  it("should save filter and display it in the list", () => {
    const filterName = "Test Filter";
    cy.get('input[placeholder="Eg: Published Branches"]').type(filterName);
    cy.get('.anticon-plus-circle').click();

    cy.contains(filterName).should("be.visible");
  });

  it("should display error message when saving with incomplete filter conditions", () => {
    cy.get('input[placeholder="Eg: Published Branches"]').type(
      "Incomplete Filter"
    );
    cy.get('.anticon-plus-circle').click();
    cy.contains("Please select filter conditions").should("be.visible");
  });

});
