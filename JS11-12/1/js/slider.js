(function($) {

	$.fn.slider = function(options){


		var defaults = {
			buttonColor: 'lightgray',
			buttonFontFamily: 'Tahoma'
		}

		var settings = $.extend(defaults,options);

	    var $leftButton = $('.carousel-arrow-left');
	    var $rightButton = $('.carousel-arrow-right');
		var $elementsList = $('.carousel-list');

		$leftButton.css({
			'background': settings.buttonColor,
			'font-family': settings.buttonFontFamily
		});

		$rightButton.css({
			'background': settings.buttonColor,
			'font-family': settings.buttonFontFamily
		});

		var pixelsOffset = 125;
	    var currentLeftValue = 0;
	    var elementsCount = $elementsList.find('li').length;
	    var minimumOffset = - ((elementsCount - 5) * pixelsOffset);
	    var maximumOffset = 0;

	    $leftButton.click(function() {
	    	if (currentLeftValue != maximumOffset) {
		    	currentLeftValue += 125;
		    	$elementsList.animate({ left : currentLeftValue + "px"}, 500);
	    	}
	    });
	 
	    $rightButton.click(function() {
	    	if (currentLeftValue != minimumOffset) {
		    	currentLeftValue -= 125;
		        $elementsList.animate({ left : currentLeftValue + "px"}, 500);
		    }
	    });

	return this;

	}

})(jQuery);