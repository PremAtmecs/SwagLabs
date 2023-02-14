/// <reference types="cypress" />


import { productPage } from "../../Pages/productPage"

describe("product page", () => {
    beforeEach(function () {
        cy.launchApplication()
        cy.fixture("SwagLabsData.json").then(function (Data) {
            this.Data = Data
        })
    })

    it("Selecting multiple products", function () {

        const productpage = new productPage()
        cy.Login(this.Data.Username, this.Data.Password)
        productpage.getProductPage(this.Data.SuccessMessage)
        cy.SelectProduct(this.Data.Productname)
        
    })
    
    
})