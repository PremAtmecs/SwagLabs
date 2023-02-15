/// <reference types="cypress" />

import { ProductPage } from "../../Pages/productPage"
import { YourCartPage } from "../../Pages/YourCartPage"
import { InformationPage } from "../../Pages/InformationPage"
import { Checkout_OverviewPage } from "../../Pages/Checkout_OverviewPage"
import { Checkout_Completepage } from "../../Pages/Checkout_CompletePage"
import { BackHomePage } from "../../Pages/BackHomePage"
import { LogoutPage } from "../../Pages/LogoutPage"


describe("product page", () => {
    beforeEach(function () {
        cy.launchApplication()
        cy.fixture("LoginCredentialsTestData").then(function (logindata) { this.logindata = logindata })
        cy.fixture("ProductPageTestData").then(function (productpagedata) { this.productpagedata = productpagedata })
        cy.fixture("YourCartTestData").then(function(yourcartdata){ this.yourcartdata = yourcartdata})
        cy.fixture("InformationPageTestData").then(function(informationpagedata){ this.informationpagedata = informationpagedata})
    })
    

    it("Validating selected product is present in the checkout page", function () {


        const productpage = new ProductPage()
        const yourcartpage = new YourCartPage()
        const informationpage = new InformationPage()
        const checkoutoverview = new Checkout_OverviewPage()
        const completepage = new Checkout_Completepage()
        const backhome = new BackHomePage()
        const logout = new LogoutPage()

        cy.Login(this.logindata.Username, this.logindata.Password)

        productpage.ValidateProductPage(this.productpagedata.SuccessMessage)
        productpage.getSelectProducts(this.productpagedata.Productname)
        productpage.getClick_CartButton()

        yourcartpage.getValidate_CheckoutPage(this.yourcartdata.YourCartLogo)
        this.productpagedata.Productname.forEach(element => {
            cy.validateProduct(element)
        });
        yourcartpage.getClick_CheckoutButton()

        informationpage.getValidate_Informationpage(this.informationpagedata.OverviewMessage)
        informationpage.getInformation(this.informationpagedata.Firstname, this.informationpagedata.Lastname, this.informationpagedata.ZipCode)
        informationpage.getClick_Continue()

        checkoutoverview.getValidate_CheckoutOverview()
        checkoutoverview.getValidate_ProductQuantity()
        checkoutoverview.getValidate_TotalPrice()
        checkoutoverview.getClick_FinishButton()

        completepage.getValidate_CompleteLabel()
        completepage.getValidate_ThanksMessage()

        backhome.getClick_BackHomeButton()
        backhome.getValidate_ProductLabel(this.productpagedata.SuccessMessage)

        logout.getClick_BurgerMenu()
        logout.getClick_LogoutOption()
        logout.getValidate_SwagLabLogo()


    })


})