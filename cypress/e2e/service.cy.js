import nav from "../pages/navigator";
import home from "../pages/home";
import service from "../pages/service";
import services from "../pages/services";

describe('test for service creation', () => {
	let gatewayService;

	beforeEach(() => {
		home.access();
		home.openWS();
		nav.navigate('Gateway Serivces');
	});

	//create service from data file
	it('create gateway service and check', () => {
		services.add();
		service.create('service.json').then((result) => {
			gatewayService = result
		})
	})

	it('add route for the service', () => {
		if (gatewayService) {
			//find the service from the list
			services.filter({ Name: gatewayService.name });
			services.open(gatewayService.name);

			//add route to the service
			service.addRoute({
				name: "example_route",
				paths: ["/mock"]
			});

		} else {
			throw new Error('service creation failed');
		}
	})
})


