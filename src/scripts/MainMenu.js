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
			navItems = '.main-nav > li > a',
			$body = $('body'),
			$document = $(document),
			$modal = $('.slidable-content__modal'),
			$scroller = $('.slidable-content'),
			className = 'body--menu-active';

		// toggle body class and show/hide modal
		function toggleAndFade(callback) {
			$body.toggleClass(className);
			if($body.hasClass(className)){
				$modal.fadeIn(500, callback);
			}else{
				$modal.fadeOut(500, callback);
			}
		}

		// main menu trigger and item click event handler
		function handleTriggerClick(evt) {
			toggleAndFade();
			evt.preventDefault();
		}

		// nav item trigger click event handler
		function handleItemClick(evt) {
			var $target = $($(evt.target).closest('a').attr('href'));

			function callback() {
				//setTimeout(function() {$scroller.scrollTop($target.offset().top - 60)}, 400);
			}

			toggleAndFade(callback);
			evt.stopPropagation();
		}

		// setup event listeners
		$document.on('click', trigger, handleTriggerClick);
		$document.on('click', navItems, handleItemClick);
	}());
}(jQuery));
