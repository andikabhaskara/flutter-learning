@Login
Feature: Login

  @smoketest
  #LGN_001 #LGN_002
  Scenario Outline: As a User, I can Login into SHRINE App

    Given I go to Shrine Login page
    And I am on the 'Login' page
    When I input <username> and <password> on login page
    And I click login button on login page
    Then I am on the 'Shrine' page

    Examples:
      | username        | password     |
      | johndoe         | JohnDoe@123? |
      | Jhonny_Doe01024 | JohnDoe@123? |

  @smoketest
  #LGN_003 #LGN_004
  Scenario Outline: As a User, I can failed Login into SHRINE App

    Given I go to Shrine Login page
    And I am on the 'Login' page
    When I input <username> and <password> on login page
    And I click login button on login page
    Then I am on the 'Login' page

    Examples:
      | username | password     |
      |          |              |
      | jonjon20 | JohnDoe@123? |

  @regressiontest
  #LGN_005 - #LGN_011
  Scenario Outline: As a User, I can Login into SHRINE App

    Given I go to Shrine Login page
    And I am on the 'Login' page
    When I input <username> and <password> on login page
    And I click login button on login page
    Then I am on the 'Shrine' page

    Examples:
      | username    | password      |
      | john.doe    | JohnDoe@123?  |
      | john_doe    | JohnDoe@123?  |
      | JOHNDOE     | JohnDoe@123?  |
      | johnDoe     | Pass@007      |
      | johndoe0102 | Password@123? |
      | Joh         | JohnDoe@123?  |
      | JohnDoe     | JohnDoe@123?  |

  @regressiontest
  #LGN_012 - #LGN_024
  Scenario Outline: As a User, I can failed Login into SHRINE App

    Given I go to Shrine Login page
    And I am on the 'Login' page
    When I input <username> and <password> on login page
    And I click login button on login page
    Then I am on the 'Login' page

    Examples:
      | username         | password              |
      | jo               | Pass@00               |
      | Jhonny_Doe010241 | P4ssword!234567@true! |
      | john🤣🤣         | JohnDoe@123?          |
      | "johndoe12"      | JohnDoe@123?          |
      |                  | JohnDoe@123?          |
      | john_doe         |                       |
      | john doe         | JohnDoe@123?          |
      | john doe 20      | JohnDoe@123?          |
      | John#Doe         | JohnDoe@123?          |
      | Jhonny™001       | JohnDoe@123?          |
      | john.doe         | JohnDoe@123?          |
      | john.doe         | John Doe™             |
      | ' or "='         | ' or "='              |


