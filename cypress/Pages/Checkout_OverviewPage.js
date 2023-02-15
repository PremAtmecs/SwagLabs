export class Checkout_OverviewPage{
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