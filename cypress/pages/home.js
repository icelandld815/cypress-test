const HomePage = {
    defaultWorkspace: "workspace-link-default"
}

//-------------------Hompage-------------------//

import ke from "../KongBase/KongElement";
import BasePage from "./base";

export class Home extends BasePage {
    constructor() {
       super('/')
    }

    openWS(wsName = HomePage.defaultWorkspace) {
        ke.fromTAId(wsName).click();
    }
}

export default new Home();