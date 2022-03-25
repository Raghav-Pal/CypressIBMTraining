Feature: Login Test Feature

    Scenario Outline: Test login with valid credentials

        Given user is on login page
        When user enters '<username>' and '<password>'
        And clicks on login button
        Then user is navigated to the home page

        Examples:
            | username | password |
            | Admin    | admin123 |
            | Test     | test123  |
