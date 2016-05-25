'use strict'
var $toolTips = jQuery.noConflict();
$toolTips(document).ready(function(){
	var div = jQuery("div");
	var input = jQuery("input");
	var showHelp = jQuery("button");
	input.mouseenter(function(){
		var inputClass = this.className.slice(0,5);
		div.find("p." + inputClass).fadeTo(1000,1);
	})
	input.mouseleave(function(){
		var inputClass = this.className.slice(0,5);
		div.find("p." + inputClass).fadeTo(1000,0);
	})
	showHelp.click(function() {
  		div.find("p").fadeTo(1000,1);
  		var helpShowed = true;
	});
	showHelp.mouseleave(function(){
		div.find("p").fadeTo(3000,0);
	})
});