import nav from "../pages/navigator";
import home from "../pages/home";
import Service from "../pages/service";
import services from "../pages/services";
import routes from "../pages/routes";
import Route from "../pages/route";


describe('test for service creation', () => {
	beforeEach(() => {
		home.access();
		home.openWS();
	});

	it('create gateway service', () => {
		createGateWayService();
	})

	it('create service with route', () => {
		createGateWayService();
	
		nav.navigate('Routes');
		routes.add();
		cy.log('create route');
		let route = new Route();
		route.create({
			name: "example_route",
			service: "sample_service",
			paths: ["/mock"]
		});
	})

})

function createGateWayService() {
	nav.navigate('Gateway Serivces');
	services.add();
	let service = new Service();
	service.create('service.json');
}
