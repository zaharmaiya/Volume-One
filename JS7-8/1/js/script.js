'use strict'
var $tab = jQuery.noConflict();
$tab(document).ready(function() {
	$tab('ul.tabs li').css('cursor', 'pointer');
	$tab('ul.tabs.tabs1 li').click(function(){
		var thisClass = this.className.slice(0,5);
		$tab('div.tab1').hide();
		$tab('div.tab2').hide();
		$tab('div.tab3').hide();
		$tab('div.' + thisClass).show();
		$tab('ul.tabs.tabs1 li').removeClass('tab-current');
		$tab(this).addClass('tab-current');
		});
});