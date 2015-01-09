(function($) {
	/**
	 * mainMenu
	 *
	 * Class Overview
	 *
	 * Encapsulates all main menu trigger and link action functionality
	 *------------------------------------------------------------------*/
	BOOMTEST.namespace('BOOMTEST.mainMenu');

	BOOMTEST.mainMenu = (function() {
		var trigger = '.site-header__menu-trigger',
			navItems = '.main-nav > li',
			$body = $('body'),
			$document = $(document),
			className = 'body--menu-active';

		// main menu trigger and item click event handler
		function handleTriggerClick(evt) {
			$body.toggleClass(className);
			evt.preventDefault();
		}

		// nav item trigger click event handler
		function handleItemClick(evt) {
			$body.toggleClass(className);
		}

		// setup event listeners
		$document.on('click', trigger, handleTriggerClick);
		$document.on('click', navItems, handleItemClick);
	}());
}(jQuery));
