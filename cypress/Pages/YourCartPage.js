export class YourCartPage{

    YourCartLogo = 'Your Cart'
    CheckoutButton = '#checkout'

    getValidate_CheckoutPage(Logo){
        return cy.contains(this.YourCartLogo).should('have.text',Logo)
    }
   
    getClick_CheckoutButton(){
        return cy.get(this.CheckoutButton).click()
    }
}