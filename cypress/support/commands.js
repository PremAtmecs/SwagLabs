const { Checkout_OverviewPage } = require("../Pages/Checkout_OverviewPage")
const { loginPage } = require("../Pages/LoginPage")
const { LogoutPage } = require("../Pages/LogoutPage")

const loginpage = new loginPage()
const overView = new Checkout_OverviewPage
const logout = new LogoutPage()


Cypress.Commands.add('launchApplication', () => {
    cy.visit(Cypress.env("SwagLabsUrl"))

})

Cypress.Commands.add('Login', (username, Password) => {
    loginpage.getUsername().type(username)
    loginpage.getPassword().type(Password)
    loginpage.getLogin_button().click()

})

Cypress.Commands.add('validateProduct', (productName) => {
    cy.get('.inventory_item_name').each(($el, index, $list) => {
        const selectedProduct = $el.text()
        if (selectedProduct.includes(productName)) {

            expect(selectedProduct).to.be.equal(productName)
        }
    })
})


Cypress.Commands.add('Logout', () => {
    logout.getClick_BurgerMenu()
    logout.getClick_LogoutOption()
    logout.getValidate_SwagLogo()
})















