export const ReapatAble = (() => Cypress.env('repeatable'))();

import ke from "../KongBase/KongElement";

/**
 * BasePage, the base page for all page object
 */
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
    /** Load data from fixture file or data object
     * @param {*} data 
     * @returns return as cypress chainable object
     */
    loadData(data) {
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


