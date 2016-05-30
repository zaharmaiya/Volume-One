$.getJSON("https://raw.githubusercontent.com/goit-fe/markup_fe2o/master/js_19-20/data.json", function(arr){
	var exercise1 = _.uniq(_.flattenDeep(_.map(arr,'skills'))).sort();
	console.log('Задание 1: ',exercise1);
	var exercise2 = _.uniq(_.map(_.flattenDeep(_.map(arr,'friends')),'name')).sort();
	console.log('Задание 2: ',exercise2);
	var exercise3 = _.map(_.sortBy(arr, function (arr){return arr.friends.length;}), 'name');
	console.log('Задание 3: ',exercise3);
});