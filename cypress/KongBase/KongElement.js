/**
 * KongElement, get the element by data-testid or aria-label which specified by Kong
 */
export default class KongElement {

    static fromTAId(uatId) {
        if(Array.isArray(uatId)){
            return cy.get('body').then($el => {
                for (let i = 0; i < uatId.length; i++) {
                    if ($el.find(`[data-testid="${uatId[i]}"]`).length > 0) {
                        return cy.wrap($el.find(`[data-testid="${uatId[i]}"]`));
                    } else {
                        console.warn(`Element with data-testid ${uatId[i]} not found`);
                        cy.log(`Element with data-testid ${uatId[i]} not found`);
                    }
                }
                // If element not found, log and return null
                throw new Error(`Element with data-testid ${uatId} not found`);
            });
        } else {
            return cy.get(`[data-testid="${uatId}"]`);
        }
        
    }

    static fromLabel(label) {
        return cy.get(`[aria-label="${label}"]`);
    }

    static open(url) {
        return cy.visit(url)
    }
}

if (typeof window !== 'undefined') {
    window.ke = KongElement;
}