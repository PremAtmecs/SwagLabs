export class LogoutPage{

    Burger_Menu = '#react-burger-menu-btn'
    Logout = '#logout_sidebar_link'
    Swaglabs_Logo = '.bot_column' 

    getClick_BurgerMenu(){
        cy.get(this.Burger_Menu).click()
    }

    getClick_LogoutOption(){
        cy.get(this.Logout).click()
    }

    getValidate_SwagLabLogo(){
        cy.get(this.Swaglabs_Logo).should('be.visible')
    }
}