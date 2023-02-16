export class LogoutPage{

    Burger_Menu = '#react-burger-menu-btn'
    Logout = '#logout_sidebar_link'
    Swaglabs_Logo = '.bot_column' 

    getValidate_Logout(){
        cy.get(this.Burger_Menu).click()
        cy.get(this.Logout).should('be.visible').click({force:true})
        cy.get(this.Swaglabs_Logo).should('be.visible')

    }
}