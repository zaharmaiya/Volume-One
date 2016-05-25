$(function() {
  $('.jcarousel').jcarousel({
      wrap: 'both'
  });
  $('.jcarousel-prev')
  .on('jcarouselcontrol:active', function() {
      $(this).removeClass('inactive');
  })
  .on('jcarouselcontrol:inactive', function() {
      $(this).addClass('inactive');
  })
  .jcarouselControl({
      target: '-=1'
  });
  $('.jcarousel-next')
  .on('jcarouselcontrol:active', function() {
      $(this).removeClass('inactive');
  })
  .on('jcarouselcontrol:inactive', function() {
      $(this).addClass('inactive');
  })
  .jcarouselControl({
      target: '+=1'
  });

  $('.jcarousel-pagination')
  .on('jcarouselpagination:active', 'a', function() {
      $(this).addClass('active');
  })
  .on('jcarouselpagination:inactive', 'a', function() {
      $(this).removeClass('active');
  })
  .jcarouselPagination({
      item: function(page) {
          return '<a href="#' + page + '"></a>';
      }
  });
 $('.jcarousel').jcarouselAutoscroll({
      interval: 2500,
      target: '+=1',
      autostart: true
  });

	$('#html__select').ddslick({
	    width: 300,
	    imagePosition: "left"
	});

	jQuery(".niceCheck").mousedown(
	function() {

	     changeCheck(jQuery(this));
	     
	});


	jQuery(".niceCheck").each(
	function() {
	     
	     changeCheckStart(jQuery(this));
	     
	});

	function changeCheck(el){
	     var el = el,
	          input = el.find("input").eq(0);
	   	 if(!input.attr("checked")) {
			el.css("background-position","0 -17px");	
			input.attr("checked", true)
		} else {
			el.css("background-position","0 0");	
			input.attr("checked", false)
		}
	     return true;
	}

	function changeCheckStart(el){
	var el = el,
			input = el.find("input").eq(0);
	      if(input.attr("checked")) {
			el.css("background-position","0 -17px");	
			}
	     return true;
	}
    $( '.dropdown' ).hover(
        function(){
            $(this).children('.sub-menu').slideDown(200);
        },
        function(){
            $(this).children('.sub-menu').slideUp(200);
        }
    );

});