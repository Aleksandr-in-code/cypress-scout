// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

// signUp demoblaze.com
Cypress.Commands.add('signUp', (username, password) => {
    cy.intercept('POST', '/signup').as("signupUser");
    cy.get('#signin2').click();
    cy.get('#sign-username').invoke('val', username);
    cy.get('#sign-password').invoke('val', password);
    cy.contains('.btn.btn-primary', 'Sign up').click();
    cy.wait('@signupUser', { timeout: 10000 });
  });

// login demoblaze.com
  Cypress.Commands.add('login', (username, password) => {
    cy.intercept('POST', '/login').as("loginUser");
    cy.get('#login2').click();
    cy.get('#loginusername').invoke('val', username);
    cy.get('#loginpassword').invoke('val', password);
    cy.contains('.btn.btn-primary', 'Log in').click();
    cy.wait('@loginUser', { timeout: 10000 });  
  });

  //Fill orderForm
  Cypress.Commands.add('fillOrderForm', () => {
    cy.get('#name').invoke('val', "Jimmy");
    cy.get('#country').invoke('val', "Canada");
    cy.get('#city').invoke('val', "Edmonton");
    cy.get('#card').invoke('val', "4111 1111 1111 1111");
    cy.get('#month').invoke('val', "09");
    cy.get('#year').invoke('val', "2026");
  });

  //add Product To Cart
  Cypress.Commands.add('addToCart', (itemName) => {
    cy.intercept('POST', '/addtocart').as('addtocart');
    cy.contains('.hrefch', itemName).click();
    cy.contains('a.btn', 'Add to cart').click();
    cy.wait('@addtocart');
  });

  //open Cart
  Cypress.Commands.add('openCart', () => {
    cy.intercept('POST', '/viewcart').as('viewcart'); 
    cy.get('#cartur').click();
    cy.wait('@viewcart');
  });