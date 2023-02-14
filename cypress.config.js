const { defineConfig } = require("cypress");

module.exports = defineConfig({
  env: {
    SwagLabsUrl: "https://www.saucedemo.com/",
    
  },
  e2e: {
    
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    specPattern: 'cypress/e2e/testScripts/*.cy.js'
  },
  
});
