class LoginPage {

    isOnPage(){
        return this.btnCancel.waitForDisplayed() && this.btnNext.waitForDisplayed();
    }

    login(username, password) {
        this.txtUsername.click();
        this.txtUsername.setValue(username);
        driver.pressKeyCode(66);
        this.txtPassword.setValue(password);
        driver.pressKeyCode(66);
    }

    tapNextButton() {
        this.btnNext.click();
    }

    tapCancelButton() {
        this.btnCancel.click();
    }

    /**
    * define selectors using getter methods
    */

    get btnCancel() {
        return $('~CANCEL')
    }

    get btnNext() {
        return $('~NEXT')
    }

    get txtUsername() {
        return $('//android.widget.EditText[1]')
    }

    get txtPassword() {
        return $('//android.widget.EditText[2]')
    }
    

}

module.exports = new LoginPage();