import 'cypress-xpath'
describe('Accessibility Tests', () => {
    

    it('url5', () => {
        // Perform accessibility checks after the page has loaded
<<<<<<< HEAD
        cy.visit('https://veersatech.com/', { failOnStatusCode: false });
=======
        cy.visit('https://veersatech.com/',{ failOnStatusCode: false });
>>>>>>> e39e4daf89654c76c128682f559e899f30e804ef
        cy.get("ul#menu-header-menu > li >a").contains('Blog').click({ force: true })
        // Inject axe-core into the application
        cy.injectAxe();
        cy.checkA11y();
    });
});
