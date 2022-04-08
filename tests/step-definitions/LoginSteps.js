const { Given, When, Then } = require('cucumber');
const { expect } = require('chai');
const shrinePage = require('../../main/pageobjects/ShrinePage');
const loginPage = require('../../main/pageobjects/LoginPage');
const flutterPage = require('../../main/pageobjects/FlutterPage');


Given(/^I go to Shrine Login page$/, function () {
    flutterPage.isOnPage();
    flutterPage.tapShrineIcon();

});

Given(/^I am on the '(.*)' page$/, function (pages) {
    pages = pages.toLowerCase();
    switch (pages) {
        case 'login':
            expect(loginPage.isOnPage()).to.be.true;
            break;
        case 'shrine':
            expect(shrinePage.isOnPage()).to.be.true;
            break;
        case 'accessories':
            expect(shrinePage.isOnPage()).to.be.true;
            break;
        case 'clothing':
            expect(shrinePage.isOnPage()).to.be.true;
            break;
        case 'home':
            expect(shrinePage.isOnPage()).to.be.true;
            break;
        default:
            break;
    }

});

When(/^I input (.*) and (.*) on login page$/, function (username, password) {
    loginPage.login(username, password);

});

When(/^I click login button on login page$/, function () {
    loginPage.tapNextButton();
});