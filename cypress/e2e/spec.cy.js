
const password = "Qwerty123";
const staticUsername = "StaticUsername";
const monitorName = 'Apple monitor 24';
const laptopName = 'Sony vaio i5';
const phoneName = 'Samsung galaxy s6';

function generateUniqueUsername() {
  const uniqueUsername = "Tes" + Date.now(); 
  return uniqueUsername;
}

// Cypress._.times(10, () => {
  
  describe('Registration and authorization', () => {

    beforeEach(() => {
      cy.visit('/');
    });
    
    it('Registration of a new user with a valid email address and password', () => {
      cy.window().then((win) => {
        cy.stub(win, 'alert').as('winAlert');
      });
      cy.signUp(generateUniqueUsername(), password)
      cy.get('@signupUser').its('response.statusCode').should('eq', 200);;
      cy.get('@winAlert').should('be.calledWith', 'Sign up successful.');  
    });

    it('User authorization with a valid email address and password', () => {
      cy.login(staticUsername, password);
      cy.get('@loginUser').its('response.statusCode').should('eq', 200);
      cy.contains('#nameofuser', staticUsername).should('be.visible');
      });
  });

  describe('Tests of Purchase products', () => {

    beforeEach(() => {
      cy.visit('/');
      cy.intercept('Post', '/deletecart').as('deletecart');
      cy.intercept('POST', '/viewcart').as('viewcart');  
    });  

    it('As a user, purchase a monitor without authorization and registration', () => {
      cy.contains('#itemc', 'Monitors').click();
      cy.contains('.hrefch', monitorName).should('be.visible').click();
      cy.contains('a.btn', 'Add to cart').click();
      cy.get('#cartur').click();
      cy.wait('@viewcart');
      cy.contains('.success', monitorName).should('be.visible');
      cy.get('.success').should('have.length.at.least', 1);
      cy.contains('.btn.btn-success', 'Place Order').click();
      cy.fillOrderForm();
      cy.contains('.btn.btn-primary', 'Purchase').click();
      cy.contains('.sweet-alert', 'Thank you for your purchase!').should('be.visible');
      cy.wait('@deletecart').its('response.statusCode').should('eq', 200);
    });
    
    it('As a user, Purchase a laptop through registration', () => {
      cy.signUp(generateUniqueUsername(), password);
      cy.contains('#itemc', 'Laptops').click();
      cy.contains('.hrefch', laptopName).click();
      cy.contains('a.btn', 'Add to cart').click();
      cy.get('#cartur').click();
      cy.wait('@viewcart');
      cy.contains('.success', laptopName, { timeout: 10000 }).should('be.visible');
      cy.get('.success').should('have.length.at.least', 1);
      cy.contains('.btn.btn-success', 'Place Order').click();
      cy.fillOrderForm();
      cy.contains('.btn.btn-primary', 'Purchase').click();
      cy.contains('.sweet-alert', 'Thank you for your purchase!').should('be.visible');
      cy.wait('@deletecart').its('response.statusCode').should('eq', 200);
    });


    it('As a user, Purchase a phone through authorization', () => {
      cy.login(staticUsername, password);
      cy.contains('.hrefch', phoneName).click();
      cy.contains('a.btn', 'Add to cart').click();
      cy.get('#cartur').click();
      cy.wait('@viewcart');
      cy.contains('.success', phoneName, { timeout: 10000 }).should('be.visible');
      cy.get('.success').should('have.length.at.least', 1);
      cy.contains('.btn.btn-success', 'Place Order').click();
      cy.fillOrderForm();
      cy.contains('.btn.btn-primary', 'Purchase').click();
      cy.contains('.sweet-alert', 'Thank you for your purchase!').should('be.visible');
      cy.wait('@deletecart').its('response.statusCode').should('eq', 200);
    });
  });
// });