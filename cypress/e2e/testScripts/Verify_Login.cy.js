/// <reference types="cypress" />

import { LogoutPage } from "../../Pages/LogoutPage"
import { ProductPage } from "../../Pages/productPage"

describe("Login suite", () => {
    beforeEach(function () {
        cy.launchApplication()
        cy.fixture("LoginCredentialsTestData.json").then(function (logindata) {this.logindata = logindata})
    })

        const productPage = new ProductPage()
        const logout = new LogoutPage()

    it("verify login", function () {

        cy.Login(this.logindata.Username, this.logindata.Password)
        productPage.ValidateProductPage(this.logindata.SuccessMessage)
       
    })

    after(function(){
        logout.getValidate_Logout()

    })
  
    
})