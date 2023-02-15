/// <reference types="cypress" />


import { productPage } from "../../Pages/productPage"
import { checkoutPage } from "../../Pages/checkoutPage"

describe("product page", () => {
    beforeEach(function () {
        cy.launchApplication()
        cy.fixture("SwagLabsData.json").then(function (Data) {
            this.Data = Data
        })
    })
    const productpage = new productPage()
    const checkoutpage = new checkoutPage()

    it("Validating selected product is present in the checkout page", function () {

        
        cy.Login(this.Data.Username, this.Data.Password)
        productpage.getProductPage(this.Data.SuccessMessage)
        cy.SelectProduct(this.Data.Productname)
        cy.wait(3000)
        productpage.getclick_CartButton()
        checkoutpage.getvalidate_checkoutpage()
        this.Data.Productname.forEach(element => {
            cy.validateProduct(element)    
        });
        cy.wait(3000)
        checkoutpage.getClick_CheckoutButton()
        checkoutpage.getvalidate_Informationpage(this.Data.OverviewMessage)
        cy.getInformation(this.Data.Firstname, this.Data.Lastname, this.Data.ZipCode)
        checkoutpage.getclick_Continue()
       
        
    

        
    })
    
    
})