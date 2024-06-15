// import ke from "../widgets/KongElement";
import BasePage from "./base";

const HomePage = {
    defaultWorkspace: "workspace-link-default"
}

export class Home extends BasePage {
    constructor() {
       super('/')
    }

    openWS(wsName = HomePage.defaultWorkspace) {
        ke.fromTAId(wsName).click();
    }
}

export default new Home();