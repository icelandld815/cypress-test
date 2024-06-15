const ServicesPage = {
    "New Gateway Service": ["new-gateway-service", "toolbar-add-gateway-service"]
}

import BasePage from "./base";
export class Services extends BasePage {

    add() {
       ke.fromTAId(ServicesPage["New Gateway Service"][0]).click();
    }

}

export default new Services();