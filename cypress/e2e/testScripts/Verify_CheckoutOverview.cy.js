/// <reference types="cypress" />

import { ProductPage } from "../../Pages/productPage"
import { YourCartPage } from "../../Pages/YourCartPage"
import { InformationPage } from "../../Pages/InformationPage"
import { Checkout_OverviewPage } from "../../Pages/Checkout_OverviewPage"
import { LogoutPage } from "../../Pages/LogoutPage"


describe("Checkout Overview page", () => {
    beforeEach(function () {
        cy.launchApplication()
        cy.fixture("LoginCredentialsTestData").then(function (logindata) { this.logindata = logindata })
        cy.fixture("ProductPageTestData").then(function (productpagedata) { this.productpagedata = productpagedata })
        cy.fixture("InformationPageTestData").then(function (informationpagedata) { this.informationpagedata = informationpagedata })
        cy.fixture("YourCartTestData").then(function (yourcartdata) { this.yourcartdata = yourcartdata })
        cy.fixture("CheckoutOverviewTestData").then( function(overviewdata){ this.overviewdata = overviewdata})
    })

        const productPage = new ProductPage()
        const yourcartPage = new YourCartPage()
        const informationPage = new InformationPage()
        const checkoutOverview = new Checkout_OverviewPage()
        const logout = new LogoutPage()

    it("Verifying product quantity, product price and Total price", function () {       

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
        checkoutOverview.getValidate_ProductQuantity(this.overviewdata.productQuantity)
        checkoutOverview.getValidate_TotalPrice()
        checkoutOverview.getClick_FinishButton()
    })
    after(function () {
        logout.getValidate_Logout()
    })
})