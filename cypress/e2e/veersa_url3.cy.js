import 'cypress-xpath'
describe('Accessibility Tests', () => {
   

    it.only('url3', () => {
        // Perform accessibility checks after the page has loaded
        cy.visit('https://veersatech.com/team/', { failOnStatusCode: false });
        // cy.get("ul#menu-header-menu > li >a").contains('Team').click({ force: true })
        // Inject axe-core into the application
        cy.injectAxe();
        cy.checkA11y();
    });

  
    
});
