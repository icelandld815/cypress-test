// import ke from "../widgets/KongElement";
import BasePage, { ReapatAble } from "./base";
import { randomNum } from "../utils/randomUtil";

//automatioin id  for the main menu
const ServiceForm = {
    "Service Name": "gateway-service-name-input",
    "Service Url": "gateway-service-url-input",
    "Submit": "form-submit"
}

export default class Service extends BasePage {

    create(service) {
        super.initData(service).then((serviceData) => {
            if (ReapatAble) {
                serviceData.name = serviceData.name + randomNum(6);
            }
            ke.fromTAId(ServiceForm["Service Name"]).type(serviceData.name);
            ke.fromTAId(ServiceForm["Service Url"]).type(serviceData.url);
            ke.fromTAId(ServiceForm["Submit"]).click();
            // return serviceData.name;
        });
    }
}