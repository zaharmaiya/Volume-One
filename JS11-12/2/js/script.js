$(function(){

	var html = $('#test').html();

	console.log(html);

	var profile = [
			{	
				name: 'Алимов Вадим Игоревич',
				imgSrc: "'img/photo.png'",
				discription: 'Студент НАУ им. Н. Е. Жуковского "ХАИ"'
			},
			{	
				motivationList: ['Можно работать где-угодно и когда-угодно','Устраивают условия труда','За IT-технологиями - будущее, а фронтенд мне наиболее интересен']
			},
			{
				
				phone: '+380951723120',
				vk: "'http://vk.com/saimon_qwerty'"
			},
			{
				
				feedback:'Падающего толкни!'
			}
		];

	var content = tmpl(html,{
		data: profile
	});

	$('body').append(content);

});