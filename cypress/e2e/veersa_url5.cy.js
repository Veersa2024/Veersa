import 'cypress-xpath'
describe('Accessibility Tests', () => {
    

    it('url5', () => {

        cy.visit('https://veersatech.com/blog-esg-initiatives/', { failOnStatusCode: false });
  
        cy.injectAxe();
        cy.checkA11y();
    });
});
