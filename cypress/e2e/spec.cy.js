
describe('E2E Tests of demoblaze.com', () => {

  const signUsername = ("Tesg" + Date.now());
  const signPassword = "Qwerty123";
  const monitorName = 'Apple monitor 24';
  const laptopName = 'Sony vaio i5';
  const phoneName = 'Samsung galaxy s6';  

  beforeEach(() => {
    cy.visit('https://www.demoblaze.com/');
  });

    it('As a user, purchase a monitor without authorization and registration', () => {
        cy.contains('#itemc', 'Monitors').click();
        cy.contains('.hrefch', monitorName).click();
        cy.contains('a.btn', 'Add to cart').click();
        cy.get('#cartur').click();
        cy.contains('.success', monitorName).should('be.visible');
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
      cy.signUp(signUsername, signPassword)
      cy.contains('#itemc', 'Laptops').click();
      cy.contains('.hrefch', laptopName).click();
      cy.contains('a.btn', 'Add to cart').click();
      cy.get('#cartur').click();
      cy.contains('.success', laptopName).should('be.visible');
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
      cy.login(signUsername, signPassword)
      cy.contains('.hrefch', phoneName).click();
      cy.contains('a.btn', 'Add to cart').click();
      cy.get('#cartur').click();
      cy.contains('.success', phoneName).should('be.visible');
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