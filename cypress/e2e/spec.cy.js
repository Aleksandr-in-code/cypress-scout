
describe('E2E Tests of demoblaze.com', () => {

const signUsername = ("Tesg" + Date.now());
const signPassword = "Qwerty123";

    it('As a user, purchase a monitor without authorization and registration', () => {
        cy.visit('https://www.demoblaze.com');
        cy.contains('Monitors').click();
        cy.contains('Apple monitor 24').click();
        cy.get('[onclick="addToCart(10)"]').click();
        cy.get('#cartur').click();
        cy.contains('Apple monitor 24').should('be.visible');
        cy.contains('Place Order').click();
        cy.get('#name').invoke('val', "Jimmy");
        cy.get('#country').invoke('val', "Canada");
        cy.get('#city').invoke('val', "Edmonton");
        cy.get('#card').invoke('val', "4111 1111 1111 1111");
        cy.get('#month').invoke('val', "09");
        cy.get('#year').invoke('val', "2024");
        cy.contains('Purchase').click();        
      });
    
    it('As a user, Purchase a laptop through registration', () => {
      cy.visit('https://www.demoblaze.com');
      cy.get('#signin2').click();
      cy.get('#sign-username').invoke('val', signUsername);
      cy.get('#sign-password').invoke('val', signPassword);
      cy.wait(2000);
      cy.get('[onclick="register()"]').click();
      cy.wait(2000);
      cy.contains('Laptops').click();
      cy.contains('Sony vaio i5').click();
      cy.get('[onclick="addToCart(8)"]').click()
      cy.get('#cartur').click();
      cy.contains('Sony vaio i5').should('be.visible');
      cy.contains('Place Order').click();
      cy.get('#name').invoke('val', "Jimmy");
      cy.get('#country').invoke('val', "Canada");
      cy.get('#city').invoke('val', "Edmonton");
      cy.get('#card').invoke('val', "4111 1111 1111 1111");
      cy.get('#month').invoke('val', "09");
      cy.get('#year').invoke('val', "2024");
      cy.contains('Purchase').click();
    });


    it('As a user, Purchase a phone through authorization', () => {
      cy.visit('https://www.demoblaze.com');
      cy.get('#login2').click();
      cy.get('#loginusername').invoke('val', signUsername);
      cy.get('#loginpassword').invoke('val', signPassword);
      cy.wait(2000);
      cy.get('[onclick="logIn()"]').click();
      cy.contains('Samsung galaxy s6').click();
      cy.get('[onclick="addToCart(1)"]').click();
      cy.get('#cartur').click();
      cy.contains('Samsung galaxy s6').should('be.visible');
      cy.contains('Place Order').click();
      cy.get('#name').invoke('val', "Jimmy");
      cy.get('#country').invoke('val', "Canada");
      cy.get('#city').invoke('val', "Edmonton");
      cy.get('#card').invoke('val', "4111 1111 1111 1111");
      cy.get('#month').invoke('val', "09");
      cy.get('#year').invoke('val', "2024");
      cy.contains('Purchase').click();
    });
});