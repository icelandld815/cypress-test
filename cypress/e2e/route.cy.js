import nav from "../pages/navigator";
import home from "../pages/home";
import routes from "../pages/routes";
import route from "../pages/route";

import apiSerivce from "../api/service";
import { randomNum } from "../utils/randomUtil";


describe('test for route creation', () => {
	let service;
	let routeName;

	// use API to create a service as data preparetion
	before(() => {
		apiSerivce.create({
			name: "sample_service" + randomNum(6),
			url: "http://httpbin.org"
		}).then((result) => {
			service = result;
		})
	});

	beforeEach(() => {
		home.access();
		home.openWS();
		nav.navigate('Routes');
	})

	it('create route', () => {
		routes.add();
		route.create({
			name: "example_route",
			service: service.id,
			paths: ["/mock"]
		}).then((route) => {
			routeName = route.name;
		});
	})

	it('check route works', () => {
		if (routeName) {
			const clientBase = `${Cypress.env('clientUrl')}`;
			cy.visit(`${clientBase}/mock`);
			cy.get('body').should('contain', 'httpbin.org');
		} else {
			throw new ERROR('route creation failed');
		}
	})

})
