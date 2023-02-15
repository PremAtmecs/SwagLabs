/// <reference types="cypress" />

import { ProductPage } from "../../Pages/productPage"
import { YourCartPage } from "../../Pages/YourCartPage"
import { InformationPage } from "../../Pages/InformationPage"
import { Checkout_OverviewPage } from "../../Pages/Checkout_OverviewPage"
import { Checkout_Completepage } from "../../Pages/Checkout_CompletePage"


describe("Complete Page", () => {
    beforeEach(function () {
        cy.launchApplication()
        cy.fixture("LoginCredentialsTestData").then(function (logindata) { this.logindata = logindata })
        cy.fixture("ProductPageTestData").then(function (productpagedata) { this.productpagedata = productpagedata })
        cy.fixture("InformationPageTestData").then(function(informationpagedata){ this.informationpagedata = informationpagedata})
        cy.fixture("YourCartTestData").then(function(yourcartdata){ this.yourcartdata = yourcartdata})
    })
    

    it("validating Thanks message", function () {

        const productPage = new ProductPage()
        const yourcartPage = new YourCartPage()
        const informationPage = new InformationPage()
        const checkoutOverview = new Checkout_OverviewPage()
        const completePage = new Checkout_Completepage()

        cy.Login(this.logindata.Username, this.logindata.Password)

        productPage.ValidateProductPage(this.productpagedata.SuccessMessage)
        productPage.getSelectProducts(this.productpagedata.Productname)
        productPage.getClick_CartButton()

        yourcartPage.getValidate_CheckoutPage(this.yourcartdata.YourCartLogo)
        this.productpagedata.Productname.forEach(element => {
            cy.validateProduct(element)
        });
        yourcartPage.getClick_CheckoutButton()

        informationPage.getValidate_Informationpage(this.informationpagedata.OverviewMessage)
        informationPage.getInformation(this.informationpagedata.Firstname, this.informationpagedata.Lastname, this.informationpagedata.ZipCode)    
        informationPage.getClick_Continue()

        checkoutOverview.getValidate_CheckoutOverview()
        checkoutOverview.getValidate_ProductQuantity()
        checkoutOverview.getValidate_TotalPrice()
        checkoutOverview.getClick_FinishButton()

        completePage.getValidate_CompleteLabel()
        completePage.getValidate_ThanksMessage()
        


    })


})