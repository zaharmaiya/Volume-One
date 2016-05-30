'use strict'
$(function(){

	$('.jcarousel').jcarousel({
	      wrap: 'both'
	  	});
	$('.jcarousel-pagination').jcarouselPagination({
		item:function(page, carouselItems) {
				return '<a href="#' + page + '"></a>';	    
		}
  	});
  	$('.jcarousel-pagination')
	  .on('jcarouselpagination:active', 'a', function() {
	      $(this).addClass('active');
	  })
	  .on('jcarouselpagination:inactive', 'a', function() {
	      $(this).removeClass('active');
	  });
	$('.jcarousel-pagination a:first-child').addClass('active');
	$('.jcarousel').jcarouselAutoscroll({
	      interval: 2500,
	      autostart: true,
	      target: '+=1'
	});

	//Accordeon
	var panels = $('.accordion > dd').hide();

	panels.first().show();

	$('.accordion > dt > a').click(function(){
		var $this = $(this);
		$('.accordion > dt a').removeClass('active-panel');
		$(this).addClass('active-panel');
		$('.accordion > dt a > span').html('+');
		$('.active-panel').find('span').html('&mdash;');
		panels.slideUp();
		$this.parent().next().slideDown();
		return false;
	});
});