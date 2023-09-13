Feature: Contact Us
  Background: User navigates to the application
    Given User navigates to Contact Us Page

  Scenario: User manage to send a message successfully through Contact Us form
    When Type into First Name field 'Asya'
    And Type into Last Name field 'Becheva'
    And Type into Email Address field 'asya@gmail.com'
    And Type into Message area field 'I am sending a message'
    And Click on SEND MESSAGE button
    Then 'Thanks for contacting us' appear as success message

  Scenario: Marked fields in red validation appears for all fields if user clicks on SEND MESSAGE without filling any of them
    When User clicks on SEND MESSAGE button
    Then Validation for First Name field is displayed
    And Validation for Last Name field is displayed
    And Validation for Email Address field is displayed
    And Validation for Message area is displayed

  Scenario: Message validation appears enumerating all of the fields if user clicks on SEND MESSAGE without filling any of them
    When User clicks on SEND MESSAGE button A
    Then 'Please, fill in the following fields:' is displayed
    And 'First Name' is displayed for missing First Name
    And 'Last Name' is displayed for missing Last Name
    And 'Email Address' is displayed for missing Email Address
    And 'Message' is displayed for missing Message

  Scenario: The info box is present with Label, Address, Email and Social media module in it
    When Info box is displayed
    Then 'Info' label is present
    And '7901 4th St N STE 300 St. Petersburg, FL 33702 ' address is present
    And 'info@ultimateqa.com' email is present
    And Social media module is present