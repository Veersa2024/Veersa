import 'cypress-xpath'
describe('Accessibility Tests', () => {
    
    it('url2', () => {

        cy.visit('https://veersatech.com/products-services/', { failOnStatusCode: false });
       cy.wait(10)
        cy.injectAxe();
        cy.checkA11y();
    });

   
});
