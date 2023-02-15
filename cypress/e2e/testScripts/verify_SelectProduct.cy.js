/// <reference types="cypress" />


import { ProductPage } from "../../Pages/productPage"

describe("product page", () => {
    beforeEach(function () {
        cy.launchApplication()
        cy.fixture("LoginCredentialsTestData").then(function (logindata) { this.logindata = logindata})
        cy.fixture("ProductPageTestData").then(function (productpagedata){ this.productpagedata = productpagedata})
    })

    it("Selecting multiple products", function () {

        const productpage = new ProductPage()

        cy.Login(this.logindata.Username, this.logindata.Password)

        productpage.ValidateProductPage(this.productpagedata.SuccessMessage)
        productpage.getSelectProducts(this.productpagedata.Productname)
        productpage.getClick_CartButton()
        
    })
    
    
})