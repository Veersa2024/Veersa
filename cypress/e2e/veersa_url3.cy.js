import 'cypress-xpath'
describe('Accessibility Tests', () => {
   

    it.only('url3', () => {
      
        cy.visit('https://veersatech.com/team/', { failOnStatusCode: false });
       
        cy.injectAxe();
        cy.checkA11y();
    });

  
    
});
