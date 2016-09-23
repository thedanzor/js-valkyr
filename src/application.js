var dashboardManager = require('./utils/dashboard.js');
var application = require('./demo/application/app');

var wrapper = document.querySelector('.application');

if (wrapper) {
	application( wrapper, function () {
		// Run the dashboard manager
		dashboardManager.check(wrapper);
	});
}
