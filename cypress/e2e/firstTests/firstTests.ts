import {
  Before,
  Given,
  When,
  Then,
} from '@badeball/cypress-cucumber-preprocessor'

import { YourApiClass } from '../../apiRequests/YourApiClass'
var apiRequests = new YourApiClass()

Before(() => {
  cy.visit('/')
  cy.fixture('loginData').then(({ email, password }) => {
    cy.login(email, password)
  })
  apiRequests.getToken()
  apiRequests.methodForAsyaResponceId()
  cy.languageSwitch('English')
  cy.fixture('asyaData').then(({ asyaResponceId }) => {
    cy.openSomethingOnPage(asyaResponceId)
  })
})

/**
 * Given implementation will be needed only ones.
 * After that it will be reused automatically through the feature files.
 */
Given('User opens the application', () => {
  cy.fixture('asyaData').then(({ asyaResponceId }) => {
    cy.openSomethingOnPage(asyaResponceId)
  })
})
