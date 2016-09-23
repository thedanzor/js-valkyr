var dashboardManager = require('./utils/dashboard.js');
var application = require('./demo/application/app.js')

var wrapper = document.querySelector('.application');

if (wrapper) {
	application( wrapper, function () {

	});
}
