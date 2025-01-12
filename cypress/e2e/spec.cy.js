

const generateUniqueUsername = () => "Tes6" + Date.now();
const existingUsername = "StaticUsername";
const password = "Qwerty123";
const monitorName = 'Apple monitor 24';
const laptopName = 'Sony vaio i5';
const phoneName = 'Samsung galaxy s6';
 

  
  describe('User Registration and Log in', () => {

    beforeEach(() => {
      cy.visit('/');
    });
    
    it('should successfully register a new user', () => {
      cy.window().then((win) => {
        cy.stub(win, 'alert').as('winAlert');
      });
      cy.signUp(generateUniqueUsername(), password);
      cy.get('@signupUser').its('response.statusCode').should('eq', 200);
      cy.get('@winAlert').should('be.calledWith', 'Sign up successful.');  
    });

    it('should log in with valid credentials', () => {
      cy.login(existingUsername, password);
      cy.get('@loginUser').its('response.statusCode').should('eq', 200);
      cy.contains('#nameofuser', existingUsername).should('be.visible');
      });
  });

  describe('Product Purchase Tests', () => {

    beforeEach(() => {
      cy.visit('/');
      cy.intercept('Post', '/deletecart').as('deletecart');
      cy.intercept('POST', '/viewcart').as('viewcart');  
    });  

    it('should purchase the monitor without authorization and registration', () => {
      cy.contains('#itemc', 'Monitors').click();
      cy.contains('.hrefch', monitorName).should('be.visible').click();
      cy.contains('a.btn', 'Add to cart').click();
      cy.get('#cartur').click();
      cy.wait('@viewcart');
      cy.contains('.success', monitorName, { timeout: 10000 }).should('be.visible');
      cy.get('.success').should('have.length.at.least', 1);
      cy.contains('.btn.btn-success', 'Place Order').click();
      cy.fillOrderForm();
      cy.contains('.btn.btn-primary', 'Purchase').click();
      cy.contains('.sweet-alert', 'Thank you for your purchase!').should('be.visible');
      cy.wait('@deletecart').its('response.statusCode').should('eq', 200);
    });
    
    it('should purchase the laptop via registration flow', () => {
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


    it('should purchase the phone via authorization flow', () => {
      cy.login(existingUsername, password);
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