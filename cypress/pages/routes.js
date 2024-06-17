const RoutesPage = {
    "New Route": ["new-route", "toolbar-add-route"]
}

import BasePage from "./base";
import ke from "../KongBase/KongElement";


export class Routes extends BasePage {
    add() {
        ke.fromTAId(RoutesPage["New Route"]).click();
    }

}

export default new Routes();