export class InformationPage{
    getvalidate_Informationpage(successMessage){
        return cy.get(".title").should('have.text', successMessage)
    }
    getclick_Continue(){
       return cy.get('#continue').click()
    }
}