// import ke from "../widgets/KongElement";


//automatioin id  for the main menu
const NavigationMenu = {
    main: "Open Main Menu",
    "Gateway Serivces": "sidebar-item-gateway-services",
    "Routes": "sidebar-item-routes"
}

class Navigator {
    navigate(name) {
        ke.fromTAId(NavigationMenu[name]).then(($el) => {
            if (Cypress.dom.isVisible($el)) {
                $el.click();
            } else {
                ke.fromLabel(NavigationMenu.main).click();
                ke.fromTAId(NavigationMenu[name]).click();
            }
        })
    }
}

export default new Navigator();