describe('E2E Tests of demoblaze.com', () => {

const signUsername = ("LeonideTest" + Date.now());
const signPassword = "Qwerty123";

    it('As a user, purchase a monitor without authorization and registration', () => {
        cy.visit('https://www.demoblaze.com');
        cy.get('[onclick="byCat(\'monitor\')"]').click();
        cy.get(':nth-child(1) > .card > .card-block > .card-title > .hrefch').click();
        cy.get('.col-sm-12 > .btn').click();
        cy.get('#cartur').click();
        cy.get('.col-lg-1 > .btn').click();
        cy.get('#name').type("Jimmy");
        cy.get('#country').type("Canada");
        cy.get('#city').type("Edmonton");
        cy.get('#card').type("4111 1111 1111 1111");
        cy.get('#month').type("09");
        cy.get('#year').type("2024");
        cy.get('#orderModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click();
    });
  
    it('As a user, Purchase a laptop through registration', () => {
      cy.visit('https://www.demoblaze.com');
      cy.get('#signin2').click();
      cy.get('#sign-username').type(signUsername);
      cy.get('#sign-password').type(signPassword);
      cy.get('#signInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click();
      cy.get('[onclick="byCat(\'notebook\')"]').click();
      cy.get(':nth-child(1) > .card > .card-block > .card-title > .hrefch').click();
      cy.get('.col-sm-12 > .btn').click();
      cy.get('#cartur').click();
      cy.get('.col-lg-1 > .btn').click();
      cy.get('#name').type("Jimmy");
      cy.get('#country').type("Canada");
      cy.get('#city').type("Edmonton");
      cy.get('#card').type("4111 1111 1111 1111");
      cy.get('#month').type("09");
      cy.get('#year').type("2024");
      cy.get('#orderModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click();
    });

    it('As a user, Purchase a laptop through authorization', () => {
      cy.visit('https://www.demoblaze.com');
      cy.get('#login2').click();
      cy.get('#loginusername').type(signUsername);
      cy.get('#loginpassword').type(signPassword);
      cy.get('#logInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click();
      cy.get(':nth-child(1) > .card > .card-block > .card-title > .hrefch').click();
      cy.get('.col-sm-12 > .btn').click();
      cy.get('#cartur').click();
      cy.get('.col-lg-1 > .btn').click();
      cy.get('#name').type("Jimmy");
      cy.get('#country').type("Canada");
      cy.get('#city').type("Edmonton");
      cy.get('#card').type("4111 1111 1111 1111");
      cy.get('#month').type("09");
      cy.get('#year').type("2024");
      cy.get('#orderModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click();
    });
  });