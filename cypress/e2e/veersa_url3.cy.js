import 'cypress-xpath'
describe('Accessibility Tests', () => {
   

    it.only('url3', () => {
        // Perform accessibility checks after the page has loaded
<<<<<<< HEAD
        cy.visit('https://veersatech.com/team/', { failOnStatusCode: false });
        // cy.get("ul#menu-header-menu > li >a").contains('Team').click({ force: true })
=======
        cy.visit('https://veersatech.com/',{ failOnStatusCode: false });
        cy.get("ul#menu-header-menu > li >a").contains('Team').click({ force: true })
>>>>>>> e39e4daf89654c76c128682f559e899f30e804ef
        // Inject axe-core into the application
        cy.injectAxe();
        cy.checkA11y();
    });

  
    
});
