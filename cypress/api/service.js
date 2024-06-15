const adminBase = (() => Cypress.env('adminUrl'))();

export class ServiceAPI {

    create(service) {
        return cy.request({
            method: 'POST',
            url: `${adminBase}/services`,
            body: {
                name: service.name,
                url: service.url
            }
        }).then((response) => {
            expect(response.status).to.eq(201);
            return cy.wrap(response.body);
        });
    }
}

export default new ServiceAPI();