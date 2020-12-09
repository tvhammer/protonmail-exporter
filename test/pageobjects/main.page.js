const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class MainPage extends Page {
    /**
     * define selectors using getter methods
     */
    get mailList() { return $('.conversation-wrapper') }

    get modalConfirm() { return $('.pm_modal .modal-dialog .modal-footer .modal-footer-button + .modal-footer-button') }

    get conversation() { return $$('.conversation') }

    get dropdown() { return $('#conversation-view .message .details .pm_buttons .dropdown-actions-nowrap-more') }

    get downloadButton() { return $('[data-action-message="downloadEml"]') }

    get archiveButton() { return $('.moveElement-btn-archive') }

    get advancedFilter() { return $('.advancedFilterElement-btn-dropdown') }

    get sortOld() { return $('.advancedFilterElement-btn-old-to-new') }

    archiveMails() {

        this.sortReverse()
        var next = this.getNext()

        while (next) {
            next.$('.subject').click()
            this.saveAndArchive()
            next = this.getNext()
        }
    }

    sortReverse() {
        if (this.retry(() => this.advancedFilter.isExisting())) {
            this.advancedFilter.click()
        }
        if (this.retry(() => this.sortOld.isExisting())) {
            this.sortOld.click()
        }
    }

    getNext() {
        return this.retry(() => {
            var c = this.conversation
            if (c.length > 0) {
                return c[0]
            } else {
                return null
            }
        })
    }

    saveAndArchive() {
        if (this.retry(() => this.dropdown.isExisting())) {
            this.dropdown.click()
            if (this.retry(() => this.downloadButton.isExisting())) {
                this.downloadButton.click()
            }
            if (this.retry(() => this.archiveButton.isExisting())) {
                this.archiveButton.click()
                browser.pause(2000)
            }
        }
    }


    retry(fun) {
        var retries = 5
        var result = fun()
        while (retries > 0 && !result) {
            result = fun()
            browser.pause(500)
            retries--
        }
        console.log("# result " + result)
        return result
    }
}

module.exports = new MainPage();
