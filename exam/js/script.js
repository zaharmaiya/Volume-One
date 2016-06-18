$(function() {
	$('.jcarousel').jcarousel({
		wrap: 'circular',	
	});

	$('.jcarousel-prev').jcarouselControl({
		target: '-=1',		
	});

	$('.jcarousel-next').jcarouselControl({
		target: '+=1'
	});
});

$(function(){
	jQuery.support.cors = true;
	
	var vacType = [];
	var query =[];
	var amount = 8;
	var rand1 = Math.random()*(vacType.length-1)>>0;
	var rand2 = Math.random()* (amount-1)>>0;
	var newElement = {query:vacType[rand1],num:rand2};
	
	addElements();
	
	$('.search__submit').on('click',function(e){
		e.preventDefault();
		$('.search__text').select();
		
		var result = $('.search__text').val();
		vacType.push(result);	
		$('.element').remove();
		addElements();
		vacType.pop();
	});
	
	function addElements() {
		var wrapper = document.querySelector('.image__wrapper');
		for(var i = 0;i<3;i++){
			for(var j = 0; j<3;j++){
				var div = document.createElement('div');
				div.className += " element";
				var html = '';
				wrapper.appendChild(div);
				var random = Math.random();
				if (random > 0.7 && j !=2){ 
					div.className += " fat";
					j++;
				};
				div.innerHTML = html;
			}			
		}
	
		var countDiv = $('.image__wrapper div');
		var array = [];
		for(var i=0;i<3;i++){
			var rand1 = Math.random()*(vacType.length-1)>>0;
			var rand2 = Math.random()* (amount-1)>>0;
			var newElement = {query:vacType[rand1],num:rand2};		
			for (var z=0; z<countDiv.length;z++){				
				query.push(newElement);
				i++;
				$.getJSON('http://api.pixplorer.co.uk/image?word='+newElement.query+'&amount='+amount+'&size=tb', function(r){			
					for(var k = 0; k<array.length; k++){
						var f = true;
						if(array[k] === r.images[newElement.num].imageurl) {
							f = false;
							$.getJSON('http://api.pixplorer.co.uk/image?word='+newElement.query+'&amount='+amount+'&size=tb', function(r){
								countDiv.eq(k-1).css('background-image','url('+r.images[newElement.num].imageurl+
								')').html('<span>'+r.images[newElement.num].word+'</span>');
							}).error(function(jqXHR, textStatus, errorThrown) { alert(errorThrown); });
						} 
					}				
					countDiv.eq(k-1).css('background-image','url('+r.images[newElement.num].imageurl+
					')').html('<span>'+r.images[newElement.num].word+'</span>');
					array.push(r.images[newElement.num].imageurl);
				}).error(function(jqXHR, textStatus, errorThrown) { alert(errorThrown); });	
			}
		};
	};
});