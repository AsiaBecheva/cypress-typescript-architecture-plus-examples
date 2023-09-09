export {}

import './commands'

declare global {
  namespace Cypress {
    interface Chainable {
      login(email: string, pass: string): void
      languageSwitch(language: string): Chainable<any>
    }
  }
}
