//key is same as entity property name
const RouteForm = {
    "name": "route-form-name",   
    "service": "route-form-service-id",
    "paths": "route-form-paths-input-{index}",
    "service-select": "select-item-{serviceId}",
    "Save": "form-submit"
}

//-------------------RoutePage-------------------//

import BasePage, { ReapatAble } from "./base";
import ke from "../KongBase/KongElement";
import { randomNum } from "../utils/randomUtil";

export class Route extends BasePage {

    constructor(ws = 'default', rootId) {
        super(`/${ws}/routes/${rootId}`);
    }

    /**
     * create route with given data
     * @param {*} data {service: string, name: string, paths: string[]}
     * @returns cypress chain object
     */
    create(data) {
        return super.loadData(data).then((route) => {
            if (ReapatAble) {
                route.name = route.name + randomNum(6);
            }
            Object.entries(route).forEach(([key, value]) => {
                if (key === 'service') {
                    ke.fromTAId(RouteForm["service"]).click();
                    ke.fromTAId(RouteForm["service-select"].replace("{serviceId}", value)).click();
                } else if (key === 'paths') {
                    value.forEach((path, index) => {
                        index += 1;
                        ke.fromTAId(RouteForm["paths"].replace("{index}", index)).type(path);
                    });
                } else {
                    ke.fromTAId(RouteForm[key]).type(value);
                }
            });
            ke.fromTAId(RouteForm["Save"]).click();
            cy.get('.toaster-message').should('have.text', `Route "${route.name}" successfully created!`);
            cy.log('route created', route);
            return cy.wrap(route);
        });
    }
}

export default new Route();