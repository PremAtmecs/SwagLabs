/// <reference types="cypress" />


import { productPage } from "../../Pages/productPage"

describe("Login suite", () => {
    beforeEach(function () {
        cy.launchApplication()
        cy.fixture("SwagLabsData.json").then(function (Data) {
            this.Data = Data
        })
    })

    it("verify login", function () {

        const productpage = new productPage()
        cy.Login(this.Data.Username, this.Data.Password)
        productpage.getProductPage(this.Data.SuccessMessage)
        // cy.wait(5000)
        // cy.SelectProduct(this.Data.Productname)
        // cy.get('.shopping_cart_link').click()
    })
    
    
})