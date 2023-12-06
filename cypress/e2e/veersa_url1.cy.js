import 'cypress-xpath'
describe('Accessibility Tests', () => {  
    it('should pass accessibility tests', () => {
        // Perform accessibility checks after the page has loaded
        cy.visit('https://veersatech.com/',{ failOnStatusCode: false });
      
        cy.injectAxe();
        cy.checkA11y();
    });   

    
});
