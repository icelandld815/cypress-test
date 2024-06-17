const RoutesPage = {
    "New Route": ["new-route", "toolbar-add-route"]
}

import BasePage from "./base";
import ke from "../KongBase/KongElement";

export class Routes extends BasePage {
    add() {
        ke.fromTAId(RoutesPage["New Route"][0]).click();

        //FIXME: How to handle there's already routes
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