
/**
 * sub page containing specific selectors and methods for a specific page
 */
class DecryptPage {
    /**
     * define selectors using getter methods
     */
    get inputPassword () { return $('#mailboxPassword') }
    get btnSubmit () { return $('button[type="submit"]') }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    login (password) {
        this.inputPassword.setValue(password);
        this.btnSubmit.click(); 
    }

}

module.exports = new DecryptPage();
