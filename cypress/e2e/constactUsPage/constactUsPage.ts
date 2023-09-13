import {
  // Before,
  Given,
  When,
  Then,
} from '@badeball/cypress-cucumber-preprocessor'

// import { YourApiClass } from '../../apiRequests/YourApiClass'
// var apiRequests = new YourApiClass()

// Before(() => {
//   cy.visit('/')
//   cy.fixture('loginData').then(({ email, password }) => {
//     cy.login(email, password)
//   })
//   apiRequests.getToken()
//   apiRequests.methodForAsyaResponceId()
//   cy.languageSwitch('English')
//   cy.fixture('asyaData').then(({ asyaResponceId }) => {
//     cy.openSomethingOnPage(asyaResponceId)
//   })
// })

// Given('User navigates to Contact Us Page', () => {
//   cy.fixture('asyaData').then(({ asyaResponceId }) => {
//     cy.openSomethingOnPage(asyaResponceId)
//   })
// })

Given('User navigates to Contact Us Page', () => {
  cy.visit('/')
  cy.get('#menu-home-page-menu > li')
    .contains('a', 'About')
    .get("ul[class='sub-menu'] > li")
    .contains('Contact Us')
    .click({ force: true })
})

When('Type into First Name field {string}', (firstName: string) => {
  cy.get('#et_pb_contact_first_0').type(firstName)
})

Then('Type into Last Name field {string}', (lastName: string) => {
  cy.get('#et_pb_contact_last_0').type(lastName)
})

Then('Type into Email Address field {string}', (email: string) => {
  cy.get('#et_pb_contact_email_0').type(email)
})

Then('Type into Message area field {string}', (message: string) => {
  cy.get('#et_pb_contact_message_0').type(message)
})

Then('Click on SEND MESSAGE button', () => {
  cy.get('button[class="et_pb_contact_submit et_pb_button"]').click({
    force: true,
  })
})

Then('{string} appear as success message', (successMessage: string) => {
  cy.get('div[class="et-pb-contact-message"] > p').contains(successMessage)
})

When('User clicks on SEND MESSAGE button', () => {
  cy.get('form[class="et_pb_contact_form clearfix"]', { timeout: 3000 }).should(
    'be.visible'
  )
  cy.get('button[class="et_pb_contact_submit et_pb_button"]').click()
})

Then('Validation for First Name field is displayed', () => {
  cy.get('#et_pb_contact_first_0').should(
    'have.class',
    'input et_contact_error'
  )
})

Then('Validation for Last Name field is displayed', () => {
  cy.get('#et_pb_contact_last_0').should('have.class', 'input et_contact_error')
})

Then('Validation for Email Address field is displayed', () => {
  cy.get('#et_pb_contact_email_0').should(
    'have.class',
    'input et_contact_error'
  )
})

Then('Validation for Message area is displayed', () => {
  cy.get('#et_pb_contact_message_0').should(
    'have.class',
    'input et_contact_error'
  )
})

When('User clicks on SEND MESSAGE button A', () => {
  cy.get('form[class="et_pb_contact_form clearfix"]', { timeout: 3000 }).should(
    'be.visible'
  )
  cy.get('button[class="et_pb_contact_submit et_pb_button"]').click()
})

Then('{string} is displayed', (message: string) => {
  cy.get('div[class="et-pb-contact-message"] > p')
    .contains(message)
    .should('be.visible')
})

Then('{string} is displayed for missing First Name', (message: string) => {
  cy.get('div[class="et-pb-contact-message"] > ul > li')
    .contains(message)
    .should('be.visible')
})

Then('{string} is displayed for missing Last Name', (message: string) => {
  cy.get('div[class="et-pb-contact-message"] > ul > li')
    .contains(message)
    .should('be.visible')
})

Then('{string} is displayed for missing Email Address', (message: string) => {
  cy.get('div[class="et-pb-contact-message"] > ul > li')
    .contains(message)
    .should('be.visible')
})

Then('{string} is displayed for missing Message', (message: string) => {
  cy.get('div[class="et-pb-contact-message"] > ul > li')
    .contains(message)
    .should('be.visible')
})

When('Info box is displayed', () => {
  cy.get(
    'div[class="et_pb_column et_pb_column_1_3 et_pb_column_2  et_pb_css_mix_blend_mode_passthrough et-last-child"]'
  ).should('be.visible')
})

Then('{string} label is present', (label: string) => {
  cy.get('div[class="et_pb_text_inner"] > h2').contains(label)
})

Then('{string} address is present', (address: string) => {
  cy.get(
    'div[class="et_pb_module et_pb_text et_pb_text_3  et_pb_text_align_left et_pb_bg_layout_dark"] > div > p'
  )
    .first()
    .contains(address)
})

Then('{string} email is present', (email: string) => {
  cy.get(
    'div[class="et_pb_module et_pb_text et_pb_text_3  et_pb_text_align_left et_pb_bg_layout_dark"] > div > p'
  )
    .eq(1)
    .contains(email)
})

Then('Social media module is present', () => {
  cy.get(
    'ul[class="et_pb_module et_pb_social_media_follow et_pb_social_media_follow_0 clearfix  et_pb_text_align_left et_pb_bg_layout_dark has_follow_button"]'
  ).should('be.visible')
})
