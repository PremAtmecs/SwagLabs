export class checkoutPage{
    getvalidate_checkoutpage(){
        cy.contains('Your Cart').should('have.text','Your Cart')
    }
}