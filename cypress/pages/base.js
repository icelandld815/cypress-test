import ke from "../KongBase/KongElement";

// cypress/pages/BasePage.js
export const ReapatAble = (() => Cypress.env('repeatable'))();

export default class BasePage {

    constructor(url) {
        this.url = url;
    }

    access() {
        if (!this.url) {
            throw new Error('Page URL is required')
        }
        ke.open(this.url)
    }

    initData(data) {
        if (!data) {
            throw new Error('Data is required');
        }

        if (typeof (data) !== 'object' && data.includes('.json')) {
            return cy.fixture(data).then((fixtureData) => {
                return fixtureData;
            });
        } else {
            return cy.wrap(data);
        }
    }
}


