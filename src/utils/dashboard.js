/**
 * @module Module application
 */

/**
 * Build a configuration file on all the elements we can manage
 *
 * We also want to log the current state of these elements
 */
var check = function (wrapper) {
	var containers = wrapper.querySelectorAll('[dashboard-wrapper]');

	// Build a runtime configuration file
	var config = {};

	if (containers && containers.length) {
		for (var i = 0; i < containers.length; i++) {
			var childElements = containers[i].querySelectorAll('[dashboard-child]');
			var key = containers[i].getAttribute('dashboard-wrapper');

			config[key] = {};

			if (childElements && childElements.length) {
				for (var y = 0; y < childElements.length; y++) {
					var key2 = childElements[y].getAttribute('dashboard-child');

					config[key][key2] = {
						"state": "enabled",
						"element": childElements[y]
					}
				}
			}
		}
	}

	console.log(config);
	return config;
};

// Export our interfaces for this utility
module.exports = {
	check: check
};
