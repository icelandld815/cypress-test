const RouteForm = {
    "Name": "route-form-name",
    "Service": "route-form-service-id",
    "Paths": "route-form-paths-input-{index}",
    "Save": "form-submit"
}

import BasePage, { ReapatAble } from "./base";

export default class Route extends BasePage {
    create(data) {
        super.initData(data).then((route) => {
            if (ReapatAble) {
                route.name = data.name + randomNum(6);
            }

            ke.fromTAId(RouteForm["Name"]).type(route.name);
            ke.fromTAId(RouteForm["Service"]).type(route.service);

            //FIXME: select the service from the dropdown
            // ke.fromTAId(RouteForm["Service"]).click();
            // ke.fromTAId(RouteForm["Service"]).select(route.service);
            route.paths.forEach((value, index) => {
                index += 1;
                ke.fromTAId(RouteForm["Paths"].replace("{index}", index)).type(value);
            });
       
            ke.fromTAId(RouteForm["Save"]).click();
        });
    }

 
}