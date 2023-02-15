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


        cy.Login(this.Data.Username, this.Data.Password) //clicking on Login button
        productpage.getProductPage(this.Data.SuccessMessage) // validating user is successfully Logged in
        cy.SelectProduct(this.Data.Productname) //selecting the multiple products randomly
        productpage.getclick_CartButton() //clicking on cart button
        checkoutpage.getvalidate_checkoutpage() //validating user is successfully navigated to checkout page
        this.Data.Productname.forEach(element => { //validating selected products are present in the checkout page.
            cy.validateProduct(element)
        });
        checkoutpage.getClick_CheckoutButton()  //clicking on checkout button
        checkoutpage.getvalidate_Informationpage(this.Data.OverviewMessage) //validating user is navigated to Information page
        cy.getInformation(this.Data.Firstname, this.Data.Lastname, this.Data.ZipCode) //providing user details in the Information page
        checkoutpage.getclick_Continue() //clicking on continue button
        checkoutpage.getvalidate_checkoutOverview //validating user is navigated to overview page
        checkoutpage.getvalidate_productQuantity()  //verifying product quantity


    })


})