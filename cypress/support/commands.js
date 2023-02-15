const { loginPage } = require("../Pages/LoginPage")


Cypress.Commands.add('launchApplication', () => {
    cy.visit(Cypress.env("SwagLabsUrl"))

})
const loginpage = new loginPage()

Cypress.Commands.add('Login', (username, Password) => {
    loginpage.getUsername().type(username)
    loginpage.getPassword().type(Password)
    loginpage.getLogin_button().click()

})

Cypress.Commands.add('SelectProduct', (productName) => {
    cy.get('.inventory_item_label').each(($el, index, $list) => {
        const textproduct = $el.find('div.inventory_item_name').text()
        for (let element of productName) {
            if (textproduct == (element)) {
                let addCartselector = "#add-to-cart-" + textproduct.replace(/\s/gm, "-").toLowerCase();
                cy.log(addCartselector);
                cy.get(addCartselector).click();
            }
        }
    })
})

Cypress.Commands.add('validateProduct', (productName) => {
    cy.get('.inventory_item_name').each(($el, index, $list) => {
        const selectedProduct = $el.text()
        if(selectedProduct.includes(productName)){
            
           expect(selectedProduct).to.be.equal(productName)
        }
    })
})












