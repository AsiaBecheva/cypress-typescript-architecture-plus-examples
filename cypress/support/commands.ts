export {};

/**
 * Custom command for login into the application by username and password.
 */
Cypress.Commands.add('login', (email, pass) => {
  cy.get('#username').clear().type(email);
  cy.get('#password').clear().type(pass);
  cy.get('#kc-login').click();
});

/**
 * Custom command for creation of additional locatior next to the standard ones provided by cypress
 */
Cypress.Commands.add('getByTestId', (value) => {
  return cy.get(`[data-testid=${value}]`);
});

/**
 * Example of a custom command for changing the language of the application.
 * Will be used before every test run to switch the language into English.
 */
Cypress.Commands.add('languageSwitch', (language) => {
  cy.get('#some-selector').click();
  cy.get('[class="selector"]').contains(language).click();
});

/**
 * The command will type and enter a search expresion into the search field.
 */
Cypress.Commands.add('openSomethingOnPage', (id) => {
  cy.get('#selector').type(`${id}{enter}`);
  cy.get('#selector').click();
});
