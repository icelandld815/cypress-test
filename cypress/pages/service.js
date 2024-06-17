// import ke from "../widgets/KongElement";
import BasePage, { ReapatAble } from "./base";
import { randomNum } from "../utils/randomUtil";
import route from "./route";

//automatioin id  for the main menu
const ServiceForm = {
    name: "gateway-service-name-input",
    url: "gateway-service-url-input",
    submit: "form-submit"
}

export class Service extends BasePage {
    create(service) {
        return super.loadData(service).then((serviceData) => {
            if (ReapatAble) {
                serviceData.name = serviceData.name + randomNum(6);
            }
            Object.entries(serviceData).forEach(([key, value]) => {
                console.log(key, value);
                ke.fromTAId(ServiceForm[key]).type(value);
            });
            ke.fromTAId(ServiceForm["submit"]).click();
            cy.get('.toaster-message').should('have.text', `Gateway Service "${serviceData.name}" successfully created!`);

            return cy.wrap(serviceData);
        });
    }

    addRoute(data) {
        console.log('add route', data);
        cy.get('.add-route-btn').click();
        if (data) {
            route.create(data);
        }
    }
}

export default new Service();