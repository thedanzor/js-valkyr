var dashboardManager = require('./utils/dashboard.js');
var application = require('./demo/application/app');

var wrapper = document.querySelector('.application');

if (wrapper) {
	application( wrapper, function () {
		// Build a configuration dynamically, for this demo
		var config = dashboardManager.init(wrapper);

		dashboardManager.toggle();
		console.log(config);
	});
}
