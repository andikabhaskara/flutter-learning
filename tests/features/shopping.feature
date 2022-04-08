@Shopping
Feature: Shring Shopping feature

    Background: Login using valid credential
        Given I go to Shrine Login page
        And I am on the 'Login' page
        When I input johndoe and JohnDoe$123? on login page
        And I click login button on login page
        Then I am on the 'Shrine' page

    @smoketest
    #RGS_001
    Scenario Outline: As a User, I can see my added item on shopping cart
        When I swipe right until I find <items> on shopping page
        And I click the <items> on shopping page
        And I click shopping cart button on shopping page
        Then The <items> will be added into shopping cart

        Examples:
            | items                 |
            | Walter henley (white) |

    @smoketest
    #RGS_002 #RGS_008
    Scenario Outline: As a User, I can remove my item on shopping cart
        When I swipe right until I find <items> on shopping page
        And I click the <items> on shopping page
        And I click shopping cart button on shopping page
        Then The <items> will be added into shopping cart
        And I click remove <items> on shopping cart
        Then I can see no item on shopping cart

        Examples:
            | items         |
            | Garden strand |

    @smoketest
    #RGS_003
    Scenario Outline: As a User, I can clear cart my item on shopping cart
        When I swipe right until I find <items> on shopping page
        And I click the <items> on shopping page
        And I click shopping cart button on shopping page
        Then The <items> will be added into shopping cart
        And I click clear cart on shopping cart
        Then I am on the 'Shrine' page
        And I can see no item on my shopping cart on shopping page

        Examples:
            | items     |
            | Shrug bag |

    @smoketest
    #RGS_005
    Scenario: As a User, I can logout from shrine App
        When I click 'Open-Menu' section on shopping page
        And I click 'Logout' section on shopping page
        Then I am on the 'Login' page

    @regressiontest
    #RGS_006
    Scenario Outline: As a User, I can input multiple items on shopping cart
        When I swipe right until I find <items> on shopping page
        And I tap the <items> for <count> times on shopping page
        And I click shopping cart button on shopping page
        Then The <items> will be added into shopping cart

        Examples:
            | items          | count |
            | Shrug bag      | 25    |
            | Sunshirt dress | 99    |

    @regressiontest
    #RGS_007
    Scenario Outline: As a User, I can input multiple items from multiple products on shopping cart
        When I swipe right until I find <items> on shopping page
        And I tap the <items> for <count> times on shopping page
        And I swipe right until I find <items2> on shopping page
        And I tap the <items2> for <count2> times on shopping page
        And I click shopping cart button on shopping page
        Then The <items> will be added into shopping cart
        Then The <items2> will be added into shopping cart

        Examples:
            | items        | count | items2         | count2 |
            | Shrug bag    | 25    | Rainwater tray | 25     |
            | Clay sweater | 99    | Sunshirt dress | 99     |

    @regressiontest
    #RGS_009
    Scenario: As a User, I can check my shopping cart has 0 item when I have not choose any product
        When I click shopping cart button on shopping page
        Then I can see no item on shopping cart

    @regressiontest
    #RGS_010 #RGS_011 #RGS_012 #RGS_013 #RGS_014 
    Scenario: As a User, I can move to Accessories, Clothing, Home and hack to All section
        When I click 'Open-Menu' section on shopping page
        When I click 'Accessories' section on shopping page
        Then I am on the 'Accessories' page
        When I click 'Open-Menu' section on shopping page
        When I click 'Clothing' section on shopping page
        Then I am on the 'Clothing' page
        When I click 'Open-Menu' section on shopping page
        When I click 'Home' section on shopping page
        Then I am on the 'Home' page
        When I click 'Open-Menu' section on shopping page
        When I click 'All' section on shopping page
        Then I am on the 'Shrine' page

    @regressiontest
    #RGS_015
    Scenario Outline: As a User, I can swipe right into the last item on the All Menu section
        When I swipe right until I find <items> on shopping page
        And I tap the <items> for <count> times on shopping page
        And I click shopping cart button on shopping page
        Then The <items> will be added into shopping cart

        Examples:
            | items          | count |
            | Sunshirt dress | 5     |

    @regressiontest
    #RGS_016
    Scenario Outline: As a User, I can remove all my items on shopping cart by tapping manually
        When I swipe right until I find <items> on shopping page
        When I click the <items> on shopping page
        When I swipe right until I find <items2> on shopping page
        When I click the <items2> on shopping page
        When I swipe right until I find <items3> on shopping page
        When I click the <items3> on shopping page
        When I swipe right until I find <items4> on shopping page
        When I click the <items4> on shopping page
        When I swipe right until I find <items5> on shopping page
        When I click the <items5> on shopping page
        When I click shopping cart button on shopping page
        Then The <items> will be added into shopping cart
        Then The <items2> will be added into shopping cart
        Then The <items3> will be added into shopping cart
        Then The <items4> will be added into shopping cart
        Then The <items5> will be added into shopping cart
        When I click remove <items> on shopping cart
        When I click remove <items2> on shopping cart
        When I click remove <items3> on shopping cart
        When I click remove <items4> on shopping cart
        When I click remove <items5> on shopping cart
        Then I can see no item on shopping cart

        Examples:
            | items        | items2        | items3    | items4          | items5       |
            | Whitney belt | Varsity socks | Shrug bag | Hurrahs tea set | Clay sweater |

    @regressiontest
    #RGS_017
    Scenario Outline: As a User, I can remove few of my items on shopping cart by tapping manually
        When I swipe right until I find <items> on shopping page
        When I click the <items> on shopping page
        When I swipe right until I find <items2> on shopping page
        When I click the <items2> on shopping page
        When I swipe right until I find <items3> on shopping page
        When I click the <items3> on shopping page
        When I swipe right until I find <items4> on shopping page
        When I click the <items4> on shopping page
        When I swipe right until I find <items5> on shopping page
        When I click the <items5> on shopping page
        When I click shopping cart button on shopping page
        Then The <items> will be added into shopping cart
        Then The <items2> will be added into shopping cart
        Then The <items3> will be added into shopping cart
        Then The <items4> will be added into shopping cart
        Then The <items5> will be added into shopping cart
        When I click remove <items> on shopping cart
        When I click remove <items2> on shopping cart
        Then The <items3> will be added into shopping cart
        Then The <items4> will be added into shopping cart
        Then The <items5> will be added into shopping cart

        Examples:
            | items        | items2        | items3    | items4          | items5       |
            | Whitney belt | Varsity socks | Shrug bag | Hurrahs tea set | Clay sweater |

    @regressiontest
    #RGS_020
    Scenario Outline: As a User, I cannot input more than 99 items on shopping cart
        When I swipe right until I find <items> on shopping page
        And I tap the <items> for <count> times on shopping page
        And I click shopping cart button on shopping page
        Then The <items> will be added into shopping cart

        Examples:
            | items        | count |
            | Clay sweater | 100   |

    @regressiontest
    #RGS_021
    Scenario Outline: As a User, I can add item, clear my cart and logout from Shrine App
        When I swipe right until I find <items> on shopping page
        And I click the <items> on shopping page
        And I click shopping cart button on shopping page
        Then The <items> will be added into shopping cart
        And I click clear cart on shopping cart
        Then I am on the 'Shrine' page
        And I can see no item on my shopping cart on shopping page
        When I click 'Open-Menu' section on shopping page
        And I click 'Logout' section on shopping page
        Then I am on the 'Login' page


        Examples:
            | items     |
            | Shrug bag |
