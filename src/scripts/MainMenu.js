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
			$modal = $('.slidable-content__modal'),
			className = 'body--menu-active';

		// toggle body class and show/hide modal
		function toggleAndFade() {
			$body.toggleClass(className);
			if($body.hasClass(className)){
				$modal.fadeIn();
			}else{
				$modal.fadeOut();
			}
		}

		// main menu trigger and item click event handler
		function handleTriggerClick(evt) {
			toggleAndFade();
			evt.stopPropagation();
		}

		// nav item trigger click event handler
		function handleItemClick(evt) {
			toggleAndFade();
			evt.stopPropagation();
		}

		// setup event listeners
		$document.on('click', trigger, handleTriggerClick);
		$document.on('click', navItems, handleItemClick);
	}());
}(jQuery));
