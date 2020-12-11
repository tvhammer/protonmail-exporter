const LoginPage = require('../pageobjects/login.page');
const DecryptPage = require('../pageobjects/decrypt.page');
const MainPage = require('../pageobjects/main.page');

describe('Protonmail exporter', () => {
    it('download all mails', () => {

        browser.setTimeout({
            'pageLoad': 10000,
            'script': 6000000
        })

        LoginPage.open();

        LoginPage.login(process.env.PROTONMAIL_USER, process.env.PROTONMAIL_PASSWORD);

        if (process.env.PROTONMAIL_DECRYPT_PASSWORD) {
            DecryptPage.login(process.env.PROTONMAIL_DECRYPT_PASSWORD);
        }
        expect(MainPage.mailList).toBeExisting();

        if (MainPage.modalConfirm.isExisting()) {
            MainPage.modalConfirm.click()
        }

        MainPage.archiveMails()

    });
});


