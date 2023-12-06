import 'cypress-xpath'
describe('Accessibility Tests', () => {
    

    it('url5', () => {
<<<<<<< HEAD
        cy.visit('https://veersatech.com/blog-esg-initiatives/', { failOnStatusCode: false });
     
=======
   
        cy.visit('https://veersatech.com/blog-esg-initiatives/', { failOnStatusCode: false });

>>>>>>> 0dbae0812f1e2832692ba6f983013f60f2bf6edf
        cy.injectAxe();
        cy.checkA11y();
    });
});
