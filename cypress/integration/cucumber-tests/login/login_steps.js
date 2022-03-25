
import { Given, When, And, Then } from 'cypress-cucumber-preprocessor/steps'

Given('user is on login page', () => {
     cy.log ('Inside Given Step Definition')
     cy.visit('https://opensource-demo.orangehrmlive.com/')
})

When('user enters {string} and {string}', (username, password) => {

    cy.get('#txtUsername').type(username)
    cy.get('#txtPassword').type(password)
})

And('clicks on login button', () => {

    cy.get('#btnLogin').click()
})

Then('user is navigated to the home page', () => {

    cy.contains('Welcome')
})