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
        ke.fromTAId(RoutesPage["New Route"][0]).click();

        //FIXME: How to handle there's routes already exist
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