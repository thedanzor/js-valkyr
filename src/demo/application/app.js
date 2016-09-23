var buildChildContent = function (wrapper) {
	for (var i = 0; i < 12; i++) {
		var element = document.createElement('div');

		element.setAttribute('dashboard-child', 'content_element_' + i);
		element.className = 'content_wrapper';

		wrapper.appendChild(element);
	}
};

var buildChildMenu = function (wrapper) {
	for (var i = 0; i < 4; i++) {
		var element = document.createElement('div');

		element.setAttribute('dashboard-child', 'menu_element_' + i);
		element.className = 'content_wrapper';

		wrapper.appendChild(element);
	}
};

var buildView = function (wrapper) {
	var sidebar = document.createElement('div');
	var mainWrapper = document.createElement('div');

	sidebar.className = 'app_sidebar';
	sidebar.setAttribute('dashboard-wrapper', 'sidebar');

	mainWrapper.className = 'app_wrapper';
	mainWrapper.setAttribute('dashboard-wrapper', 'wrapper');

	// Append these modules to the DOM
	wrapper.appendChild(sidebar);
	wrapper.appendChild(mainWrapper);

	// Give the sidebar some childs
	buildChildMenu(sidebar);

	// Give the container some children
	buildChildContent(mainWrapper);
};

module.exports = function (wrapper, callback) {
	buildView(wrapper);
	callback();
};
