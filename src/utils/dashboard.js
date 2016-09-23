/**
 * @module Module application
 */

var config = {};

/**
 * Build a configuration file on all the elements we can manage
 *
 * We also want to log the current state of these elements
 * The init function is here if a configuration is not already present
 * So only use this method if you want to build a configuration
 *
 * NOTE: Currently used for demo / trial purposes
 */
var init = function (wrapper) {
	var containers = wrapper.querySelectorAll('[dashboard-wrapper]');

	if (containers && containers.length) {
		for (var i = 0; i < containers.length; i++) {
			var childElements = containers[i].querySelectorAll('[dashboard-child]');
			var key = containers[i].getAttribute('dashboard-wrapper');

			config[key] = {};

			if (childElements && childElements.length) {

				config[key].element = childElements[y];
				config[key].state = 'enabled';
				config[key].children = {};

				// Build the children objects
				for (var y = 0; y < childElements.length; y++) {
					var key2 = childElements[y].getAttribute('dashboard-child');

					config[key].children[key2] = {
						"state": "enabled",
						"element": childElements[y]
					}
				}
			}
		}
	}

	return config;
};

/**
 * When the user has changed the dashboard we want to save the state
 */
var saveState = function (appConfig) {
	if (appConfig) {
		config = appConfig;
	}

	// We need the config
	if (config) {

	}
};

/**
 * When the user has finished using the dashboard manager, we should hide the manager
 */
var removeManager = function (appConfig) {
	if (appConfig) {
		config = appConfig;
	}

	// We need the config
	if (config) {

	}
};

/**
 * When the user requests the manager we want to display management options for each object
 */
var showManager = function (appConfig) {
	if (appConfig) {
		config = appConfig;
	}

	// We need the config
	if (config) {

	}
};

// Export our interfaces for this utility
module.exports = {
	init: init,
	showManager: showManager
};
