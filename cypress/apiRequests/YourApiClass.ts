/// <reference types="cypress" />
/**
 * faker will provide fake data
 */
import { faker } from '@faker-js/faker'

export class YourApiClass {
  methodForAsyaResponceId() {
    cy.fixture('token.json').then((json) => {
      const authorization = `bearer ${json.token}`
      cy.request({
        method: 'POST',
        url: 'https://someurl/api/endpoint',
        headers: {
          authorization,
        },
        body: {
          firstName: 'asya',
          lastName: 'becheva',
          userName: 'asyabecheva',
          age: 32,
          /**
           * faker will generate 10 random numbers to match the exact pattern of person id number
           */
          idNumber: faker.string.alpha(10),
        },
      }).then((response) => {
        cy.writeFile('cypress/fixtures/asyaData.json', {
          asyaResponceId: response.body.id,
        })
        /**
         * Expecting responce with Status Code 201 Created
         */
        expect(response.status).to.eq(201)
      })
    })
  }

  getToken() {
    cy.request({
      method: 'POST',
      url: 'https://somewebsite.com/api/auth/token',
      form: true,
      body: {
        grant_type: 'application',
        client_id: 'clientId',
        username: 'asyabecheva',
        password: 'asyabecheva!',
        client_secret: 'town',
      },
    }).then((response) => {
      /**
       * Expecting responce with Status Code 200 Ok
       */
      expect(response.status).to.eq(200)
      const bearerToken = response.body.access_token

      /**
       * Saving the token into a fixture file in order to use it for the api request above.
       * Cypress 12 and above does not allow saving data into session storage.
       * This is a workaround.
       */
      cy.writeFile('cypress/fixtures/token.json', { token: bearerToken })
    })
  }
}
