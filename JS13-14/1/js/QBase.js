'use strict'

var QBase= {
	title: 'Тест по истории',
	question: [
	{
		q:'Когда началась Вторая мировая война?',
		answer:[
			{text:'1 сентября 1939 года', check: true},
			{text:'1 июня 1941 года', check: false},
			{text:'1 сентября 1943 года', check: false}
		]
	},
	{
		q:'Когда завершилась Вторая мировая война?',
		answer:[
			{text:'3 июня 1946 года', check: false},
			{text:'1 мая 1944 года', check:false},
			{text:'2 сентября 1945 года', check: true}
			]
	}
	]
};


localStorage.setItem('DBase',JSON.stringify(QBase));

var Data = localStorage.getItem('DBase');

var Data = JSON.parse(Data);

console.log(Data);