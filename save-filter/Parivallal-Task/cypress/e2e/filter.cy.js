/* eslint-disable cypress/unsafe-to-chain-command */
/* eslint-disable no-undef */
describe("Main Page Test", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/");
  });
  it("should display the home page content", () => {
    cy.get(".mailId").type("parivallal@gmail.com");
    cy.get("#pass").type("vallal");
    cy.get(".loginBtn").click();
    cy.contains("You are logged in..").should("be.visible");

    cy.get(".filter-page-link").click();
    cy.wait(2000);

    cy.get("h4").contains("Filter Hierarchy");
    cy.get("p").contains("Search");
    cy.get("p").contains("Filter By Hierarchy");
    cy.get("p").contains("Category");
    cy.get("p").contains("Profile");
    cy.get("p").contains("Status");
    cy.get("p").contains("Columns");
    cy.get("h4").contains("Save Filter");

    const searchText = "Cypress Testing";
    cy.get("input[placeholder='Search']").type(searchText);
    cy.get("input[placeholder='Search']").should("have.value", searchText);
    cy.wait(1000);

    cy.get(".selectItem1").click();
    cy.contains(".ant-select-item-option", "Academy Mortgage").click();
    cy.wait(1000);

    cy.get(".selectItem2").click();
    cy.contains(".ant-select-item-option", "HQ").click();
    cy.wait(1000);

    cy.get(".selectItem3").click();
    cy.contains(".ant-select-item-option", "Unpublished").click();

    cy.get(".selectItem4").click();
    cy.contains(".ant-select-item-option", "Deactivated").click();

    cy.get("input[type='checkbox']").eq(0).check();
    cy.get("input[type='checkbox']").eq(0).should("be.checked");

    cy.get("input[type='checkbox']").eq(1).check();
    cy.get("input[type='checkbox']").eq(1).should("be.checked");

    cy.get("input[type='checkbox']").eq(3).check();
    cy.get("input[type='checkbox']").eq(3).should("be.checked");

    cy.get("input[type='checkbox']").eq(5).check();
    cy.get("input[type='checkbox']").eq(5).should("be.checked");

    cy.get(".saveButton").click();
    cy.contains("Please enter a filter name").should("be.visible");

    cy.get("input[placeholder='Eg: Published Branches']").type("My Filter");
    cy.get(".saveButton").click();

    cy.get("ul").contains("My Filter").click();

    cy.get(".clearBtn").click();

    cy.contains("Logout").click();
    cy.contains("You are logged out..").should("be.visible");
    cy.contains("Login").should("be.visible");
  });
});
