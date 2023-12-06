import 'cypress-xpath'
describe('Accessibility Tests', () => {
   

    it('url4', () => {
        // Perform accessibility checks after the page has loaded
        cy.visit('https://veersatech.com/careers-2/', { failOnStatusCode: false });
    //    making some changes
        cy.injectAxe();
        cy.checkA11y();
    });

  
});
