import 'cypress-xpath'
describe('Accessibility Tests', () => {
   

    it.only('url3', () => {
<<<<<<< HEAD
        // Perform accessibility checks after the page has loaded
        cy.visit('https://veersatech.com/team/', { failOnStatusCode: false });
        // cy.get("ul#menu-header-menu > li >a").contains('Team').click({ force: true })
        // Inject axe-core into the application
=======
      
        cy.visit('https://veersatech.com/team/', { failOnStatusCode: false });
       
>>>>>>> 0dbae0812f1e2832692ba6f983013f60f2bf6edf
        cy.injectAxe();
        cy.checkA11y();
    });

  
    
});
