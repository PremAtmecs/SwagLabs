export class checkoutPage{
    getvalidate_checkoutpage(){
        cy.contains('Your Cart').should('have.text','Your Cart')
    }
   
    getClick_CheckoutButton(){
        return cy.get('#checkout').click()
    }
    getvalidate_Informationpage(successMessage){
        return cy.get(".title").should('have.text', successMessage)
    }
    getclick_Continue(){
       return cy.get('#continue').click()
    }
    getvalidate_checkoutOverview(){
        cy.get('.title').should('have.text', "Checkout: Overview")
    }
    getvalidate_productQuantity(){
        var sum = 0
        cy.get('.cart_quantity').each(($el, index, $list)=>{
           const quantity = $el.text()
           expect(quantity).to.be.equal('1')
           sum = Number(sum) + Number(quantity)
           
        }).then(function(){
            cy.log("Total Number of products in the checkout page", sum)
        })
    }
}