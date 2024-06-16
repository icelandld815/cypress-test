const RoutesPage = {
    "New Route": ["new-route", "toolbar-add-route"]
}

import BasePage from "./base";
export class Routes extends BasePage {
    add() {
        ke.fromTAId(RoutesPage["New Route"][0]).click();
    }

}

export default new Routes();