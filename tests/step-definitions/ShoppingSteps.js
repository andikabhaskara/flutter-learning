const { Given, When, Then } = require('cucumber');
const shoppingCartPage = require('../../main/pageobjects/ShoppingCartPage');
const shrinePage = require('../../main/pageobjects/ShrinePage');
const { expect } = require('chai');

When(/^I swipe right until I find (.*) on shopping page$/, function (items) {
    shrinePage.findItem(items);
});

When(/^I click the (.*) on shopping page$/, function (items) {
    shrinePage.clickItem(items);
});

When(/^I tap the (.*) for (.*) times on shopping page$/, function (items, counts) {
    shrinePage.clickMultipleItems(items, counts);
});

When(/^I click shopping cart button on shopping page$/, function () {
    shrinePage.tapShoppingCart();
})

When(/^I click remove (.*) on shopping cart$/, function (items) {
    shoppingCartPage.tapRemoveItem(items);
});

When(/^I click clear cart on shopping cart$/, function () {
    shoppingCartPage.clickClearCart();
})

When(/^I click '(.*)' section on shopping page$/, function (pages) {
    pages = pages.toLowerCase();
    switch (pages) {
        case 'accessories':
            shrinePage.tapAccessoriesSection();
            break;
        case 'clothing':
            shrinePage.tapClothingSection();
            break;
        case 'home':
            shrinePage.tapHomeSection();
            break;
        case 'all':
            shrinePage.tapAllSection();
            break;
        case 'open-menu':
            shrinePage.tapOpenMenu();
            break;
        case 'logout':
            shrinePage.tapLogoutButton();
            break;
        default:
            break;
    }
})

Then(/^The (.*) will be added into shopping cart$/, function (items) {
    expect(shoppingCartPage.isItemOnCart(items)).to.be.true;
});

Then(/^I can see no item on shopping cart$/, function () {
    expect(shoppingCartPage.isNoItemOnShoppingCart()).to.be.true;
});

Then(/^I can see no item on my shopping cart on shopping page$/, function () {
    expect(shoppingCartPage.isNoItemOnCart()).to.be.true;
});