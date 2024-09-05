
describe('E2E Tests of demoblaze.com', () => {

  const signUsername = ("Tesg" + Date.now());
  const signPassword = "Qwerty123";

  beforeEach(() => {
    cy.visit('https://www.demoblaze.com/');
  });

    it('As a user, purchase a monitor without authorization and registration', () => {
        cy.contains('#itemc', 'Monitors').click();
        cy.contains('.hrefch', 'Apple monitor 24').click();
        cy.contains('a.btn', 'Add to cart').click();
        cy.get('#cartur').click();
        cy.contains('.success', 'Apple monitor 24').should('be.visible');
        cy.contains('.btn.btn-success', 'Place Order').click();
        cy.get('#name').invoke('val', "Jimmy");
        cy.get('#country').invoke('val', "Canada");
        cy.get('#city').invoke('val', "Edmonton");
        cy.get('#card').invoke('val', "4111 1111 1111 1111");
        cy.get('#month').invoke('val', "09");
        cy.get('#year').invoke('val', "2024");
        cy.contains('.btn.btn-primary', 'Purchase').click();        
      });
    
    it('As a user, Purchase a laptop through registration', () => {
      cy.get('#signin2').click();
      cy.get('#sign-username').invoke('val', signUsername);
      cy.get('#sign-password').invoke('val', signPassword);
      cy.wait(2000);
      cy.contains('.btn.btn-primary', 'Sign up').click();
      cy.wait(2000);
      cy.contains('#itemc', 'Laptops').click();
      cy.contains('.hrefch', 'Sony vaio i5').click();
      cy.contains('a.btn', 'Add to cart').click();
      cy.get('#cartur').click();
      cy.contains('.success', 'Sony vaio i5').should('be.visible');
      cy.contains('.btn.btn-success', 'Place Order').click();
      cy.get('#name').invoke('val', "Jimmy");
      cy.get('#country').invoke('val', "Canada");
      cy.get('#city').invoke('val', "Edmonton");
      cy.get('#card').invoke('val', "4111 1111 1111 1111");
      cy.get('#month').invoke('val', "09");
      cy.get('#year').invoke('val', "2024");
      cy.contains('.btn.btn-primary', 'Purchase').click(); 
    });


    it('As a user, Purchase a phone through authorization', () => {
      cy.get('#login2').click();
      cy.get('#loginusername').invoke('val', signUsername);
      cy.get('#loginpassword').invoke('val', signPassword);
      cy.wait(2000);
      cy.contains('.btn.btn-primary', 'Log in').click();
      cy.wait(2000);
      cy.contains('.hrefch', 'Samsung galaxy s6').click();
      cy.contains('a.btn', 'Add to cart').click();
      cy.get('#cartur').click();
      cy.contains('.success', 'Samsung galaxy s6').should('be.visible');
      cy.contains('.btn.btn-success', 'Place Order').click();
      cy.get('#name').invoke('val', "Jimmy");
      cy.get('#country').invoke('val', "Canada");
      cy.get('#city').invoke('val', "Edmonton");
      cy.get('#card').invoke('val', "4111 1111 1111 1111");
      cy.get('#month').invoke('val', "09");
      cy.get('#year').invoke('val', "2024");
      cy.contains('.btn.btn-primary', 'Purchase').click();
    });
});