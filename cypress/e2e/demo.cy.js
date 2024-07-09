describe('Demo Test', () => {
	it('Open the Home page', () => {
// Open site www.demoblaze.com/
		cy.visit('https://www.demoblaze.com')
// Checking the site that it has loaded (the logo has the inscription "PRODUCT STORE")
		cy.visit('#nava').should('contain', 'PRODUCT STORE')
	})
})
