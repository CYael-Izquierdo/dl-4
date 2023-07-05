const headerMenuCommands = {
    openGetInTouchForm: function () {
        this.waitForElementVisible('@mobileButton', 1000).click('@mobileButton');
        this.waitForElementVisible('@getInTouchButton', 1000).click('@getInTouchButton');
        return this;
    }
};

const modalCommands = {
    submit: function () {
        this.waitForElementVisible('@submitButton', 1000).click('@submitButton');
        return this;
    }
}

module.exports = {
    url: 'https://inhouse.decemberlabs.com/',
    sections: {
        headerMenu: {
            selector: 'nav.navigation_bar',
            commands: [headerMenuCommands],
            elements: {
                mobileButton: {
                    selector: 'a.btn_mobile'
                },
                home: {
                    selector: 'li.mainav-home-button'
                },
                // Another header menu buttons...
                getInTouchButton: {
                    selector: 'li.launch-modal-get-in-touch'
                }
            }
        },
        getInTouchModal: {
            selector: 'div.dl-getintouch-modal',
            commands: [modalCommands],
            elements: {
                title: {
                    selector: 'h3.contact-form-heading'
                },
                name: {
                    selector: 'input#wpforms-872-field_0'
                },
                email: {
                    selector: 'input#wpforms-872-field_1'
                },
                company: {
                    selector: 'input#wpforms-872-field_6'
                },
                message: {
                    selector: 'textarea#wpforms-872-field_2'
                },
                submitButton: {
                    selector: 'button[type="submit"]'
                }
            }
        }
    }
};
