'use strict'
$(function(){

	let html = $('#test').html();

	let content = tmpl(html,{
		data: Data
	});

	$('body').append(content);

	let result;

	for (let i = 0; i < QBase.question.length; i++) {
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
		let $chBox = $('input:checked');
		for(let k=0; k< $chBox.length; k++) {
			let str = $chBox.eq(k).attr('id');
			str = str.substr(str.indexOf('_')+1);
			let i = +str.substr(0,str.indexOf('_'));
			let j = +str.substr(str.indexOf('_')+1);
			if (QBase.question[i].answer[j].check){
				result = 'Ответ' + ' ' + (j+1) + ' ' + 'на вопрос' + ' ' + (i+1) + ' ' + '<span class="right">' + 'правильный' + '</span>' + '<br></br>';
				$('p').append(result);
			} else {
				result = 'Ответ' + ' ' + (j+1) + ' ' + 'на вопрос' + ' ' + (i+1) + ' ' + '<span class="wrong">' + 'не правильный' + '</span>' + '<br></br>';
				$('p').append(result);
			}
		}
		let checkBoxArr = $('input');
		for (let i=0; i<checkBoxArr.length; i++){
			if (checkBoxArr[i].type == 'checkbox'){
				checkBoxArr[i].checked = false;
		  }
		  $('.check0').addClass('inaccessible0').removeAttr('disabled');
		  $('.check1').addClass('inaccessible1').removeAttr('disabled');
		}
	}

	$('button#go').click( function(e){
		e.preventDefault();
		showResult();
		if (result == undefined || $('p').text() == '') {
			let error = '<h4>Бланк пуст!</h4> Выберите пожалуйста варианты ответов!'
			$('p').append(error);
		}
		$('#overlay').fadeIn(400,function(){
				$('#modal_form') 
					.css('display', 'block')
					.animate({opacity: 1, top: '45%'}, 400);
		});
	});
	$('#modal_close, #overlay').click( function(){
		$('#modal_form')
			.animate({opacity: 0, top: '35%'}, 400,
				function(){
					$(this).css('display', 'none');
					$('#overlay').fadeOut(400);
				}
			);
		$('p').html('');
	});
});