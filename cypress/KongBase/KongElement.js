export default class KongElement {

    static fromTAId(uatId) {
        if (uatId instanceof Array) {
            for (let i = 0; i < uatId.length; i++) {
                console.log('uatId[i]', uatId[i]);
                console.log('hello', Cypress.$(`[data-testid="${uatId[i]}"]`))

                //Fixme: check if the element is existed
                if (Cypress.$(`[data-testid="${uatId[i]}"]`).length > 0) {
                    return cy.get(`[data-testid="${uatId[i]}"]`);
                }
            }
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