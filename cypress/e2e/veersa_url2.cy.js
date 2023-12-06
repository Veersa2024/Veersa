import 'cypress-xpath'
describe('Accessibility Tests', () => {
    
    it('url2', () => {

        cy.visit('https://veersatech.com/products-services/', { failOnStatusCode: false });
       
        cy.injectAxe();
        cy.checkA11y();
    });

   
});
