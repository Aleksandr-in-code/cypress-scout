// Cypress._.times(20, () => {
describe('E2E Tests of demoblaze.com', () => {

const signUsername = ("Tesg" + Date.now());
const signPassword = "Qwerty123";

    it('As a user, purchase a monitor without authorization and registration', () => {
        cy.visit('https://www.demoblaze.com');
        cy.get('[onclick="byCat(\'monitor\')"]').click();
        cy.get(':nth-child(1) > .card > .card-block > .card-title > .hrefch').click();
        cy.get('.col-sm-12 > .btn').click();
        cy.get('#cartur').click();
        cy.get('.col-lg-1 > .btn').click();
        cy.get('#name').invoke('val', "Jimmy");
        cy.get('#country').invoke('val', "Canada");
        cy.get('#city').invoke('val', "Edmonton");
        cy.get('#card').invoke('val', "4111 1111 1111 1111");
        cy.get('#month').invoke('val', "09");
        cy.get('#year').invoke('val', "2024");
        cy.get('#orderModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click();
        cy.wait(2000);
    });
  
    it('As a user, Purchase a laptop through registration', () => {
      cy.visit('https://www.demoblaze.com');
      cy.get('#signin2').click();
      cy.get('#sign-username').invoke('val', signUsername);
      cy.get('#sign-password').invoke('val', signPassword);
      cy.wait(2000);
      cy.get('#signInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click();
      cy.get('[onclick="byCat(\'notebook\')"]').click();
      cy.get(':nth-child(1) > .card > .card-block > .card-title > .hrefch').click();
      cy.get('.col-sm-12 > .btn').click();
      cy.get('#cartur').click();
      cy.get('.col-lg-1 > .btn').click();
      cy.get('#name').invoke('val', "Jimmy");
      cy.get('#country').invoke('val', "Canada");
      cy.get('#city').invoke('val', "Edmonton");
      cy.get('#card').invoke('val', "4111 1111 1111 1111");
      cy.get('#month').invoke('val', "09");
      cy.get('#year').invoke('val', "2024");
      cy.get('#orderModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click();
    });

    it('As a user, Purchase a phone through authorization', () => {
      cy.visit('https://www.demoblaze.com');
      cy.get('#login2').click();
      cy.get('#loginusername').invoke('val', signUsername);
      cy.get('#loginpassword').invoke('val', signPassword);
      cy.wait(2000);
      cy.get('#logInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click();
      cy.get(':nth-child(1) > .card > .card-block > .card-title > .hrefch').click();
      cy.get('.col-sm-12 > .btn').click();
      cy.get('#cartur').click();
      cy.get('.col-lg-1 > .btn').click();
      cy.get('#name').invoke('val', "Jimmy");
      cy.get('#country').invoke('val', "Canada");
      cy.get('#city').invoke('val', "Edmonton");
      cy.get('#card').invoke('val', "4111 1111 1111 1111");
      cy.get('#month').invoke('val', "09");
      cy.get('#year').invoke('val', "2024");
      cy.get('#orderModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click();
    });
  });
// });