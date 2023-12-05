import 'cypress-xpath'
describe('Accessibility Tests', () => {
    
    it('url2', () => {
        // Perform accessibility checks after the page has loaded
        cy.visit('https://veersatech.com/');
        cy.get("ul#menu-header-menu > li >a").contains('Products & Services').click({ force: true })
        // Inject axe-core into the application
        cy.injectAxe();
        cy.checkA11y();
    });

   
});