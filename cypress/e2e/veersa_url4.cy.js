import 'cypress-xpath'
describe('Accessibility Tests', () => {
   

    it('url4', () => {
   
        cy.visit('https://veersatech.com/careers-2/', { failOnStatusCode: false });
   
        cy.injectAxe();
        cy.checkA11y();
    });

  
});
