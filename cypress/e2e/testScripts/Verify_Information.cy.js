/// <reference types="cypress" />


import { InformationPage } from "../../Pages/InformationPage"
import { LogoutPage } from "../../Pages/LogoutPage"
import { ProductPage } from "../../Pages/productPage"
import { YourCartPage } from "../../Pages/YourCartPage"
describe("Information page", () => {
    beforeEach(function () {
        cy.launchApplication()
        cy.fixture("LoginCredentialsTestData").then(function (logindata) { this.logindata = logindata })
        cy.fixture("ProductPageTestData").then(function (productpagedata) { this.productpagedata = productpagedata })
        cy.fixture("InformationPageTestData").then(function(informationpagedata){ this.informationpagedata = informationpagedata})
        cy.fixture("YourCartTestData").then(function(yourcartdata){ this.yourcartdata = yourcartdata})
    })
        const productPage = new ProductPage()
        const yourcartPage = new YourCartPage()
        const informationPage = new InformationPage()
        const logout = new LogoutPage()

    it("Verify user can provide information in the Information page", function () {

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
           
    })
    
    after(function () {
        logout.getValidate_Logout()
    })
    
    
})