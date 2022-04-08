const CommonActions = require("../base/CommonActions");

class ShrinePage {

    isOnPage() {
        return this.btnMenu.waitForDisplayed() && this.btnSearch.waitForDisplayed();
    }

    tapOpenMenu() {
        this.btnMenu.click();
    }

    findItem(items) {
        CommonActions.swipeLeftUntilElementFound(this.txtItem(items));
    }

    clickItem(items) {
        driver.pause(3000);
        this.txtItem(items).click();
    }

    clickMultipleItems(items, counts) {
        driver.pause(3000);
        var numberOfClick = parseInt(counts)
        Array(numberOfClick).fill().forEach(() => this.txtItem(items).click());

        
    }

    tapShoppingCart() {
        this.btnShoppingCart.click();
    }

    tapClothingSection() {
        this.btnClothing.click();   
    }

    tapAccessoriesSection() {
        this.btnAccessories.click();
    }

    tapHomeSection() {
        this.btnHome.click();
    }

    tapLogoutButton() {
        this.btnLogout.click();
    }

    tapAllSection() {
        this.btnAllSection.click();
    }

    /**
    * define selectors using getter methods
    */

    get btnMenu() {
        return $('~Open menu')
    }

    get btnSearch() {
        return $('~Search')
    }

    txtItem(items) {
        return $(`//android.widget.Button[contains(@content-desc,'${items}')]`)
    }

    get btnShoppingCart() {
        return $('//android.widget.Button[contains(@content-desc,"Shopping cart")]')
    }

    get txtNoItemInCart() {
        return $('//android.widget.Button[@content-desc="Shopping cart, no items"]')
    }

    get btnClothing() {
        return $('~CLOTHING')
    }

    get btnAccessories() {
        return $('~ACCESSORIES')
    }

    get btnHome() {
        return $('~HOME')
    }

    get btnLogout() {
        return $('~LOGOUT')
    }

    get btnAllSection() {
        return $('~ALL')
    }


}

module.exports = new ShrinePage();