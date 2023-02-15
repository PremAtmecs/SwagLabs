export class YourCartPage{
    getValidate_CheckoutPage(){
        cy.contains('Your Cart').should('have.text','Your Cart')
    }
   
    getClick_CheckoutButton(){
        return cy.get('#checkout').click()
    }
}