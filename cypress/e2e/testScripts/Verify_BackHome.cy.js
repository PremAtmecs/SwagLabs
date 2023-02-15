/// <reference types="cypress" />

import { ProductPage } from "../../Pages/productPage"
import { YourCartPage } from "../../Pages/YourCartPage"
import { InformationPage } from "../../Pages/InformationPage"
import { Checkout_OverviewPage } from "../../Pages/Checkout_OverviewPage"
import { BackHomePage } from "../../Pages/BackHomePage"


describe("Back to HomePage", () => {
    beforeEach(function () {
        cy.launchApplication()
        cy.fixture("LoginCredentialsTestData").then(function (logindata) { this.logindata = logindata })
        cy.fixture("ProductPageTestData").then(function (productpagedata) { this.productpagedata = productpagedata })
        cy.fixture("InformationPageTestData").then(function(informationpagedata){ this.informationpagedata = informationpagedata})
        cy.fixture("YourCartTestData").then(function(yourcartdata){ this.yourcartdata = yourcartdata})
    })
    

    it("After purchasing the products, user can navigate to Homepage", function () {


        const productPage = new ProductPage()
        const yourcartPage = new YourCartPage()
        const informationPage = new InformationPage()
        const checkoutOverview = new Checkout_OverviewPage()
        const backHome = new BackHomePage()

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
        informationpage.getClick_Continue()

        checkoutOverview.getValidate_CheckoutOverview()
        checkoutOverview.getValidate_ProductQuantity()
        checkoutOverview.getValidate_TotalPrice()
        checkoutOverview.getClick_FinishButton()

        backHome.getClick_BackHomeButton()
        backHome.getValidate_ProductLabel(this.productpagedata.SuccessMessage)


    })


})