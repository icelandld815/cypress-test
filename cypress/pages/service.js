const ServiceForm = {
    name: "gateway-service-name-input",
    url: "gateway-service-url-input",
    submit: "form-submit"
}

//-------------------ServicePage-------------------//


import BasePage, { ReapatAble } from "./base";
import route from "./route";
import { randomNum } from "../utils/randomUtil";
import ke from "../KongBase/KongElement";

export class Service extends BasePage {

    constructor(ws = 'default', serviceId) {
        super(`/${ws}/services/${serviceId}`);
    }

    /**
     * create service with given data
     * @param {} service {name: string, url: string}
     * @returns cypress chain object
     */
    create(service) {
        return super.loadData(service).then((serviceData) => {
            if (ReapatAble) {
                serviceData.name = serviceData.name + randomNum(6);
            }
            Object.entries(serviceData).forEach(([key, value]) => {
                cy.log(`set service with ${key} as ${value}`);
                ke.fromTAId(ServiceForm[key]).type(value);
            });
            ke.fromTAId(ServiceForm["submit"]).click();
            cy.get('.toaster-message').should('have.text', `Gateway Service "${serviceData.name}" successfully created!`);
            cy.log('service created', serviceData);
            return cy.wrap(serviceData);
        });
    }

    addRoute(data) {
        cy.log('add route', data);
        cy.get('.add-route-btn').click();
        if (data) {
            route.create(data);
        }
    }
}

export default new Service();