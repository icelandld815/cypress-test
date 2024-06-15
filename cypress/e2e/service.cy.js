import nav from "../pages/navigator";
import home from "../pages/home";
import service from "../pages/service";
import services from "../pages/services";

import Route from "../pages/route";


describe('test for service creation', () => {
	let gatewayService;

	beforeEach(() => {
		home.access();
		home.openWS();
		nav.navigate('Gateway Serivces');
	});

	it('create gateway service and check', () => {
		services.add();
		service.create('service.json').then((result) => {
			gatewayService = result
		})
	})

	it('add route for the service', () => {
		if (gatewayService) {
			services.filter({ Name: gatewayService.name });
			services.open(gatewayService.name);
			service.addRoute({
				name: "example_route",
				paths: ["/mock"]
			});

		} else {
			throw new Error('service creation failed');
		}

	})

})


