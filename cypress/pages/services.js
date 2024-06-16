const ServicesPage = {
    "ToolBar": "k-table-toolbar",
    "New Gateway Service": ["new-gateway-service", "toolbar-add-gateway-service"],
    "Filter": "filter-button",
    "Filter-Name": "name",

    "Service-Row": "{serviceName}",
}

import BasePage from "./base";
export class Services extends BasePage {

    add() {
        ke.fromTAId(ServicesPage["New Gateway Service"][0]).click()
    }

    filter(context) {
        ke.fromTAId(ServicesPage["Filter"]).click();
        Object.entries(context).forEach(([key, value]) => {
            ke.fromTAId(ServicesPage[`Filter-${key}`]).first().click();
            cy.get('#filter-name').type(value);
            ke.fromTAId(ServicesPage[`Filter-${key}`]).first().find('[data-testid="apply-filter"]').click();
        });
    }

    open(serviceName) {
        ke.fromTAId(ServicesPage["Service-Row"].replace("{serviceName}", serviceName))
            .should('be.visible').first()
            .click();
    }

}

export default new Services();