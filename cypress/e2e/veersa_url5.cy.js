import 'cypress-xpath'
describe('Accessibility Tests', () => {
    

    it('url5', () => {
        // Perform accessibility checks after the page has loaded
        cy.visit('https://veersatech.com/',{ failOnStatusCode: false });
        cy.get("ul#menu-header-menu > li >a").contains('Blog').click({ force: true })
        // Inject axe-core into the application
        cy.injectAxe();
        cy.checkA11y();
    });
});
