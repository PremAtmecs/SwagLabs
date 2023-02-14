export class productPage{
    getProductPage(Product){
         cy.contains('Products').then(function(element){
            const expectedText = element.text()
            expect(expectedText).to.equal(Product)
            cy.log("Logged in successfully")
         })
    }
    getclick_CartButton(){
        return cy.get('.shopping_cart_link').click()
    }

}