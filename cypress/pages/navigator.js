const NavigationMenu = {
    main: "Open Main Menu",
    "Gateway Serivces": "sidebar-item-gateway-services",
    "Routes": "sidebar-item-routes"
}

//-------------------NavigatorPage-------------------//

import ke from "../KongBase/KongElement";

class Navigator {
    
    /** Navigate to the page by name
     * @param {string} name 
     */
    navigate(name) {
        ke.fromTAId(NavigationMenu[name]).then(($el) => {
            if (Cypress.dom.isVisible($el)) {
                $el.click();
            } else {
                ke.fromLabel(NavigationMenu.main).click();
                ke.fromTAId(NavigationMenu[name]).click();
            }
        })
        cy.log(`Navigated to ${name}`)
    }
}

export default new Navigator();