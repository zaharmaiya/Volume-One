'use strict'
$(function(){

	var html = $('#test').html();

	var content = tmpl(html,{
		data: Data
	});

	$('body').append(content);

	var result;

	for (var i = 0; i < QBase.question.length; i++) {
		$('.check'+i).addClass('inaccessible'+i);
		$('.inaccessible0').on('change',function(){
			if(this.checked){
				$(this).removeClass('inaccessible0');
				$('.inaccessible0').attr('disabled','disabled');
			} else {
				$(this).addClass('inaccessible0');
				$('.inaccessible0').removeAttr('disabled');
			}
		});
		$('.inaccessible1').on('change',function(){
			if(this.checked){
				$(this).removeClass('inaccessible1');
				$('.inaccessible1').attr('disabled','disabled');
			} else {
				$(this).addClass('inaccessible1');
				$('.inaccessible1').removeAttr('disabled');
			}
		});
	}

	function showResult(){
		var $chBox = $('input:checked');
		for(var k=0; k< $chBox.length; k++) {
			var str = $chBox.eq(k).attr('id');
			str = str.substr(str.indexOf('_')+1);
			var i = +str.substr(0,str.indexOf('_'));
			var j = +str.substr(str.indexOf('_')+1);
			if (QBase.question[i].answer[j].check){
				result = 'Ответ' + ' ' + (j+1) + ' ' + 'на вопрос' + ' ' + (i+1) + ' ' + '<span class="right">' + 'правильный' + '</span>' + '<br></br>';
				$('p').append(result);
			} else {
				result = 'Ответ' + ' ' + (j+1) + ' ' + 'на вопрос' + ' ' + (i+1) + ' ' + '<span class="wrong">' + 'не правильный' + '</span>' + '<br></br>';
				$('p').append(result);
			}
		}
		var checkBoxArr = $('input');
		for (var i=0; i<checkBoxArr.length; i++){
			if (checkBoxArr[i].type == 'checkbox'){
				checkBoxArr[i].checked = false;
		  }
		  $('.check0').addClass('inaccessible0').removeAttr('disabled');
		  $('.check1').addClass('inaccessible1').removeAttr('disabled');
		}
	}

	$('.btn').on('click', showResult);

});