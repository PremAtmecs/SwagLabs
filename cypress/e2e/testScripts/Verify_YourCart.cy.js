/// <reference types="cypress" />


import { ProductPage } from "../../Pages/productPage"
import { YourCartPage } from "../../Pages/YourCartPage"

describe("Your Cart page", () => {
    beforeEach(function () {
        cy.launchApplication()
        cy.fixture("LoginCredentialsTestData").then(function (logindata) { this.logindata = logindata })
        cy.fixture("ProductPageTestData").then(function (productpagedata) { this.productpagedata = productpagedata })
        cy.fixture("YourCartTestData").then(function(yourcartdata){ this.yourcartdata = yourcartdata})
    })


    it("Validating selected products are present in the Your cart", function () {


        const productPage = new ProductPage()
        const yourcartPage = new YourCartPage()

        cy.Login(this.logindata.Username, this.logindata.Password)

        productPage.ValidateProductPage(this.productpagedata.SuccessMessage)
        productPage.getSelectProducts(this.productpagedata.Productname)
        productPage.getClick_CartButton()
        
        yourcartPage.getValidate_CheckoutPage(this.yourcartdata.YourCartLogo)
        this.productpagedata.Productname.forEach(element => {
            cy.validateProduct(element)
        });
        yourcartPage.getClick_CheckoutButton()



    })


})