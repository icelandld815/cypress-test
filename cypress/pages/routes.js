const RoutesPage = {
    "New Route": ["new-route", "toolbar-add-route"]
}
//-------------------RoutesPage-------------------//

import BasePage from "./base";
import ke from "../KongBase/KongElement";

export class Routes extends BasePage {

    constructor(ws = 'default') {
        super(`/${ws}/routes`);
    }

    add() {
        //FIXME: How to handle there's routes already exist without waiting
        cy.wait(1000);
        ke.fromTAId(RoutesPage["New Route"]).click();
        // cy.get('body').then($el => {
        //     let $element = $el.find(`[data-testid="${RoutesPage["New Route"][1]}"]`);
        //     if ($element.length > 0 && $element.css('display')!=='none') {
        //         ke.fromTAId(RoutesPage["New Route"][1]).click();
        //     } else {
        //         ke.fromTAId(RoutesPage["New Route"][0]).click();
        //     }
        // });
    }
}

export default new Routes();