export class loginPage{
    getUsername(){
        return cy.get('#user-name')
    }
    getPassword(){
        return cy.get('#password')
    }
    getLogin_button(){
        return cy.get('#login-button')
    }
}