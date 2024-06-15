const ServicesPage = {
    "New Gateway Service": "toolbar-add-gateway-service"
}

import BasePage from "./base";
export class Services extends BasePage {

    add() {
       ke.fromTAId(ServicesPage["New Gateway Service"]).click();
    }

}

export default new Services();