class ShoppingCartPage {

    isNoItemOnCart() {
        return this.txtNoItemOnCart.waitForDisplayed();
    }

    isNoItemOnShoppingCart() {
        return this.txtNoItem.waitForDisplayed();
    }

    isItemOnCart(items) {
        return this.txtItem(items).waitForDisplayed();
    }

    tapRemoveItem(items) {
        this.btnRemoveItem(items).click();
    }

    clickClearCart() {
        this.btnClearCart.click();
    }

    /**
    * define selectors using getter methods
    */

    get txtNoItem() {
        return $('//android.widget.Button[contains(@content-desc, "NO ITEMS")]')
    }

    get txtTotal() {
        return $('//android.view.View[contains(@content-desc, "TOTAL")]')
    }

    get txtSubTotal() {
        return $('//android.view.View[contains(@content-desc, "Subtotal")]')
    }

    get btnClearCart() {
        return $('~CLEAR CART')
    }

    get btnBack() {
        return $('~Back to Gallery')
    }

    txtItem(items) {
        return $(`//android.view.View[contains(@content-desc,"${items}")]`)
    }

    btnRemoveItem(items) {
        return $(`//android.widget.Button[contains(@content-desc,"Remove ${items}")]`)
    }

    get txtNoItemOnCart() {
        return $('//android.widget.Button[@content-desc="Shopping cart, no items"]')
    }

}

module.exports = new ShoppingCartPage();