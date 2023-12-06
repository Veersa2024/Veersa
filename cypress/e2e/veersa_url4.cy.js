import 'cypress-xpath'
describe('Accessibility Tests', () => {
   

    it('url4', () => {
        // Perform accessibility checks after the page has loaded
<<<<<<< HEAD
        cy.visit('https://veersatech.com/careers-2/', { failOnStatusCode: false });
    //    making some changes
=======

        cy.visit('https://veersatech.com/careers-2/', { failOnStatusCode: false });

>>>>>>> 0dbae0812f1e2832692ba6f983013f60f2bf6edf
        cy.injectAxe();
        cy.checkA11y();
    });

  
});
