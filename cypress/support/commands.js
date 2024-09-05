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
    cy.wait('@signupUser');
  });

// login demoblaze.com
  Cypress.Commands.add('login', (username, password) => {
    cy.intercept('POST', '/login').as("loginUser");
    cy.get('#login2').click();
    cy.get('#loginusername').invoke('val', username);
    cy.get('#loginpassword').invoke('val', password);
    cy.contains('.btn.btn-primary', 'Log in').click();
    cy.wait('@loginUser');
  });