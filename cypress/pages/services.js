const ServicesPage = {
    "ToolBar": "k-table-toolbar",
    "New Gateway Service": ["new-gateway-service", "toolbar-add-gateway-service"],
    "Filter": "filter-button",
    "Filter-Name": "name",

    "Service-Row": "{serviceName}",
}

//-------------------ServicesPage-------------------//

import BasePage from "./base";
import ke from "../KongBase/KongElement";

export class Services extends BasePage {
    constructor(ws = 'default') {
        super(`/${ws}/services`);
    }

    add() {
        ke.fromTAId(ServicesPage["New Gateway Service"][1]).click();
        //FIXME: How to handle there's services already exist
        // cy.get('body').then($el => {
        //     let $element = $el.find(`[data-testid="${ServicesPage["New Gateway Service"][1]}"]`);
        //     if ($element.length >0 && $element.css('display')!=='none') {
        //         ke.fromTAId(ServicesPage["New Gateway Service"][1]).click();
        //     } else {
        //         ke.fromTAId(ServicesPage["New Gateway Service"][0]).click();
        //     }
        // });
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
        cy.log('service is opened', serviceName)
    }

}

export default new Services();