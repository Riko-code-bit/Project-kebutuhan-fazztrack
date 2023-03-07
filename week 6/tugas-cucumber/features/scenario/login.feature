Feature: Testing click and drag and drop Automation

  Scenario: Automation click on element and Drop page

    Given I am from on the front page
    When I am click element im redirecting to element page
    Then I am clicking every button in element page
    When I click Interaction button
    Then I am validate the css property

    # Examples:
    #   | username | password             | message                        |
    #   | tomsmith | SuperSecretPassword! | You logged into a secure area! |
    #   | foobar   | barfoo               | Your username is invalid!      |
