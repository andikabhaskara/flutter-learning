const CommonActions = require("../base/CommonActions");

class FlutterPage {

    isOnPage() {
        return this.iconFlutter.waitForDisplayed() && this.sectionMaterial.waitForDisplayed();
    }

    tapShrineIcon() {
        CommonActions.swipeLeftUntilElementFound(this.iconShrine);
        this.iconShrine.click();
    }



    /**
    * define selectors using getter methods
    */

    get iconFlutter() {
        return $('//*[contains(@content-desc, "Reply")]')
    }

    get iconShrine() {
        return $(`//android.view.View[contains(@content-desc,"Shrine")]`)
    }

    get sectionMaterial() {
        return $('~MATERIAL')
    }

}

module.exports = new FlutterPage();